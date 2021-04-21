import React, { useEffect, useState } from "react";
import ServiceDetail from "../ServiceDetail/ServiceDetail";
import "./Services.css";
import desktop from "../../../assets/desktop.gif";
import laptop from "../../../assets/laptop.gif";
import mobile from "../../../assets/mobile.png";
import tablet from "../../../assets/tablet.png";
import hardware from "../../../assets/hardware.png";
import apps from "../../../assets/apps.png";
import { useHistory } from "react-router";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://tech-zone-server.herokuapp.com/getServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="bg-container ">
      <h1 className="font-weight-bold text-center display-4 mt-5 text-white shadow-lg rounded">
        SERVICES
      </h1>
      <div className="container">
        <div className="row justify-content-center">
          {services.map((service) => (
            <ServiceDetail service={service}></ServiceDetail>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
