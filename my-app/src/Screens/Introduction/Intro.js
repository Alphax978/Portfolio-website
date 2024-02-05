import React, { useState } from 'react'
import "./Intro.css"
import { Link } from 'react-scroll'
import { ThemeProvider } from 'styled-components';
import bg from "../../assets/image.png"
import btnImg from "../../assets/hireme.png"



const Intro = () => {

    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">
                    Hello,
                </span>
                <span className="introText">
                    I'm <span className="introName">James Rawal</span><br/>Website Developer
                </span>
                <p className="introPara">I am a skilled website developer <br />with adequate experience</p>
                <Link to='contact' spy={true} smooth={true} offset={-100} duration={500}>
                    <button className='btn'><img className="btnImg" src={btnImg} alt="" />Hire Me</button>
                </Link>
            </div>
            <img src="" alt="profile" className="bg" />


      </section>
    
  )
}

export default Intro
