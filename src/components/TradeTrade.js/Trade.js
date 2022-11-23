import React from 'react'
import './Trade.scss'
import video from '../../assets/header-video.MP4'

const Trade = () => {

  return (
    <div className='trade'>
        <video autoPlay muted loop id="myVideo">
  <source src={video} type="video/mp4" />
</video>
    <p className='first'>TRADE</p>
    <p className='second'>TRADE</p>
    <p className='third'>TRADE</p>
    <p className='fourth'>це не просто робота, це стиль життя</p>
<div className='description' >
    <p >Приєднуйся до курсу з трейдингу і ставай частиною криптоком’юніті,
     заробляючи незалежно від місця знаходження чи ситуації в світі. Початок курсу 28 листопада, завершення 23 грудня.</p>
     </div>
     <button>ПРИЄДНАТИСЬ</button>
    </div>
  )
}

export default Trade