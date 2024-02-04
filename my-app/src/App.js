import About from "./Screens/About Me/About";
import Intro from "./Screens/Introduction/Intro";
import Navbar from "./Screens/Navbar/Navbar";
import Work from "./Screens/Portfolio/Portfolio";
import Contact from "./Screens/Contacts/Contact";
import Footer from "./Screens/Footer/Footer";
import {  useState } from "react";




function App() {
  const [isDark, setIsDark] = useState(true)

  const changetheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div style={{
      backgroundColor: isDark ? 'rgb(30,30,30)' : 'rgb(224,224,224)',
    }}>
        <Navbar darkthemebutton={changetheme} />
        <Intro />
        <About theme={isDark} />
        <Work />
        <Contact theme={isDark} />
        <Footer theme={isDark} />
      </div>
  );
}

export default App;
