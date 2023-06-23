import React from 'react'
import './smallcards.css'

function Smallcards({title,number}) {
  return (
    <div className='chotu'>
        <div className="chotarec">
            <span className='ti23'>{title}</span>
            <span className='tu54'>{number}</span>
        </div>

      
    </div>
  )
}

export default Smallcards
