import React, {useRef} from 'react'
import "./Contact.css"
import reactstack from "../../assets/react.png"
// import sql from "../../assets/mysql.png"
import nodes from "../../assets/nodes.png"
import Githubs from "../../assets/Githubs.png"
import figs1 from "../../assets/figs1.png" 
import facebook from "../../assets/facebook-icon.png" 
import instagram from "../../assets/instagram.png" 
import git3 from "../../assets/git3.png"  
import linked2 from "../../assets/linked2.webp"  
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = ({theme}) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

   
    
      emailjs.sendForm('service_pb6savr', 'template_08o3gfq', form.current, 'JzrylWBsKdBIcQCGL')
        .then((result) => {
          console.log(result.text);
          e.target.reset()
          toast.success("Message has been sent", {
            theme: "dark",
            autoClose: 4000,
            pauseOnHover:false,
            closeOnClick: false,
            position: 'top-center',
          })
        }, (error) => {
          console.log(error.text);
          toast.error("Message could not be sent", {
            theme: "dark",
            autoClose: 4000,
            pauseOnHover: false,
            closeOnClick: false,
            position:'top-center'
          })
        });
    

  };
  return (
    <section id="contactPage">
      <ToastContainer/>
          <div className="skills">
              <h1 className="skillPageTitle">
                  My Skills
              </h1>
              <p className="skillDesc">
                  I have got basic to advanced knowledge of the technologies that i have mentioned below. Projects have been created by me through these technologies.
              </p>
              <div className="skillImgs">
                  <a href="https://react.dev/" className='skillImg'>
                    <img src={reactstack} alt="img1" className='skillImg' />    
            
                  </a>
                  <a href="https://docs.github.com/en" className='skillImg'>
                    <img src={Githubs} alt="img2" className="skillImg" />    
            
                  </a>
                  <a href="https://nodejs.org/docs/latest/api/" className='skillImg'>
                    <img src={nodes} alt="img3" className="skillImg" />    
            
                  </a>
                  <a href="https://help.figma.com/hc/en-us" className='skillImg'>
                    <img src={figs1} alt="img4" className="skillImg" />    
            
                  </a>
              </div>
          </div>
      <div id="contact">
        <h1 className="skillPageTitle">
          Contact Me
        </h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunity
        </span>
        <form className="contactForm" ref={form}  onSubmit={sendEmail} >
          <input type="text" className="name" style={{ backgroundColor: theme ? 'rgb(40,40,40)' : 'rgb(192,192,192)'}} required="true" placeholder='Your Name'name='from_name' />
          <input type="email" className="email" style={{ backgroundColor: theme ? 'rgb(40,40,40)' : 'rgb(192,192,192)'}} required="true" placeholder='Your Email' name='from_email' />
          <textarea name="message" required="true" id="" rows="5" className="msg" style={{ backgroundColor: theme ? 'rgb(40,40,40)' : 'rgb(192,192,192)'}} placeholder='Your Message' ></textarea>
          <button type='submit' className="submitBtn" value="Send">Submit</button> 
          <div className="links">
            <a href='https://www.facebook.com/james.rawal.31/'>
              <img src={facebook} alt="image" className="link" />
            </a>
            <a href="https://www.instagram.com/jjames_58/">
              <img src={instagram} alt="image" className="link" />
            </a>
            <a href="https://www.linkedin.com/in/james-rawal-3715a5232/">
              <img src={linked2} alt="image" className="link" />
            </a>
            <a href="https://github.com/Alphax978">
              <img src={git3} alt="image" className="linkgit" />
            </a>

          </div>
        </form>
          </div>
    </section>
  )
}

export default Contact
