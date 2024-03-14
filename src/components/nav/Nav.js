import React from 'react'
import './nav.css'

import { FiHome } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { MdLaptopChromebook } from "react-icons/md";
import { RiServiceLine } from "react-icons/ri";
import { RiCustomerService2Line } from "react-icons/ri";

import { useState } from 'react';

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
        <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ?  'active': ''}><FiHome /></a>
        <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaRegUserCircle /></a>
        <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdLaptopChromebook /></a>
        <a href='#service'><RiServiceLine /></a>
        <a href='#contact'><RiCustomerService2Line /></a>
    </nav>
  )
}

export default Nav