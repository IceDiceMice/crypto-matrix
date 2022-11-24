import React from 'react'
import './YourData.scss'


 const YourData = () => {
  return (
    <section className='your-data-body'>
 <div className='your-data-header'>
        <p className='your-data-title'>Ваші дані</p>
        <p className='your-data-title'>Ваші дані</p>
        <p className='your-data-title'>Ваші дані</p>
        <div className='your-data-line'></div>
  </div>
    <div className='your-data-main'>
      <p className='your-data-main-text'>Вашу заявку прийнято!<br/><br/>На ваш e-mail надіслано подальші інструкції!</p>
      <p className='your-data-main-text'>Клікніть будь-де для повернення на головну</p>
    </div>
    </section>
  )
}

export default YourData
