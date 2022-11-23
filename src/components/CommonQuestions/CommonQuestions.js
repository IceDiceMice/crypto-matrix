import React from 'react';
import { useState } from "react";
import './CommonQuestions.scss'
import CommonQuestionsBlock from '../CommonQuestionsBlock/CommonQuestionsBlock'
import { questions } from './questions';

const CommonQuestions = () => {
  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };
  return (
    <div id="chaps" className='common-questions-body'>
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
          {questions.map((faq, index) => (
            <CommonQuestionsBlock
              onToggle={() => handleToggle(index)}
              isActive={clicked === index}
              key={index}
              faq={faq}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CommonQuestions