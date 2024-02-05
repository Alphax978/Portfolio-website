import About from "./Screens/About Me/About";
import Intro from "./Screens/Introduction/Intro";
import Navbar from "./Screens/Navbar/Navbar";
import Work from "./Screens/Portfolio/Portfolio";
import Contact from "./Screens/Contacts/Contact";
import Footer from "./Screens/Footer/Footer";
import Chatbot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components';
import botavatarjr from "./assets/logos.png"
import "./App.css"
import {  useState } from "react";


const steps = [
  {
      id: '1',
      message: 'Hello, How can i help you on this fine day ?',
      trigger:'2'
  },
  {
    id: '2',
    options: [
      { value: 1, label: 'Contact me', trigger:'3'},
      { value: 2, label: 'I want to See your Projects',trigger:'4' },
      { value: 3, label: 'What Frameworks do you know?',trigger:'5' },
      { value: 4, label: 'What is level of understanding on the frameworks that you know ?',trigger:'6'},
      { value: 5, label: 'Which Unversity did you graduate from ?',trigger:'7'},
      { value: 6, label: 'Are you available to hire right now ?',trigger:'8'},
      { value: 7, label: 'close chat',trigger:'9'},

    ],
  },
  {
    id:'3',
    message: 'Head over to contact me page. fill out the form and hit submit',
    trigger:'2'
  },
  {
    id: '4',
    message: 'Head over to portfolio page. Check out the projects. More projects are yet to be added',
    trigger:'2'
    
  },
  {
    id: '5',
    message: 'I know frameworks like ReactJs, Bootstrap, Tailwindcss. I am also aware of version control like Git. I know Node.js and Figma too.',
    trigger:'2'
    
  },
  {
    id: '6',
    message: "I am aware of how it works and what to do. I have made some projects with those frameworks.",
    trigger:'2'
    
  },
  {
    id: '7',
    message: 'I Graduated from University of wolverhampton. I studied Bsc(Honors) Computer Science',
    trigger:'2'
    
  },
  {
    id: '8',
    message: 'I am available.',
    trigger:'2'
    
  },
 
];

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#F9DF0D',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#F9DF0D',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#F9DF0D',
}

const config = {
  // botAvatar: botavatarjr,
  floating: true,

};


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
        <ThemeProvider theme={theme}>
          <Chatbot steps={steps} {...config} headerTitle="James Rawal" speechSynthesis={{ enable: true, lang: 'en' }} />
        </ThemeProvider>
        <Intro />
        <About theme={isDark} />
        <Work />
        <Contact theme={isDark} />
        <Footer theme={isDark} />
      </div>
  );
}

export default App;
