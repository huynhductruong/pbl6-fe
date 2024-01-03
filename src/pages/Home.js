import react from 'react'
import './pages.scss'
import Header from '../components/Header'
import image from '../assets/denoise.jpg'
const Home = () => {


    return (
        <><Header /><div className='home-container'>
            <div className='home-main'>
                <div className='home-main-right'>
                    <img className='main-img' src={image}></img>
                    <div className='text-show'>
                        <p id='name-denoise'>DENOISE IMAGE </p>
                        <p id='name-100'>100% Automatically and <span>Free</span> </p>
                    </div>

                </div>
                <div className='home-main-left'>

                    <div className='upload'><a href='/upload' class="btn-upload">
                        Upload Image
                    </a >
                    </div>
                    <div className='home-left-bot'>
                        <div className='left-bot-p'>
                            <p>No image?</p>
                            <p>Try one of these:</p>
                        </div>
                        <img className='left-bot-img' src='https://scontent.fsgn2-10.fna.fbcdn.net/v/t1.15752-9/399925673_1070126340784887_1586182296189652513_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=xdpf8L4D0REAX_JzYnk&_nc_ht=scontent.fsgn2-10.fna&oh=03_AdRibDzkoH585tPa4ADHw4ySu2mvWT6bzYOekcWAh3l-Hw&oe=659AA5E2'></img>
                        <img className='left-bot-img' src='https://scontent.fsgn2-9.fna.fbcdn.net/v/t1.15752-9/385526607_6554223101349150_8756464349798510721_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=vKsE3G9RCZYAX_r8J0Q&_nc_ht=scontent.fsgn2-9.fna&oh=03_AdR1QjoDPDplmKxpi9h550cUdvQD87TXP4lXTLjU7b1rEQ&oe=659A91F3'></img>
                        <img className='left-bot-img' src='https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.15752-9/405855140_3734473086820938_2622561130170882325_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=2Lhff1iX0HgAX9qO07e&_nc_ht=scontent.fsgn2-6.fna&oh=03_AdSFn2UYkCSGbZvtSp-2bPmjolqSr_4FFfqEuzBdNrdd2g&oe=659A8B7D'></img>
                        <img className='left-bot-img' src='https://scontent.fsgn2-7.fna.fbcdn.net/v/t1.15752-9/375194564_367852785783485_3082243376390436104_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=DvBktJ04wJAAX9rkase&_nc_ht=scontent.fsgn2-7.fna&oh=03_AdRLkXuMzkNSHuieTdt3Rbu9kYvcw7MO_lUsQzy7ydsRfg&oe=659AAC90'></img>
                    </div>
                    <div className='text-bot' style={{ fontSize: "10px" }}>This site is protected by hCaptcha and its Privacy Policy and Terms of Service apply.</div>


                </div>
            </div>
            <div className='home-bot-stunning-quality'>
                <p className='text-stunning'>Stunning Quality</p>
                <div className='task-stunning'>
                    <a href=''>People</a>
                    <a href=''>Products</a>
                    <a href=''>Animals</a>
                    <a href=''>Cars</a>
                    <a href=''>Graphics</a>
                </div>
                <img className="img-stunning" src='https://vietnamitx.com/attachments/topaz-denoise-ai-2-4-2-giam-nhieu-anh-khu-nhieu-va-lam-net-anh-chi-trong-nhay-mat-jpg.1576/'></img>
            </div>
            <div className='home-bottom'>
                <p className='home-bottom-text'>Implementation Team</p>
                <div className='home-admin'>
                    <div className='admin'>
                        <p className='admin-text'>LEGENDARY</p>
                        <p className='admin-text min-admin'>"We are impressed by the AI and think it's the best choice on the market."</p>
                        <img className='admin-img' src='https://sb.kaleidousercontent.com/67418/160x160/118585f82a/sonymusic_author.jpg'></img>
                        <p className='admin-name'>Huỳnh Đức Trường</p>
                        <p className='admin-role'>CEO</p>
                    </div>
                    <div className='admin'>
                        <p className='admin-text'>LEGENDARY</p>
                        <p className='admin-text min-admin'>"We are impressed by the AI and think it's the best choice on the market."</p>
                        <img className='admin-img ' src='https://sb.kaleidousercontent.com/67418/160x160/118585f82a/sonymusic_author.jpg'></img>
                        <p className='admin-name'>Lê Văn Thành</p>
                        <p className='admin-role'>DAN</p>
                    </div>
                    <div className='admin'>
                        <p className='admin-text'>LEGENDARY</p>
                        <p className='admin-text min-admin'>"We are impressed by the AI and think it's the best choice on the market."</p>
                        <img className='admin-img' src='https://sb.kaleidousercontent.com/67418/160x160/118585f82a/sonymusic_author.jpg'></img>
                        <p className='admin-name'>Võ Trí Phúc</p>
                        <p className='admin-role'>NON</p>
                    </div>
                </div>
            </div>

        </div></>
    )
}
export default Home