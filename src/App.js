
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'


function App() {
  const [mode, setmode] = useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#042743';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
      
      <Navbar title="Divya" aboutText="About Text" mode={mode} toggleMode={toggleMode}/>
      
      {/* <Navbar/> */}
      <TextForm heading="Enter Text below" mode={mode}/>
      {/* <About/> */}
    </>
    
  );
}

export default App;
