import React from 'react'

import "./header.css"

import CTA from './CTA'
import Header_social from './Header_social';

import ME from '../../assets/me.png';

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Hiren Khut</h1>
        <h5 className='text-light'>Web Developer</h5>
        <CTA />
       <Header_social />

       {/* Add Image */}
      <div className='me'>
        <img src={ME} alt='me'/>
      </div>

      {/* scroll */}

     <a href='#contact' className='scroll_down'>Scroll Down</a>

      </div>

    </header>
    )

}

export default Header