
import React, { useState, useEffect, useRef } from 'react';

import { AiFillDatabase, AiOutlinePoweroff} from "react-icons/ai";
import { FaHistory } from "react-icons/fa";
import '../components/components.scss'
const UserLogin = (props) => {
    const [onHidden, setonHidden] = useState(false)
    const [admin, setAdmin] = useState(false)
    const [data, setData] = useState()
    const [vip,setVip] = useState(false)
    const handleClick = () => {
        setonHidden(!onHidden)
    }
    const handleClickLogOut = () => {
        localStorage.removeItem('token')
    }
    let menuRef = useRef();
    useEffect(() => {
       
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setonHidden(false);
            }
        };
        document.addEventListener('mousedown', handler)
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    },[data])
    return (
        <div className='face-login' ref={menuRef} >
            <h5 className={vip?'nhapnhay vip':'hidden'}>VIP</h5>
            <img id='img-profile-header' className='face-img' src={props?.image ? props.image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDZ3sl-uWEz_3FQhY92IoGCiRwUjDe73vUEg&usqp=CAU'} title={props?.name?props.name : 'Any One'} onClick={handleClick} >
            </img>
            <div className={onHidden ? 'block' : 'hidden'}>
                <a id='setting-account' href={admin ? '/dashboard' : '/profile'}><AiFillDatabase></AiFillDatabase><h5>Quản lý tài khoản</h5></a>
                <hr style={{width:"107.5%"}}/>
                <a id='header-history' href='/history'  ><FaHistory></FaHistory><h5>Lịch sử</h5></a>
                <hr style={{width:"107.5%"}}/>
                <a id ='header-logout' href='/' onClick={handleClickLogOut} ><AiOutlinePoweroff></AiOutlinePoweroff><h5>Đăng xuất</h5></a>
            </div>
        </div>

    )
}
export default UserLogin