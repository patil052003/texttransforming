
// import React from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, {useState} from 'react' 

function App() {
 const [mode,setMode]=useState('light')
 const [alert,setAlert]=useState(null)
 const showalert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
   setAlert(null) 
  },1500);
 }
let  toggle=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor ='gray'
      showalert("dark mode is enable","success")
    }
    else{
      setMode('light')
       document.body.style.backgroundColor ='white'
      showalert("light mode is enable","success")
    }
 }

return (

<>
<Navbar title="textutils" mode={mode} toggle={toggle}/>
<Alert alert={alert}/>
{/* <About/> */}
<div className='container my-3'>
      <Textform showalert={showalert} heading="enter the text" mode={mode}/>
</div>

</>
);
}
export default App;


