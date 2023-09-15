import React, { useState } from 'react'
import "./Navbar.css"
// import logo from "../../assets/log"
import Contactimg from "../../assets/contact.png"
import { Link } from 'react-scroll'
import menu from "../../assets/menu.png"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className='navbar'>
      <Link activeClass='activelogo' to='intro' spy={true} smooth={true} offset={-50} duration={500}>
        <img className="logo" src="" alt="logo here" />
      </Link>

      <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500}  className='desktopMenuListItem'>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}  className='desktopMenuListItem'>About Me</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500}  className='desktopMenuListItem'>Portfolio</Link>
        <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-50} duration={500}  className='desktopMenuListItem'>Skills</Link>
           
      </div>
      <button className='desktopMenuBtn' onClick={() => {
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
      }} >
        <img src={Contactimg} alt="" className="desktopMenuImg" /> Contact Me
      </button>

      <img className="mobMenu" src={menu} alt="logo here" onClick={() => setShowMenu(!showMenu)}/>
      <div className="navMenu" style={{display: showMenu ? 'flex' : 'none'}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500}  className='ListItem'  onClick={() => setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}  className='ListItem' onClick={() => setShowMenu(false)}>About Me</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500}  className='ListItem' onClick={() => setShowMenu(false)}>Portfolio</Link>
        <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-50} duration={500}  className='ListItem' onClick={() => setShowMenu(false)}>Skills</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500}  className='ListItem' onClick={() => setShowMenu(false)}>Contact</Link>
           
      </div>
    </nav>      
  )
}

export default Navbar
