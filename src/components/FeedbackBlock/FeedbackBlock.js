import React from 'react'
import './FeedbackBlock.scss'

const FeedbackBlock = ({children, name, job, photo}) => {
  return (
    <div className='feedback-block-body'>
<div className='feedback-block-main'>
    <img src={photo}/>
    <div >
        <p className='feedback-block-info'>{name}</p>
        <p className='feedback-block-info'>{job}</p>
    </div>
</div>
<p className='feedback-block-content'>{children}</p>
    </div>
  )
}

export default FeedbackBlock