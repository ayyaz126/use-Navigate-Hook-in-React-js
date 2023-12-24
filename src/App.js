import React from 'react'
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navebar from './compoents/Navebar';
import Home from './compoents/Home';
import About from './compoents/About';
import Contact from './compoents/About';




function App() {
  return (
    <div>
         <Router>
          <Navebar/>
          <Routes>
             <Route path='/' element={<Home/>} />
             <Route path='/abt' element={<About/>} />
             <Route path='/con'  element={<Contact/> }/>               
          </Routes>         
          </Router>   
    </div>
  )
}

export default App