import About from "./Screens/About Me/About";
import Intro from "./Screens/Introduction/Intro";
import Navbar from "./Screens/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About></About>
      
    </div>
  );
}

export default App;
