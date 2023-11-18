import react from 'react'
import '../components/components.scss'
const Header = () => {
    return (
        <div className='container'>
            <div className='header'>
                <div className='right-header'>
                   
                   <img className='right-header-img' src='data:image/jpeg;base64,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'></img>
                    <a href='' className='header-task'>Denoising</a>
                    <a href='' className='header-task'>Diagnosis</a>
                    <a href='' className='header-task'>History</a>
                </div>
                <div className='left-header'>
                    <a href='' className='header-btn' style={{color:'rgb(99, 96, 96)',backgroundColor:'white'}}>Log in</a>
                    <a href='' className='header-btn sign-up' style={{color:'#fff',backgroundColor:'rgb(99, 96, 96)'}}>Sign up</a>
                </div>
               
            </div>
            
        </div>
    )
}
export default Header