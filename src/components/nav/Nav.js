import React from 'react'
import './nav.css'

import { FiHome } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { MdLaptopChromebook } from "react-icons/md";
import { RiServiceLine } from "react-icons/ri";
import { RiCustomerService2Line } from "react-icons/ri";


const Nav = () => {
  return (
    <nav>
        <a href='#'><FiHome /></a>
        <a href='#about'><FaRegUserCircle /></a>
        <a href='#experience'><MdLaptopChromebook /></a>
        <a href='#service'><RiServiceLine /></a>
        <a href='#contact'><RiCustomerService2Line /></a>
    </nav>
  )
}

export default Nav