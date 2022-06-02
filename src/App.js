
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import Alert from './components/Alert';


function App() {
  const [mode, setmode] = useState('light');
  const [redMode, setredMode] = useState('light');
  const [alert, setalert] = useState(null);
  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type

    });
    setTimeout(()=>{
      setalert(null);
    },1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been enabled","success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success");
    }
  }

  const toggleRed=()=>{
    if(redMode==='light'){
      setredMode('red');
      document.body.style.backgroundColor='#d7a5a5';
      showAlert("Red Mode has been enabled","success");
      
    }
    else{
      setredMode('light');
      document.body.style.backgroundColor='white';

    }
    console.log("red");

  }

  return (
    <>
      
      <Navbar title="Divya" aboutText="About Text" mode={mode} toggleMode={toggleMode} toggleRed={toggleRed}/>
      <Alert alert={alert}/>
      {/* <Navbar/> */}
      <TextForm showAlert={showAlert} heading="Enter Text below" mode={mode} red={redMode} />
      {/* <About/> */}
    </>
    
  );
}

export default App;
