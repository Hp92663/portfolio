import React from 'react'

import {BsLinkedin, BsInstagram,BsGithub} from 'react-icons/bs'

const Header_social = () => {
  return (
    <div className='header_social'>
        <a href='https://linkedin.com/' target='_blank'><BsLinkedin /></a>
        <a href='https://github.com/' target='_blank'><BsInstagram /></a>
        <a href='https://instagram.com/' target='_blank'><BsGithub /></a>
  {/* 
          <a href='https://www.linkedin.com/in/hiren-khut/' target='_blank'><BsLinkedin /></a>
          <a href='https://www.instagram.com/hiren_khut_92663/' target='_blank'><BsInstagram /></a>
          <a href='https://github.com/Hp92663/' target='_blank'><BsGithub /></a> */}
    </div>
  )
}

export default Header_social