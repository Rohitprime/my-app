import React,{useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
// import Home from './component/Home';
// import Switchs from './component/Switchs';




function App() {
  const[myStyle,setMystyle]= useState({color:"black",backgroundColor:"white"});
  const[btnText,setBtnText] = useState('dark');
  const[alert,setAlert] = useState(null);

  

  const makeAlert = (msg,type) =>
  {
    setAlert({
      msg,
      type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);
  }

  

  const toggle =()=>
    {
        if(myStyle.color === "black")
        {
            setMystyle({color:"white",backgroundColor:"#1A4341"})
            setBtnText("disable dark mode");
            makeAlert('success: changed to dark mode','success');
        }
        else
        {
            setMystyle({color:"black",backgroundColor:"white"})
            setBtnText('enable dark mode')
            makeAlert('success: changed to light mode','success');

        }
    }

  return (
    
    <>
    {/* <Router> */}
  <Navbar title="textUtils"/>
   <Alert alert={alert}/>
  <div style={myStyle}>
  <h1 className="bg-info text-center">welcome</h1>
  <div className="mt-2 d-flex justify-content-center">
  <div className="App" style={{height:"0vh"}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  </div>
  {/* <Routes>
    <Route path='/text' element={<TextForm makeAlert={makeAlert}/>} />
    <Route path='/' element={<Home/>} />
  </Routes> */}
  <TextForm makeAlert={makeAlert}/>
  <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" id="switch" onClick={toggle} />
  <label className="form-check-label" htmlFor="switch">{btnText}</label>
  </div>
  {/* <Switchs myStyle={myStyle} setMystyle={setMystyle}/> */}
  
  </div>
  {/* </Router> */}
</>
  );
}

export default App;
