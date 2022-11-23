import React from 'react'
import { useRef } from "react"
import './CommonQuestionsBlock.scss'
import arrow from '../../assets/arrow-up.svg'
const CommonQuestionsBlock = ({ faq, isActive, onToggle }) => {
  const { question, answer } = faq;
  const contentEl = useRef();
  const activeClass = isActive ? 'active' : ''
  const classNames = `common-questions-block-body ${activeClass}`
  return (
    <div className={classNames} >
      <div onClick={onToggle} className='common-question'>
        <p>{question}</p>
        <img className={`${isActive ? "arrow-down" : ""}`} src={arrow} />
      </div>
      <span ref={contentEl} style={
        isActive
          ? { height: contentEl.current.scrollHeight }
          : { height: "0px" }
      }>{answer}</span>
    </div>
  )
}

export default CommonQuestionsBlock