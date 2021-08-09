import React from 'react';
import './css/style.scss';
import "./images/veryGud.jpeg";
import pfp from "./images/veryGud.jpeg"
export default function App() {
  return (
    <div className="page">

<div className="login">
  <div className="login-form">
    <div className="logo">
      <img className="pfp" src={pfp} />
    </div>
      <input placeholder="Username" type="text" className="username"/>
    <br/>
      <input placeholder="Password" className="password" name="password" type="password"/>



    <br/>

      <button className="button">Log In</button>


  </div>
</div>

    </div>
  );
}
