import React from 'react'
import './CommonQuestions.scss'
import CommonQuestionsBlock from '../CommonQuestionsBlock/CommonQuestionsBlock'

const CommonQuestions = () => {
  return (
    <div className='common-questions-body'>
    <div className='commom-questions-header'>
    <p className='commom-questions-title'>Часті питання</p>
    <p className='commom-questions-title'>Часті питання</p>
    <p className='commom-questions-title'>Часті питання</p>
    <div className='commom-questions-line'></div>
  </div>
  <div className='commom-questions-main'>
    <div className='commom-questions-main-quote'>
        <p>готові розпочати свій шлях у сфері криптотрейдингу і заробляти, незалежно від місця проживання чи ситуації в світі?</p>
        <button>Приєднатись</button>
    </div>
    <div className='commom-questions-main-questions'>
        <CommonQuestionsBlock>Чи підійде цей курс людині, яка ще поки не розбирається в трейдингу?</CommonQuestionsBlock>
        <CommonQuestionsBlock>Кому взагалі підійде трейдинг?</CommonQuestionsBlock>
        <CommonQuestionsBlock>Чи зможу я заробляти на цьому після навчання?</CommonQuestionsBlock>
        <CommonQuestionsBlock>Скільки можна заробляти на цьому?</CommonQuestionsBlock>
        <CommonQuestionsBlock>Скільки часу займає трейдинг?</CommonQuestionsBlock>
        <CommonQuestionsBlock>Чи залишиться в мене доступ до матеріалів після закінчення курсу?</CommonQuestionsBlock>
        <CommonQuestionsBlock>Чи буде в мене можливість поєднувати навчання та основну роботу?</CommonQuestionsBlock>
    </div>
  </div>
</div>
  )
}

export default CommonQuestions