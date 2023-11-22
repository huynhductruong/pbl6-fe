import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import '../loginComponents/login.scss'
const LoginComponents = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const HandleSubmit = async () => {
        let token = await axios.post('https://ltmnc2.bkdnoj.com/login', {
            email: email,
            password: password
        })
        localStorage.setItem('token', token.data)
        if (token.data) navigate('/')
    }
    return (
        <div className="login-container">
            <div className="login-main">
                <img className="login-main-img" src="https://img.freepik.com/free-photo/portrait-young-doctor-man-with-radiography_144627-21849.jpg?w=2000" />
                <div className="login-main-login">
                    <div style={{display:"flex",alignItems:"center",marginTop:"60px"}}>
                        <img className="img-login" src="https://deployyourai.cfd/assets/img/icons-xray.png" />
                        <p style={{fontWeight:"bold",fontSize:"50px"}}>AI APP</p>
                    </div>
                    <div style={{display:"flex",flexDirection:"column",marginTop:"50px",backgroundColor:"#fff",borderRadius:"3px",border:"1px solid gray"}}>
                        <p style={{fontWeight:"bold",fontSize:"30px",marginTop:"10px"}}>LOGIN</p>
                        <div className="div-input"><input  className="input-login" type="text" placeholder="Name"></input></div>
                        <div className="div-input"><input  className="input-login" type="text" placeholder="Email"></input></div>
                        <div  className="div-input"><input  className="input-login" type="text" placeholder="Password"></input></div>
                        <div  className="div-input"><input  className="input-login" type="text" placeholder="Confirm Password"></input></div>
                        <div style={{marginBottom:"80px",marginTop:"10px"}}><input style={{width:"90%",height:"35px",backgroundColor:"black",color:"#fff"}} type="button" placeholder="Email" value="REGISTER"></input></div>
                        

                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginComponents