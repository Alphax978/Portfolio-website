import About from "./Screens/About Me/About";
import Intro from "./Screens/Introduction/Intro";
import Navbar from "./Screens/Navbar/Navbar";
import Work from "./Screens/Portfolio/Portfolio";
import Contact from "./Screens/Contacts/Contact";
import Footer from "./Screens/Footer/Footer";


function App() {
  return (
      <div className="App">
        <Navbar />
        <Intro />
        <About />
        <Work />
        <Contact />
        <Footer />
      </div>
  );
}

export default App;
