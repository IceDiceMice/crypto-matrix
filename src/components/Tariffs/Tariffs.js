import React from 'react'
import './Tariffs.scss'
import TariffsBlock from '../TariffsBlock/TariffsBlock'

const Tariffs = () => {
  return (
    <div id='tariffs' className='tariffs-body'>
      <div className='tariffs-header'>
      <p className='tariffs-title'>Тарифи</p>
        <p className='tariffs-title'>Тарифи</p>
        <p className='tariffs-title'>Тарифи</p>
        <div className='tariffs-line'></div>
      </div>
      <div className='tariffs-main'>
        <TariffsBlock type={'standart'} price={'299$'}>
          <ul >
          <li>Участь в онлайн-лекціях</li>
          <li>Методички та додаткові матеріали</li>
          <li>Чат для учасників курсу</li>
          <li>Щотижня ZOOM-сесії з розборами ринку</li>
          <li>Щоденний аналіз ринку</li>
          <li>Сертифікат</li>
          </ul>
        </TariffsBlock>
        <TariffsBlock type={'profi'} price={'450$'}>
          <ul >
          <li>Участь в онлайн-лекціях</li>
          <li>Методички та додаткові матеріали</li>
          <li>Чат для учасників курсу</li>
          <li>Щотижня ZOOM-сесії з розборами ринку</li>
          <li>Розширений щоденний аналіз ринку</li>
          <li>Перевірка ДЗ</li>
          <li>Розбір перспективних монет та формування спотового портфелю</li>
          <li>Сертифікат</li>
          </ul>
        </TariffsBlock>
        <TariffsBlock type={'maximal'} price={'599$'}>
          <ul >
          <li>Участь в онлайн-лекціях</li>
          <li>Методички та додаткові матеріали</li>
          <li>Чат для учасників курсу</li>
          <li>Щотижня ZOOM-сесії з розборами ринку</li>
          <li>Розширений щоденний аналіз ринку</li>
          <li>Перевірка ДЗ</li>
          <li>Розбір перспективних монет та формування спотового портфелю</li>
          <li>Чат та 6 особистих Zoom-сесій з куратором</li>
          <li>Сертифікат</li>
          </ul>
        </TariffsBlock>
      </div>
    </div>
  )
}


export default Tariffs