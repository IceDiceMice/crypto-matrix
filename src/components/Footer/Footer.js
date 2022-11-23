import React from 'react'
import logo from '../../assets/logo-long-red-white.gif'
import instagram from '../../assets/instagram-icon.png'
import telegram from '../../assets/telegram-icon.png'
import tiktock from '../../assets/tiktock-icon.png'
import youtube from '../../assets/youtube-icon.png'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer-body'>
        <div >
            <div className='footer-main'>
                <img src={logo} />
                <div className='footer-main-socials'>
                    <img src={youtube}/>
                    <img src={telegram}/>
                    <img src={tiktock}/>
                    <img src={instagram}/>
                </div>
                <div className='footer-main-controls'>
                    <input placeholder='Введіть текст' />
                    <button>Підписатись на новини</button>
                </div>
            </div>
            </div>
        <p>CRYPTOMATRIX ©2022 | Всі права захищено.</p>
    </div>
  )
}

export default Footer