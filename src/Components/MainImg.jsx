import "../Components/MainImgCss.css";

import React from 'react';
import {Link} from "react-router-dom";

import IntroImge from "../images/me_background.jpg";

const MainImg = () => {
  return (
    <div className="hero">

        <div className="mask">
<img className="into-img" src={IntroImge} alt="ak"/>
        </div>

        <div className="content">
            <p> Hi , I'M ASHWIN A </p>
            <h1> Cloud Engineer </h1>
            <h2> DevOps LEARNER </h2>
            <div className="btn">
                 
                 <Link to="/about" className="btn-resume">My Resume</Link>
             </div>
           
        </div>
        

    </div>
  )
}

export default MainImg;