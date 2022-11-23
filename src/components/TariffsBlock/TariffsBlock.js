import React from 'react'
import './TariffsBlock.scss'

const TariffsBlock = ({type, price, children}) => {
  return (
    <div className='tariffs-block-body'>
        <div className='tariffs-block-header'>
    <div className='type'>
    <p className='tariffs-block-title'>{type}</p>
        <p className='tariffs-block-title'>{type}</p>
        <p className='tariffs-block-title'>{type}</p>
    </div>
    <div className='price'>
    <p className='tariffs-block-title'>{price}</p>
        <p className='tariffs-block-title'>{price}</p>
        <p className='tariffs-block-title'>{price}</p>
    </div>
    </div>
    <div className='tarrifs-block-main'>
<div className='tarrifs-block-main-text'>
{children}
</div>
<button>Приєднатись</button>
    </div>
    </div>
  )
}

export default TariffsBlock