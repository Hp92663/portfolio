import React from 'react'
import CV from '../../assets/CV.pdf'
import './header.css'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download>Resume</a>
        <a href='#contact'>Contact Me</a>
    </div>
  )
}

export default CTA