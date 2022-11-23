import React from 'react'
import './Feedbacks.scss'
import FeedbackBlock from '../FeedbackBlock/FeedbackBlock'
import photo1 from '../../assets/Vasilina.png'
import photo2 from '../../assets/Stepan.png'
import photo3 from '../../assets/Anastasia.png'
import photo4 from '../../assets/Andriy.png'

const Feedbacks = () => {
  return (
    <div className='feedbacks-body'>

<div className='feedbacks-header'>
    <p className='feedbacks-title'>Відгуки</p>
      <p className='feedbacks-title'>Відгуки</p>
      <p className='feedbacks-title'>Відгуки</p>
      <div className='feedbacks-line'></div>
    </div>
    <div className='feedbacks-main'>
<FeedbackBlock name={'Василина'} job={'Перукар'} photo={photo1}>
Дуже сподобалось навчання. Стріми взагалі топ. А головне, нарешті не дихаю хімією і заробляю нормальні гроші.
</FeedbackBlock>
<FeedbackBlock name={'Степан'} job={'Продавець'} photo={photo2}>
Хлопці молодці. Реально вся необхідна інформація в одному місці. Трейдерські чати взагалі просто скарб.
</FeedbackBlock>
<FeedbackBlock name={'Анастасія'} job={'Танцівниця'} photo={photo3}>
Хочу подякувати команді CRYPTOMATRIX за терпіння і ті знання, які ви мені дали. Ніхто не забив, хоча мені було нелегко.
</FeedbackBlock>
<FeedbackBlock name={'Андрій'} job={'Оператор АЗС'} photo={photo4}>
Дуже дякую за курс. Нарешті заробляю. З’їхав від батьків, завів собі пса. Даєте знання, які змінюють життя на краще.
</FeedbackBlock>
    </div>
    </div>
  )
}

export default Feedbacks