import About from "./Screens/About Me/About";
import Intro from "./Screens/Introduction/Intro";
import Navbar from "./Screens/Navbar/Navbar";
import Work from "./Screens/Works/Work";
import Contact from "./Screens/Contacts/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About></About>
      <Work />
      <Contact />
      
    </div>
  );
}

export default App;
