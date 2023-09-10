import React from 'react'
import "./Navbar.css"
// import logo from "../../assets/log"
// import Contactimg from "../../assets/contact.png"
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img className="logo" src="" alt="logo here" />
      <div className="desktopMenu">
        <Link className='desktopMenuListItem'>Home</Link>
        <Link className='desktopMenuListItem'>About</Link>
        <Link className='desktopMenuListItem'>Portfolio</Link>
        <Link className='desktopMenuListItem'>Clients</Link>
      </div>
      <button className='desktopMenuBtn'>
        <img src="" alt="" className="desktopMenuImg" /> Contact Me
      </button>
    </nav>      
  )
}

export default Navbar
