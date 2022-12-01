import React, { useState } from 'react';
import {  Link } from 'react-router-dom';

import IMG from '../src/Images/search.png'
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const setDisplay = () => {
        setNav(false)
    }
  return (
      <>
    <div className="navbar">
        <div className="navbar__logo">
            <h2>KUIPID </h2>
        </div>
        <div className="navlist">
            <ul>
            <Link  style={{textDecoration: 'none'}} to="/">
                <li>Home</li>
            </Link>
            <Link  style={{textDecoration: 'none'}} to="/about">
                <li>About</li>
            </Link>
            <Link  style={{textDecoration: 'none'}} to="/posts">
                <li>Posts</li>
            </Link>
                
            </ul>
        </div>
        {/* <div className="search">
            <input placeholder='Search something...' type="search" name="" id="" />
            <img src={IMG} alt="" />
            
        </div> */}
        {/* <Link to="/Register">
        <button className='newbtn'>
            Register
        
            </button>
        </Link> */}
        <div className="harmburger" onClick={() => setNav(!nav)} >
            <div></div>
            <div></div>
            <div></div>
        </div>
        {nav && <div className='HamNav'>
    <div className="newnav">
            <ul>
            <Link  style={{textDecoration: 'none'}} to="/">
                <li onClick={setDisplay} >Home</li>
            </Link>
            <Link  style={{textDecoration: 'none'}} to="/about">
                <li onClick={setDisplay} >About</li>
            </Link>
            <Link  style={{textDecoration: 'none'}} to="/posts">
                <li onClick={setDisplay} >Posts</li>
            </Link>
                
                
            </ul>

        </div>
        {/* <button className='ndNav' >Register</button> */}
    </div>}
    </div> 
   
    </>
  )
}

export default Navbar