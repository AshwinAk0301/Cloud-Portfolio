import React from "react";
import wd from "../images/cloud.jpg";
import wdi from "../images/dev.jpg";
import "../Components/skillscss.css";

const SkillPage = () => {
  return (
    <div className="dev-skill">
      <div className="dev-back">
        <img className="devimg" src={wd} />
      </div>

      <div className="fed">
        <div>
          <img className="wdiimage" src={wdi} />
        </div>
        <div className="content">
          <h3> Cloud Engineering </h3>
          <p>
            <span> Cloud engineering </span> is the application of engineering
            disciplines to cloud computing. It brings a systematic approach to
            concerns of commercialization, standardization, and governance of
            cloud computing applications.
            <span> DevOps Engineering </span> is a methodology in the software
            development and IT industry. Used as a set of practices and tools,
            DevOps integrates and automates the work of software development and
            IT operations as a means for improving and shortening the systems
            development life cycle.
          </p>
          <br />
          <br />
          <ul>
           <span><li> Amazon Web Services</li></span>
            <b><li> @ AWS Extra-Enhancement</li></b>
            <li>AWS Lambda, AWS Cloud Watch, AWS Cloud Front, CD, CI.</li>
            
            <br/>
           <b><li> @ DevOps Tools</li></b>
            <li>Ansible, Jenkins, Docker, Kubernetes, Terraform, Prometheus</li>
            <li>Grafana, Nagios</li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
