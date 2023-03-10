import React from "react";
import "../Components/aboutpagecss.css";
import mypic from "../images/me.png";
import {
  FaGlobe,
  FaMailBulk,
  FaPhone,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Aboutpage = () => {
  return (
     
     
    <div className="container">
      <div className="left_side">
        <div className="profileText">
          <div class="imgBox">
            <img src={mypic} />
          </div>
          <h2>
            Ashwin A
            <span>
              
              <br />
              Cloud Engineer
            </span>
          </h2>
        </div>
        <div className="contactInfo">
          <h3 className="title">Contact Info</h3>
          <ul>
            <li>
               
              <span className="text">+91-8883000056</span>
            </li>

            <li>
               
              <span className="text">ashwinanbalagan07@gmail.com</span>
            </li>

            <li>
               
              <span className="text">
                https://www.linkedin.com/in/ashwin-a-b720bb1b4/
              </span>
            </li>

            <li>
               
              <span className="text">https://github.com/AshwinAk0301</span>
            </li>

            <li>
               
              <span className="text">Chennai, Tamil Nadu</span>
            </li>
          </ul>
        </div>

        <div className="Education">
          <h3 className="title">Education</h3>
          <ul>
            <li>
              <b>10th STD </b>
            </li>
            <h4>
              East Coast Christian Matriculation Hr Sec School
              <br />
              2014 with 87%
            </h4>

            <li>
              <b>12th STD </b>
            </li>
            <h4>
              Sunbeam Matriculation Hr Sec School
              <br />
              2016 with 71%
            </h4>

            <li>
              <b> UG - B.Sc., Mathematics</b>
            </li>
            <h4>
              Patrician College of Arts and Sciences
              <br />
              2016 - 2019 with 5.875 cgpa
            </h4>

            <li>
              <b> PG - Master of Computer Applications</b>
            </li>
            <h4>
              PSG College of Arts and Sciences
              <br />
              2020 - 2022 with 84%
            </h4>
          </ul>
        </div>
        <br />
        <div className="skill">
          <h3 className="title">SKILLS</h3>
          <ul>
            <li> Amazon Web Services </li>
            <li> Devops </li>
            <li> CI/CD </li>
            <li> Python Programming</li>
            <li> Cloud Monitoring </li>
            <li> Version Control </li>
          </ul>
        </div>
      </div>
      <div className="right_side">
        <div className="knowledge">
          <h2> PROFESSIONAL KNOWLEDGE</h2>
          <ul>
            <li> Knowledge on VPC Networking, Redshift, AWS Lambda, CD, CP, Cloud <pre/>Formation, Cloud Watch.</li>
            <li> Version Control Experience using Git and Git Hub.</li>
            <li> Proficient in developing CI/CD pipelines and hands-on knowledge Infrastructure as a Code (Terraform).</li>
            <li> Good understanding of tool like Jenkins Integration Tool and Docker Containerization.</li>
            <li> Good understanding of monitoring tools like Prometheus and Grafana.</li>
            <li>Good understanding of Kubernetes and Nagios.</li>
            <li>Python Programming knowledge</li>
          </ul>
        </div>
        <div className="project">
          <h2>PROJECTS</h2>
          <div className="p1">
            <div className="contents">
              <h3>PORTFOLIO WEB HOSTING ON AMPLIFY</h3>
               
              <p>
              Hosted Portfolio Application to showcase my complete profile and hosted on AWS Amplify.
              </p>
            </div>
          </div>
          <br />

          <div className="p2">
            <div className="contents">
              <h3>EC2 INSTANCES MONITORING WITH PROMETHEUS AND GRAFANA</h3>
               
              <p>
              Prometheus store the time series data like metrics via Node Exporter from Target(EC2) and Grafana allows to visualize the data stored in Prometheus.
              </p>
            </div>
          </div>
          <br />

          <div className="p3">
            <div className="content">
              <h3>Facebook login - Handson</h3>
              <h4>Languages and Tools Used :</h4>
              <ul>
                <li>REACT JS </li>
                <li>HOOKS Components</li>
              </ul>
              <p>
                I did this Facebook Login Handson project as a part of my
                advanced ReactJS course. Here i have created Signup page where
                all the data are stored in local storage of the brower.
              </p>
            </div>
          </div>
          <br /> 

           
          <br />

           
        </div>
      </div>
    </div>
    
  );
};

export default Aboutpage;
