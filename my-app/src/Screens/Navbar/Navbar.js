import React from 'react'
import "./Navbar.css"
// import logo from "../../assets/log"
import Contactimg from "../../assets/contact.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img className="logo" src="" alt="logo here" />
      <div className="desktopMenu">
            <Link  to="/" className='desktopMenuListItem'>Home</Link>
            <Link to="/about" className='desktopMenuListItem'>About</Link>
            <Link to="/work" className='desktopMenuListItem'>Portfolio</Link>
            <Link to="/contact" className='desktopMenuListItem'>Clients</Link>
      </div>
      <button className='desktopMenuBtn'>
        <img src={Contactimg} alt="" className="desktopMenuImg" /> Contact Me
      </button>
    </nav>      
  )
}

export default Navbar
