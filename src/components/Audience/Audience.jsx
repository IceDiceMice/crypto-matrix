import React from 'react'
import './Audience.scss'

const Audience = () => {
  return (
    <section className='audience-body'>
      <div className='audience-title'>
        <p className='for-who'>ДЛЯ КОГО</p>
        <p className='for-who'>ДЛЯ КОГО</p>
        <p className='for-who'>ДЛЯ КОГО</p>
        <div className='line'></div>
      </div>
      <div className='audience-description'>
      <div className='quote'>
      <div>Навчання без роздумів – шкідливе,<br/>роздуми без навчання – небезпечні.<br/> Конфуцій</div>
      </div>
      <div className='questions'>
        <p>Десь чули про криптовалюту і тільки починаєте робити перші кроки?</p>
        <p>Хочете освоїти для себе нову сферу діяльності для додаткового стабільного доходу?</p>
        <p>Вже знайомі з трейдингом, але не отримуєте бажаного результату?</p>
        <p>Хочете розібратись в чому проблема, а також переглянути свою торгову стратегію?</p>
        <p>Бажаєте підвищити кваліфікацію та підвищити свій рівень у сфері трейдингу?</p>
      </div>
      </div>
    </section>
  )
}

export default Audience