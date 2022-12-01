import { useState, useContext } from 'react';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import './App.scss';
import Home from './Home';
 import Login from './Login';
import "./index.css";

import Register from './Register';
 import { AuthContext } from './AuthContext';
import Dashboard from './Dashboard';
import Posts from './Posts';
import About from './About';
import Switchboard from './Switchboard';
import Details from './Details';
;


const App = () => {


   
   const {currentUser } = useContext(AuthContext)
    
  return (
    <>
   
<Routes>
<Route path='/' element={<Home />} />
<Route path='/:id' element={<Details />} />
<Route path='/dashboard/:id' element={<Details />} />
<Route path='/posts/:id' element={<Details />} />
            
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/about' element={<About />} />
            <Route path='/switch' element={<Switchboard />} />
        
</Routes>

     <div className="App">  
      
      </div> 

    </>
  );
}

export default App;

