import react, { useState,useEffect } from 'react'
import '../pages/pages.scss'
import { RiBarChart2Line } from "react-icons/ri";
import axios from 'axios';
import Loader from '../Loader/Loader';
import Header from '../components/Header';
import { storage } from '../firebaseConfig'
import authorization from '../authorization';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
const Diagnosis = () => {
    const [loading, setLoading] = useState(false)
    const [imagedis, setImageDis] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [imgPredict, setImgPredict] = useState(null);
    const [data, setData] = useState([])
    const [idUser,setIdUser] = useState(null)
    const handleFileChange = async (event) => {
        const acceptedFiles = event.target.files[0];
        const file = new FormData()
        file.append("file", acceptedFiles)
        setSelectedFile(file);
        const imageUrl = URL.createObjectURL(acceptedFiles);
        setImageDis(imageUrl);

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
    const handlePredictCick = async (event) => {


        
        try {
            setLoading(true)
            let response = await axios.post('https://erosennin.id.vn/api/denoisings/diagnosis', selectedFile)
            setData(response.data);
            setImgPredict(response.data[0].img)
            
            const storageref = ref(storage, `image/${selectedFile.get('file').name}`)
            const uploadTask = uploadBytesResumable(storageref, selectedFile.get('file'))
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
                        await axios.post('https://erosennin.id.vn/api/histories',{typeProcessing:'Diagnosis',image:downloadURL,imageProcessing:response.data[0].img,comments:response.data.slice(1,5),idUser})
                       
                      
                    });
                }
            );
            setLoading(false)
        } catch (error) {

        }

    }
    return (
        <><Header /> <div className='diagnosis-container'>
            <div className='disagnoisis-main'>
                <p style={{ fontSize: "70px", color: "#345", fontWeight: "bold", maxWidth: "600px", marginTop: "100px" }}>Clinical Diagnosis
                    of X-Ray</p>
                <div className='disagnoisis-bot'>
                    <div className='disagnoisis-upload'>
                        <div className='dis-btn'>
                            <label for="upload-img" className='btn-upload' >Upload Image</label>
                            <input type='file' id="upload-img" multiple onChange={handleFileChange} />

                        </div>
                        <a id='btn-predict-start' className={selectedFile ? 'btn-predict' : 'hidden'} onClick={handlePredictCick}>START PREDICT</a>
                        <p style={{ marginTop: "30px" }}>"Please use unblurred X-ray images in Jpeg,Png... up to 2mb in size."</p>
                        <div className='upload-boder-text'>
                            <p className={imagedis ? 'hidden' : 'upload-text'}>UPLOADED IMAGE RESULT</p>
                            <img className={imagedis ? 'img-disagsis' : 'hidden'} src={imagedis} />
                        </div>
                    </div>
                    <div className='disagnoisis-result'>
                        <p style={{ display: "flex", alignItems: "center", fontSize: "30px", fontWeight: "bold" }}><RiBarChart2Line style={{ marginRight: "5px" }} />   Diagnostic Result:</p>
                        {loading ? <Loader /> : <img className={imgPredict ? "desagnoisis-result-img" : 'hidden'} src={imgPredict ? imgPredict : ''}></img>}
                        <div className='result-disagnoisis'>
                            {data.slice(1, 5).map(data => {
                                return (<p>{data.name} ✔ {data.ac}</p>)
                            })}
                        </div>
                    </div>
                </div>
            </div>


        </div></>
    )
}
export default Diagnosis