import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
import './App.css';
import { useState } from 'react';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
 function App() {
  const [mode, setMode] = useState('light');// whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }

  const removeBodyClasses= () =>{
         document.body.classList.remove('bg-primary');
         document.body.classList.remove('bg-info');
         document.body.classList.remove('bg-danger');
         document.body.classList.remove('bg-warning');
         document.body.classList.remove('bg-success');
  }
  
  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#092041';
      showAlert("dark mode has been enabled",'success');
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled",'success');
    }
  }
  return (
   <>
     {/* <Navbar title="BlogWeb" homeName="Home" contact="contactName" category="Event" about="aboutUs"/> */}
     {/* <Navbar></Navbar> */}
     {/* <Router> */}
    <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode}></Navbar>
    <Alert alert = {alert}/>

     <div className="container my-3">  
            {/* <About mode = {mode} /> */}
          <TextForm heading="Enter the text to analyze bellow" showAlert = {showAlert} mode = {mode}></TextForm>
         
     </div>
   </>
  )
}

export default App;
