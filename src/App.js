/* import logo from './logo.svg'; */
import './App.css';
/* import About from './components/About'; */
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'; 
import React, {useState} from 'react';


function App() {
  const [mode, setMode] = useState('light'); // checks for dark mode enabled or not
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#343a40'
    }
    else{
      setMode('light');
      document.body.stylebackgroundColor='white'
    }
  }
   return (
  <>
<Navbar title="My-App" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
<div className="container">
 <TextForm heading="Enter the text to analyze below"/> 
{/* <About/> */}
</div>

  </>
  );
}

export default App;
