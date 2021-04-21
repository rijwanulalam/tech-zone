import React from "react";
import aboutUs from ".././../../assets/about-us.svg";
import "./AboutUS.css";

const AboutUS = () => {
  return (
    <div className="container pt-5 mb-5">
      <div class="row">
        <div class="col-sm">
            <img className="img-fluid" src={aboutUs} alt=""/>
        </div>
        <div class="col-sm fix-text">
            <p className="display-6 m-0">Welcome!</p>
            <h1 className="display-4 font-weight-bold">About US</h1>
            <p className="pt-4 pb-2">The highly-trained technicians have many years of experience with all laptop, notebook, mac-book and desktop computer repairs. We pride our company on honesty and the good relationships forged through customer satisfaction. We service all makes and models of MAC laptops, I-mac, PC laptops, notebooks and most desktops: Dell, Sony, IBM, HP, Acer, Apple, etc.</p>
            <button type="button" class="btn btn-primary">About Page</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
