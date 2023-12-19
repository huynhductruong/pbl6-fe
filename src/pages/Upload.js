import React, { useState ,useEffect} from 'react';
import { FaUpload } from 'react-icons/fa';
import { TfiAngleDoubleRight } from "react-icons/tfi";
import './pages.scss'
import axios from 'axios';
import Loader from '../Loader/Loader';
import Header from '../components/Header';
import { storage } from '../firebaseConfig'
import authorization from '../authorization';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
const Upload = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [imageDenoise, setImageDenoise] = useState(null);
    const [loading, setLoading] = useState(false)
    const [idUser,setIdUser] = useState(null)
    const handleFileChange = async (event) => {
       
        const acceptedFiles = event.target.files[0];
        const file = new FormData()
        file.append("file", acceptedFiles)
        setSelectedFile(file);
        const imageUrl = URL.createObjectURL(acceptedFiles);
        setImagePreview(imageUrl);
        
        
        try {
            setLoading(true)
            let imgDenoise = await axios.post('https://erosennin.id.vn/api/denoisings/denoisis', file)
           
            setImageDenoise(imgDenoise.data.img)
            
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
                        await axios.post('https://erosennin.id.vn/api/histories',{typeProcessing:'Denoising',image:downloadURL,imageProcessing:imgDenoise.data.img,idUser})
                       
                      
                    });
                }
            );
            setLoading(false)
        } catch (error) {

        }
    }
    useEffect(()=>
    {
        const Author = async ()=>
        {
            const data = await authorization()
        
            setIdUser(data?.name?data._id:null)


        }
        Author()
    },[])
    return (
        <><Header />
            <div className='upload-container'>
                <div className={imagePreview ? 'denoise-result' : 'hidden'}>

                    <div className='flex-2' >
                        <div className='img-noise'>
                            <img className='denoise-result-img' src={imagePreview ? imagePreview : 'https://o.remove.bg/downloads/d15502b2-05a7-44bd-94c7-ff87f7e63ba4/t%E1%BA%A3i_xu%E1%BB%91ng__2_-removebg-preview.png'} />
                            <p>Noise</p>
                        </div>
                        <TfiAngleDoubleRight style={{ marginLeft: "20px" }} /><TfiAngleDoubleRight /><TfiAngleDoubleRight /><TfiAngleDoubleRight /><TfiAngleDoubleRight style={{ marginRight: "20px" }} />
                        <div className='img-noise'>{loading ? <Loader /> : <img className='denoise-result-img' src={imageDenoise ? imageDenoise : ''} />}
                            <p>Denoise</p>
                        </div>
                    </div>
                    <div className='dowload'>

                        <a className='dowload-btn' href={imageDenoise} download="denoised_image.jpg">Download</a>
                    </div>
                </div>

                <div className='upload-main'>

                    <div className='upload-page'><label for="file-upload" class="btn-upload">
                        <FaUpload style={{ marginRight: "10px" }} /> Upload Image
                    </label >
                        <input type='file' onChange={handleFileChange} id="file-upload" multiple />
                    </div>
                    <div className='upload-bot'>
                        <div className='upload-bot-p'>
                            <p>No image?</p>
                            <p>Try one of these:</p>
                        </div>
                        <img className='upload-bot-img' src='https://scontent.fsgn2-10.fna.fbcdn.net/v/t1.15752-9/399925673_1070126340784887_1586182296189652513_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=xdpf8L4D0REAX_JzYnk&_nc_ht=scontent.fsgn2-10.fna&oh=03_AdRibDzkoH585tPa4ADHw4ySu2mvWT6bzYOekcWAh3l-Hw&oe=659AA5E2'></img>
                        <img className='upload-bot-img' src='https://scontent.fsgn2-9.fna.fbcdn.net/v/t1.15752-9/385526607_6554223101349150_8756464349798510721_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=vKsE3G9RCZYAX_r8J0Q&_nc_ht=scontent.fsgn2-9.fna&oh=03_AdR1QjoDPDplmKxpi9h550cUdvQD87TXP4lXTLjU7b1rEQ&oe=659A91F3'></img>
                        <img className='upload-bot-img' src='https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.15752-9/405855140_3734473086820938_2622561130170882325_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=2Lhff1iX0HgAX9qO07e&_nc_ht=scontent.fsgn2-6.fna&oh=03_AdSFn2UYkCSGbZvtSp-2bPmjolqSr_4FFfqEuzBdNrdd2g&oe=659A8B7D'></img>
                        <img className='upload-bot-img' src='https://scontent.fsgn2-7.fna.fbcdn.net/v/t1.15752-9/375194564_367852785783485_3082243376390436104_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=DvBktJ04wJAAX9rkase&_nc_ht=scontent.fsgn2-7.fna&oh=03_AdRLkXuMzkNSHuieTdt3Rbu9kYvcw7MO_lUsQzy7ydsRfg&oe=659AAC90'></img>
                    </div>
                    <div className='text-bot' style={{ fontSize: "10px",marginLeft:'140px' }}>This site is protected by hCaptcha and its Privacy Policy and Terms of Service apply.</div>


                </div>
            </div></>
    );
};

export default Upload;