import Intro from "./Screens/Introduction/Intro";
import About from "./Screens/About Me/About";
import Work from "./Screens/Works/Work";
import Contact from "./Screens/Contacts/Contact";

import React from 'react'

const FinalScreen = () => {
  return (
    <div>
          <Intro />
          <About />
          <Work />
          <Contact />
    </div>
  )
}

export default FinalScreen
