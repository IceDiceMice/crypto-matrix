import React from 'react'
import logo from '../../assets/logo-long-red-white.gif'
import instagram from '../../assets/instagram-icon.png'
import telegram from '../../assets/telegram-icon.png'
import tiktock from '../../assets/tiktock-icon.png'
import youtube from '../../assets/youtube-icon.png'
import './Footer.scss'

const Footer = () => {

  const sendMessageToTelegram = () => {
        let message = 'Hi';
        let token = "5888101818:AAHaA1K22fDo0fJek8SUuxGh3n9rh1Q65k8";
        let chat_id = -809910993;
        let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}`;
        let oReq = new XMLHttpRequest();
            oReq.open("GET", url, true);
            oReq.send();
  }
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
                    <button onClick={sendMessageToTelegram}>Підписатись на новини</button>
                </div>
            </div>
            </div>
        <p>CRYPTOMATRIX ©2022 | Всі права захищено.</p>
    </div>
  )
}

export default Footer