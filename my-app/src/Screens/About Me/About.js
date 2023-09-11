import React from 'react'
import "./About.css"
// import UIDesigns from "../../assets/design-png"
// import UIDesigns from "../../assets/design-png"
// import UIDesigns from "../../assets/design-png"

const About = () => {
    return (
        <section className="skills">
            <span className="skillTitle">What I Offer</span>
            <span className="skilldescription">I have a total of three years of experience in this field. I can offer simple as well as advanced Website designs and can also create a website. I mostly handle the frontend part of the website. I can also contribute to a team if i am working with one. </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src="" alt="image" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Figma Design</h2>
                        <p>I can make some basic to advanced figma web design as well as app design</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src="" alt="image" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Website Design</h2>
                        <p>I can create fully functional frontend part of the website</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src="" alt="image" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Website Functionality Overlook</h2>
                        <p>I can check and test the functionality which a website might be missing</p>
                    </div>
                </div>
            </div>
      </section>
      
  )
}

export default About
