import React from 'react'
import "./header.css"
import CTA from './CTA'
const Header = () => {
  return (
    <Header>
      <div className='container'>
        <h5>Hello I'am</h5>
         <h1>Hiren Khut</h1>
        <h5 className='text-light'>Web Developer</h5>

        <CTA />
      </div>
    </Header>
  )

}

export default Header