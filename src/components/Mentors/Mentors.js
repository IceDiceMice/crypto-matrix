import React from 'react'
import './Mentors.scss'
import MentorBlock from '../MentorBlock/MentorBlock'
import bgGif from '../../assets/ezgif-2.png'
import photo1 from '../../assets/photo-1.png'
import photo2 from '../../assets/photo-2.png'
import photo3 from '../../assets/photo-3.png'

const Mentors = () => {
  return (
    <div className='mentors-body'>
      <div className='mentors-header'>
    <p className='mentors-title'>Ментори</p>
      <p className='mentors-title'>Ментори</p>
      <p className='mentors-title'>Ментори</p>
      <div className='mentors-line'></div>
    </div>
    <div className='mentors-main'>
      <MentorBlock bg={bgGif} photo={photo1} text='Для мене трейдинг - це крута робота, зайнятість, називайте як хочете. З часом трейд став моїм лайфстайлом, тому що це робота, яка дає право вибору коли і де я хочу працювати. Це зайнятість, яка приносить задоволення і дає свободу дій.'>Самборський Віталій</MentorBlock>
      <MentorBlock bg={bgGif} photo={photo2} text='В трейдингу доволі давно, розпочинав з базових понять технічного аналізу якими користуюсь і досі, проте зараз торгую по стратегії Smart Money. Вважаю, що кожна людина має змогу реалізувати себе в трейдингу, проте фундаментом для цього буде наполегливе навчання та дисципліна.'>Михайлинин Дмитро</MentorBlock>
      <MentorBlock bg={bgGif} photo={photo3} text='В минулому спробував себе в багатьох сферах, але відкрив себе в трейдінгу. З цією сферою знайомий з 2019 року і розпочинав свій шлях з теханалізу, але розуміння ринку прийшло після опанування концепції Smart Money.'>Пакін Дмитро</MentorBlock>
    </div>
    </div>
  )
}

export default Mentors