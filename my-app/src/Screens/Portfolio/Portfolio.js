import React from 'react'
import "./Portfolio.css"
import project1 from "../../assets/easy shop.png"
import project2 from "../../assets/Project2.png"

const Work = () => {
    return (
        <section id='works'>
            <h2 className="workstitle">
                My Portfolio
            </h2>
            <span className="workDesc">I take pride in paying attention to smallest details and enquiries. These are some Projects that i have done. The Projects include small scale projects to large scale proejcts. </span>
            <div className="worksImgs">
                <img src={project1} alt="image1" className="worksImg" />
                <img src={project2} alt="image2" className="worksImg" />
                <img src="" alt="image3" className="worksImg" />
            </div>
            <button className="worksBtn">See More</button>
        </section>
    
  )
}

export default Work
