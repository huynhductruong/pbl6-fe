import React,{ useState } from 'react';
import { FaUpload } from 'react-icons/fa';
import { TfiAngleDoubleRight } from "react-icons/tfi";
import './pages.scss'
import axios from 'axios';
import Loader from '../Loader/Loader';
const Upload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [imageDenoise, setImageDenoise] = useState(null);
    const [loading,setLoading] = useState(false)
    const handleFileChange = async (event) => {
        setLoading(true)
        const acceptedFiles = event.target.files[0];
        const file = new FormData()
        file.append("file",acceptedFiles)
        setSelectedFile(file);
        const imageUrl = URL.createObjectURL(acceptedFiles);
        setImagePreview(imageUrl);
            let imgDenoise = await axios.post('http://localhost:3001/denoisings/denoisis',file)
            setImageDenoise(imgDenoise.data.img)
        setLoading(false)
      }
    return (
        <div className='upload-container'>
            <div className= {imagePreview?'denoise-result':'hidden'}>

                <div className='flex-2' >
                    <div className='img-noise'>
                    <img className='denoise-result-img' src={imagePreview?imagePreview:'https://o.remove.bg/downloads/d15502b2-05a7-44bd-94c7-ff87f7e63ba4/t%E1%BA%A3i_xu%E1%BB%91ng__2_-removebg-preview.png'}/>
                    <p>Noise</p>
                    </div>
                    <TfiAngleDoubleRight style={{marginLeft:"20px"}}/><TfiAngleDoubleRight/><TfiAngleDoubleRight/><TfiAngleDoubleRight/><TfiAngleDoubleRight style={{marginRight:"20px"}}/>
                    <div className='img-noise'>{loading?<Loader/>: <img className='denoise-result-img' src={imageDenoise?imageDenoise:''}/> } 
                        <p>Denoise</p>
                    </div>
                </div>
                <div className='dowload'>
                    <p className='dowload-btn'>Dowload</p>
                </div>
            </div>

            <div className='upload-main'>

                <div className='upload-page'><label  for="file-upload" class="btn-upload">
                   <FaUpload style={{marginRight:"10px"}}/> Upload Image
                </label >
                <input type='file' onChange={handleFileChange} id = "file-upload" multiple/>
                </div>
                <div className='upload-bot'>
                    <div className='upload-bot-p'>
                        <p>No image?</p>
                        <p>Try one of these:</p>
                    </div>
                    <img className='upload-bot-img' src='https://static.remove.bg/uploader-examples/person/2_thumbnail.jpg'></img>
                    <img className='upload-bot-img' src='https://static.remove.bg/uploader-examples/animal/5_thumbnail.jpg'></img>
                    <img className='upload-bot-img' src='https://static.remove.bg/uploader-examples/car/3_thumbnail.jpg'></img>
                    <img className='upload-bot-img' src='https://static.remove.bg/uploader-examples/product/9_thumbnail.jpg'></img>
                </div>
                <div className='text-bot' style={{ fontSize: "10px" }}>By uploading an image or URL you agree to our Terms of Service. This site is protected by hCaptcha and its Privacy Policy and Terms of Service apply.</div>


            </div>
        </div>
    );
};

export default Upload;