import React from 'react'
import './MentorBlock.scss'
import instagram from '../../assets/instagram.png'
import telegram from '../../assets/telegram.png'


const MentorBlock = ({bg, children, text, photo}) => {
  return (
    <div className='mentor-block-body'>
        <div className='mentor-block-main'>
        <div className='mentor-block-header'>
    <p className='mentor-block-title'>{children}</p>
        <p className='mentor-block-title'>{children}</p>
        <p className='mentor-block-title'>{children}</p>
    </div>
    <div className='mentor-block-bg-gif'>
        <img src={bg}/>
    </div>
    <div className='mentor-block-photo'>
        <img src={photo}/>
    </div>
    <div className='mentor-block-socials'>
    <img src={instagram}/>
    <img src={telegram}/>
    </div>
    </div>
    <div className='mentor-block-content'>
        {text}
    </div>
    </div>
  )
}

export default MentorBlock