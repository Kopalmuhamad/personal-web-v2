import React from "react";
import "./Skill.scss";

const Skill = () => {
  return (
    <section className="skill">
      <div className="title">
        <h1 className="text-title">Skill</h1>
      </div>
      <ul className="skill-list">
        <li className="list-item">
          <h3>HTML</h3>
          <p>Date</p>
        </li>
        <li className="list-item">
          <h3>CSS</h3>
          <p>Date</p>
        </li>
        <li className="list-item">
          <h3>Javascript</h3>
          <p>Date</p>
        </li>
        <li className="list-item">
          <h3>ReactJS</h3>
          <p>Date</p>
        </li>
        <li className="list-item">
          <h3>Tailwind</h3>
          <p>Date</p>
        </li>
        <li className="list-item">
          <h3>NextJS</h3>
          <p>Date</p>
        </li>
      </ul>
    </section>
  );
};

export default Skill;
