import React, { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom';
import './style.scss'
import Header from "../../components/Header";
import authorization from '../../authorization';
import { storage } from '../../firebaseConfig'
import axios from 'axios';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
function Profile() {

    const [file, setFile] = useState(null)
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [phone, setPhoneNumber] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [userID, setUserID] = useState("")
    const [image, setImage] = useState("")
    const [imagePreview, setImagePreview] = useState(null);


    const handleFileChange = async (event) => {

        const acceptedFiles = event.target.files[0];
        const file = new FormData()
        file.append("file", acceptedFiles)
        setFile(file)
        const imageUrl = URL.createObjectURL(acceptedFiles);
        setImagePreview(imageUrl);


    }
    const handleUpdateClick = async () => {
        try {
            if(file!=null)
            {
                const storageref = ref(storage, `image/${file.get('file').name}`)
            const uploadTask = uploadBytesResumable(storageref, file.get('file'))
            uploadTask.on('state_changed',
                (snapshot) => {
                    // Observe state change events such as progress, pause, and resume
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {

                },
                () => {
                    // Handle successful uploads on complete
                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        
                        let data = await axios.post(`https://erosennin.id.vn/api/users/update/${userID}`, { name, address, phone, image: downloadURL })
                        localStorage.removeItem('token')
                        localStorage.setItem('token', data.data)
                        navigate('/')
                    });
                }
            );
            }
            else {
                let data = await axios.post(`https://erosennin.id.vn/api/users/update/${userID}`, { name, address, phone })
                localStorage.removeItem('token')
                localStorage.setItem('token', data.data)
                navigate('/')
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        const Author = async () => {
            const data = await authorization()
            console.log(data)
            setName(data.name)
            setEmail(data.email)
            setPhoneNumber(data.phone)
            setAddress(data.address)
            setImagePreview(data.image)
            setUserID(data._id)
        }
        Author()
    }, [])
    return (
        <>
            <Header />
            <div className='profile'>
                <div className='profile-main'>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={imagePreview ? imagePreview : '#'} className='profile-image'></img>
                        <label for='image' className='file-lable'>Update image</label>
                        <input type='file' id='image' className='hidden' onChange={handleFileChange} ></input>
                    </div>
                    <div className="profile-div-input"><input className="input-profile" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name}></input></div>

                    <div className="profile-div-input"><input className="input-profile" type="text" placeholder="Email" value={email} disabled></input></div>
                    <div className="profile-div-input"><input className="input-profile" type="text" placeholder="Address" onChange={(e) => setAddress(e.target.value)} value={address}></input></div>
                    <div className="profile-div-input"><input className="input-profile" type="text" placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} value={phone}></input></div>
                    <p className='btn-update-profile' onClick={handleUpdateClick}>UPDATE</p>
                </div>
            </div></>
    )
}

export default Profile
