import React from 'react'
import './Results.scss'
import SquareGroup from '../SquareGroup/SquareGroup'

const Results = () => {
  return (
    <div className='results-body'>
          <div className='results-header'>
        <p className='results-title'>Результати</p>
        <p className='results-title'>Результати</p>
        <p className='results-title'>Результати</p>
        <div className='results-line'></div>
      </div>
      <div className='results-main'>
          <div>
            <SquareGroup></SquareGroup>
            <p>Навчитесь проводити аналіз ринку, складати ефективні стратегії, а також матимете розуміння загального стану економіки та руху активів.</p>
          </div>
          <div>
          <SquareGroup></SquareGroup>
          <p>Опануєте ефективний менеджмент, навчитесь керувати своїм капіталом правильно та примножувати його.</p>
          </div>
          <div>
          <SquareGroup></SquareGroup>
          <p>Зможете реалізувати себе в сфері трейдингу. Відкриєте для себе професію, яка дасть вам змогу заробляти будь-де і в будь-який час, незалежно від ситуації в світі.</p>
          </div>
          <div>
          <SquareGroup></SquareGroup>
          <p>З точки зору психології будете готові до будь-якого розвитку подій, навчитесь правильно сприймати ринок, організовувати робочий процес, ставити перед собою цілі та виконувати їх, а також торгувати в плюс.</p>
          </div>
        </div>
        <button>Приєднатись</button>
    </div>
  )
}

export default Results