import About from "./Screens/About Me/About";
import Intro from "./Screens/Introduction/Intro";
import Navbar from "./Screens/Navbar/Navbar";
import Work from "./Screens/Works/Work";
import Contact from "./Screens/Contacts/Contact";
import Footer from "./Screens/Footer/Footer";
import FinalScreen from "./FinalScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
              <Route path="/" element={<FinalScreen/>} />
              <Route path="/Intro" element={<Intro/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/work" element={<Work/>} />
              <Route path="/contact" element={<Contact/>} />
            </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
