import React, { useEffect, useState } from "react"
import './index.scss'
import HistoryComponent from "../../components/historyComponent"
import Header from "../../components/Header"
import axios from "axios"
import authorization from "../../authorization"
const History = () => {
    const [histories,setHistories] = useState(null)
    useEffect(()=>
    {
        const getAllHistories = async () =>
        {
            const data = await authorization()
            
            let his = await axios.get(`https://erosennin.id.vn/api/histories/${data._id}`)
            setHistories(his.data)
        }
        getAllHistories()
    },[])
    return (
        <>
            <Header />
            <div className="container-history">
                <div className="history-main">
                    <p className="history-li">STT</p>
                    <p className="history-li">Processing</p>
                    <p className="history-li">Image</p>
                    <p className="history-li">Image Processing</p>
                    <p className="history-li">Date</p>
                    <p className="history-li" style={{ minWidth: '452px', textAlign: 'center' }}>Comment</p>
                </div>
                <div className="history-body">
                    {
                        histories?histories.map((e,index) => {
                            return <HistoryComponent data = {e} STT ={index+1} key={e._id}/>
                        }):'No information found'
                    }
                </div>
            </div>
        </>
    )
}
export default History