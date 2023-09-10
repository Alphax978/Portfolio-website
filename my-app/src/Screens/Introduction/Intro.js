import React from 'react'
import "./Intro.css"
import { Link } from 'react-scroll'
// import bg from "../../assets/image.png"
// import btnImg from "../../assets/hireme.png"
const Intro = () => {
    return (
        <section className="intro">
            <div className="introContent">
                <span className="hello">
                    Hello,
                </span>
                <span className="introText">
                    I'm <span className="introName">James</span><br/>React Js Developer
                </span>
                <p className="introPara">I am a skilled React Js developer <br />with adequate experience</p>
                <Link><button className='btn'><img className="btnImg" src="" alt="" />Hire Me</button></Link>
            </div>
            <img src="" alt="profile" className="bg" />


      </section>
    
  )
}

export default Intro
