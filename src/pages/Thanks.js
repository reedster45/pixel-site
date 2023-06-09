import React from 'react';
import './App.css';

const Thanks = () => {

  return (
    <div className="container">
      <div className="thanks">
        <img src={require("./imgs/files/check.png")} alt="CheckMark"/>
        <p id="name-main">Thank You!</p>
        <p className="heading">Your message was successfully sent.</p>
        <p>I will contact you as soon as possible.</p>
      </div>
    </div>
    
  );
};

export default Thanks;