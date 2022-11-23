import React from 'react'
import './ProgramBlock.scss'

const ProgramBlock = ({children, title}) => {
  return (
    <div className='program-block-body'>
    <h1>{title}</h1>
    <div>{children}</div>
    </div>
  )
}

export default ProgramBlock