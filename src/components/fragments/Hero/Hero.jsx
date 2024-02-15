import React from "react";
import "./Hero.scss";

import copy from "../../../assets/icons/copy.svg";

import profile from "../../../assets/images/profile.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="sign-available">
        <p className="sign-text">Available For Job</p>
      </div>
      <h3 className="jobdesk">Frontend Developer</h3>
      <img src={profile} alt="" className="profile-image" />
      <h1 className="name">I'm Kopal Muhamad</h1>
      <h3 className="description">I design and write code your websites</h3>
      <div className="box-btn">
        <a href="#" className="btn">
          <span>Hire me</span>
          <span>+</span>
        </a>
        <a href="#" className="btn">
          <span>Copy Email</span>
          <span>
            <img src={copy} alt="" />
          </span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
