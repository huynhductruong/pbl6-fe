import React from "react"
import './index.scss'
const HistoryComponent = (props) => {
    return (
        <div className="history-component">
            <div className="history-main">
                <p className="history-li"  style={{color:'#000'}}>{props.STT}</p>
                <p className="history-li" style={{color:'#000'}}>{props.data.typeProcessing}</p>
                <div className="history-li" style={{display:'flex',justifyContent:'center'}}><img className="history-img"   src={props.data.image}></img></div>
                <div className="history-li" style={{display:'flex',justifyContent:'center'}}><img className="history-img" src={props.data.imageProcessing}></img></div>
                <p className="history-li" style={{color:'#000'}}>{props.data.createdAt.slice(0,10)}</p>
                <p className="comments" style={{ minWidth: '452px', textAlign: 'center',color:'#000' }}>{props.data?.comments?props.data.comments.map(e=>{
                    return (
                        (<p>{e.name} ✔ {e.ac}</p>)
                    )
                }):'No comments found'}</p>
            </div>
        </div>
    )
}
export default HistoryComponent