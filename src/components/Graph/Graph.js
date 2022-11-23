import React from 'react'
import './Graph.scss'
import graph from '../../assets/graph-desktop.png'

const Graph = () => {
  return (
    <section className='graph-body'>
      <img src={graph}></img>
    </section>
  )
}

export default Graph