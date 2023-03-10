import React from "react";
import progimg from "../images/projimg.jpg";
import "../Components/projectcss.css";

const ProjectPage = () => {
  return (
    <div>
      <div className="projimg">
        <img
          className="projimg"
          src={progimg}
          style={{ width: "110%", height: "110%" }}
        />
      </div>
      <div className="projbox">
        <div className="p1">
          <div className="content">
            <h2>PORTFOLIO WEB HOSTING ON AMPLIFY</h2>

             <p>
             Hosted Portfolio Application to showcase my complete profile and hosted on AWS Amplify.
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="p2">
          <div className="content">
            <h2>EC2 INSTANCES MONITORING WITH PROMETHEUS AND GRAFANA</h2>
             
            <p>
            Prometheus store the time series data like metrics via Node Exporter from Target(EC2) and Grafana
allows to visualize the data stored in Prometheus.
            </p>
          </div>
        </div>
                         
      </div>
    </div>
  );
};

export default ProjectPage;
