import react,{ useState }  from 'react'
import '../pages/pages.scss'
import { RiBarChart2Line } from "react-icons/ri";
import axios from 'axios';
import Loader from '../Loader/Loader';
const Diagnosis = () => {
    const [loading,setLoading] = useState(false)
    const [imagedis, setImageDis] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [imgPredict, setImgPredict] = useState(null);
    const [data,setData] = useState([])
    const handleFileChange = async (event) => {
        const acceptedFiles = event.target.files[0];
        const file = new FormData()
        file.append("file",acceptedFiles)
        setSelectedFile(file);
        const imageUrl = URL.createObjectURL(acceptedFiles);
        setImageDis(imageUrl);
       
      }
      const handlePredictCick = async (event) => {
            setLoading(true)
            let imgPredict = await axios.post('http://localhost:3001/denoisings/diagnosis',selectedFile)
            setData(imgPredict.data);
            setImgPredict(imgPredict.data[0].img)
            setLoading(false)
      }
    return (
        <div className='diagnosis-container'>
            <div className='disagnoisis-main'>
                <p style={{ fontSize: "70px", color: "#345", fontWeight: "bold", maxWidth: "600px", marginTop: "100px" }}>Clinical Diagnosis
                    of Pneumonia</p>
                <div className='disagnoisis-bot'>
                    <div className='disagnoisis-upload'>
                        <div className='dis-btn'>
                            <label for="upload-img" className='btn-upload' >Upload Image</label>
                            <input type='file' id="upload-img" multiple onChange={handleFileChange} />

                        </div>
                        <a className={selectedFile?'btn-predict':'hidden'} onClick={handlePredictCick}>START PREDICT</a>
                        <p style={{marginTop:"30px"}}>"Please use unblurred X-ray images in Jpeg,Png... up to 2mb in size."</p>
                        <div className='upload-boder-text'>
                            <p className={imagedis?'hidden':'upload-text'}>UPLOADED IMAGE RESULT</p>
                            <img  className={imagedis?'img-disagsis':'hidden'} src={imagedis}/>
                        </div>
                    </div>
                    <div className='disagnoisis-result'>
                        <p style={{ display: "flex", alignItems: "center", fontSize: "30px", fontWeight: "bold" }}><RiBarChart2Line style={{ marginRight: "5px" }} />   Diagnostic Result:</p>
                        {loading?<Loader/>:<img  className ={imgPredict? "desagnoisis-result-img":'hidden'} src={imgPredict?imgPredict:''}></img>}
                        <div className='result-disagnoisis'>
                            {data.slice(1, 5).map(data=>
                                {
                                    return ( <p>{data.name} ✔ {data.ac}</p>)
                                })}
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Diagnosis