import React from 'react';
import { FaHome,FaPhone, FaMailBulk, FaLinkedin, FaGithub } from 'react-icons/fa';
import "../Components/footercss.css";
import { Link } from 'react-router-dom';
 
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/> 
                    <div>
                       <p> Teachers Colony </p>
                       <p> ECR , Chennai </p>
                    </div>
                    </div>

                    <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/> +91-8883000056 </h4>
                    </div>

                    <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/> ashwinanbalagan07@gmail.com </h4>
                    </div>
                    </div>
                    
                
                <div className="right">
                    <h4> Reach Me..!!</h4>
                    <div className="social">
                    <h4><FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}}/> 
                    <Link target={"_blank"} to={"https://www.linkedin.com/in/ashwin-a-b720bb1b4/"}> https://www.linkedin.com/in/ashwin-a-b720bb1b4/</Link></h4>

                    <h4><FaGithub size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                    <Link target={"_blank"} to={"https://github.com/AshwinAk0301"}>https://github.com/AshwinAk0301</Link></h4>
                    </div>
                </div> 
            </div>
         </div>
        
  )
}

export default Footer;