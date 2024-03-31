import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

import ME from "../../assets/avatar2.jpg";
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className="about_card">
              <FiUser className="about_icon" />
              <h5>Clients</h5>
              <small>5+ Across India</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
            lorem34zextcyvubijnoxtcyvubhijnoxtcyv
            <br />
            ujnoxtcyvubinotrctyvubinoxtcyvubijnopkxrcyvuhi
            lorem34zextcyvubijnoxtcyvubhijnoxtcyv
            <br />
            ujnoxtcyvubinotrctyvubinoxtcyvubijnopkxrcyvuhi
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
