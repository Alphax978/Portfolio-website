import React from 'react'
import "./Portfolio.css"
import project1 from "../../assets/easy shop.png"
import project2 from "../../assets/Project2.png"
import project3 from "../../assets/project3.png"
import project4 from "../../assets/project4.png"
import { ToastContainer, toast } from 'react-toastify'



const Work = () => {
    return (
        <section id='works'>
            <ToastContainer/>
            <h2 className="workstitle">
                My Portfolio
            </h2>
            <span className="workDesc">I take pride in paying attention to smallest details and enquiries. These are some Projects that i have done. The Projects include small scale projects to large scale proejcts. </span>
            <div className="worksImgs">
                {/* <div className='p1'></div> */}
                {/* <div className="p2"></div>
                <div className="p3"></div>
                <div className="p4"></div> */}
                <img src={project1} alt="image2" className="worksImg" />
                <figcaption>Ecommerce website <span><a href="https://github.com/Alphax978/E_commerce-Frontend">(View Project)</a></span></figcaption>
                <img src={project2} alt="image1" className="worksImg" />
                <figcaption>Weather App <span><a href="https://github.com/Alphax978/Weather-app">(View Project)</a></span></figcaption>
                <img src={project3} alt="image2" className="worksImg" />
                <figcaption>Netflix clone course <span><a href="https://github.com/Alphax978/frontendnetflixclone-React-">(View Project)</a></span></figcaption>
                <img src={project4} alt="image2" className="worksImg" />
                <figcaption>To do App <span><a href="https://github.com/Alphax978/Alphax978.github.io">(View Project)</a></span></figcaption>
                {/* <img src="" alt="image3" className="worksImg" /> */}
            </div>
            <button className="worksBtn" onClick={() => 
                toast.info("More Projects yet to be added", {
                    theme: 'dark',
                    closeOnClick: false,
                    pauseOnHover:false,
                    autoClose: 4000,
                    position:'top-center'
                })
            }>See More</button>
        </section>
    
  )
}

export default Work
