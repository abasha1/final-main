import React from 'react';
import '../App.css';
import i1 from './Img/i1.jpg';

const Footer = () => {
    return <div style={{textAlign:"left", backgroundColor:"black", padding:"10px", bottom:"0", width:"100%", marginTop: "px"}}>
      <img src={i1} alt="me" style={{textAlign:"center", float:"left", border:"solid 4px white", borderRadius:"50%", }}/>
      <h2 style={{color:"white", fontSize:"23px", textAlign: "left"}}>I am Nikusha Abashidze, junior front-end developer from Georgia. </h2>
      <h2 style={{color:"white", fontSize:"23px", textAlign: "left"}}>Skills: Python,C++,Panda,Html, Css, .</h2>
      <h2 style={{color:"white", fontSize:"23px", textAlign: "left"}}>Studying React and will study backend in near future to make full site. </h2>
      <h3 style={{color:"white", fontSize:"18px", textAlign: "center"}}>Copyright © N.Abashidze. All rights reserved | Terms of Use | Privacy Policy</h3>
    </div>
  }
  
  
export default Footer;