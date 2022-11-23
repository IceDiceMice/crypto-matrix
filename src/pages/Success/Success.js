import React from 'react'
import './Success.scss'

 const Success = () => {
  return (
    <section className='success-body'>
     <div className='success-header'>
        <p className='success-title'>Ваші дані</p>
        <p className='success-title'>Ваші дані</p>
        <p className='success-title'>Ваші дані</p>
        <div className='success-line'></div>
     
  </div>
  <div className='success-main'>
    <p>Розум заключається не тільки в знанні, а і в умінні застосовувати знання на ділі.
Аристотель</p>
<div>
  <p>Вказуйте e-mail коректно, адже на нього буде надіслано подальші інструкції.</p>
  <div>
    <input placeholder="Введіть ім'я та прізвище"/>
    <input placeholder='Введіть номер телефону'/>
    <input placeholder='Введіть e-mail'/>
  </div>
  <button>Підтвердити</button>
</div>
  </div>
    </section>
  )
}

export default Success