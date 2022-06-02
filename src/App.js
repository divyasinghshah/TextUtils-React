
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import Alert from './components/Alert';


function App() {
  const [mode, setmode] = useState('light');
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
  return (
    <>
      
      <Navbar title="Divya" aboutText="About Text" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      {/* <Navbar/> */}
      <TextForm showAlert={showAlert} heading="Enter Text below" mode={mode}/>
      {/* <About/> */}
    </>
    
  );
}

export default App;
