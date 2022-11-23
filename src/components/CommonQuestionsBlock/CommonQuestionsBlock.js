import React from 'react'
import './CommonQuestionsBlock.scss'

const CommonQuestionsBlock = ({children}) => {
  return (
    <div className='common-questions-block-body'>
        <p>{children}</p>
        </div>
  )
}

export default CommonQuestionsBlock