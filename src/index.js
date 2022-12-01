
import Navbar from './Navbar';
import Footer from './Footer';
import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Route,Routes
} from "react-router-dom";

import App from './App';
import Register from './Register';
import Login from './Login';
import About from './About';
import { AuthContextProvider } from './AuthContext';



ReactDOM.createRoot(document.getElementById("root")).render(
  <>
  <BrowserRouter> 
 <Navbar/> 
 {/* <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/About" element={<About />} />
    </Routes> */}
 

<AuthContextProvider>
  <App/>
</AuthContextProvider>
  <Footer/>
 
   </BrowserRouter> 
  </>
);

