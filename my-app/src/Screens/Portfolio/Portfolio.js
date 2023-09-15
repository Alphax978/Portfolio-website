import React from 'react'
import "./Portfolio.css"
// import p1,P2,p3 from "../../assets"

const Work = () => {
    return (
        <section id='works'>
            <h2 className="workstitle">
                My Portfolio
            </h2>
            <span className="workDesc">I take pride in paying attention to smallest details and enquiries. These are some Projects that i have done. The Projects include small scale projects to large scale proejcts. </span>
            <div className="worksImgs">
                <img src="" alt="image1" className="worksImg" />
                <img src="" alt="image2" className="worksImg" />
                <img src="" alt="image3" className="worksImg" />
            </div>
            <button className="worksBtn">See More</button>
        </section>
    
  )
}

export default Work
