import React from 'react'
import './Format.scss'
import photo1 from '../../assets/circle-1.png'
import photo2 from '../../assets/circle-2.png'
import photo3 from '../../assets/circle-3.png'
import photo4 from '../../assets/circle-4.png'
import form1 from '../../assets/form-1.png'
import form2 from '../../assets/form-2.png'
import form3 from '../../assets/form-3.png'
import form4 from '../../assets/form-4.png'

const Format = () => {
  return (
    <div className='format-body'>
            <div className='format-header'>
        <p className='format-title'>Формат курсу</p>
        <p className='format-title'>Формат курсу</p>
        <p className='format-title'>Формат курсу</p>
        <div className='format-line'></div>
      </div>

      <div className='format-main'>

        <div className='format-lectures'>
          <div>
          <img src={photo1} />
          <img className='format-forms' src={form1}/>
          </div>
          <p>Навчання проходить в форматі онлайн лекції з презентацією графіка, що дає змогу краще засвоїти інформацію та обговорити питання в режимі реального часу.</p>
        </div>

        <div className='format-approuch'>
          <div>
        <img src={photo2} />
        <img className='format-forms' src={form2}/>
        </div>
        <p>Наша мета  — навчити кожного студента, поділитись досвідом та вміннями для подальшого розвитку.А також сформувати community трейдерів для подальшого розвитку та торгівлі в команді.</p>
        </div>

        <div className='format-material'>
          <div>
        <img src={photo3} />
        <img className='format-forms' src={form3}/>
        </div>
        <p>Теоретичний матеріал зібраний в зручних методичках та відео, що дає вам можливість правильно та швидко засвоїти інформацію.</p>
</div>
        <div className='format-platform'>
        <div>
        <img src={photo4} />
        <img className='format-forms' src={form4}/>
        </div>
        <p>Навчання  на зручній платформі Zenedu та Online конференції в Zoom.</p>
        </div>

    </div>
    </div>
  )
}

export default Format