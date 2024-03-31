import React from "react";
import "./experience.css";

import { TiHtml5 } from "react-icons/ti";
import { IoLogoHtml5 } from "react-icons/io5";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skill I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <IoLogoHtml5 />
              <p>HTML</p>
            </article>

            <article className="experience_details">
              <TiHtml5 />
              <p>CSS</p>
            </article>

            <article className="experience_details">
              <TiHtml5 />
              <p>JavaScript</p>
            </article>

            <article className="experience_details">
              <TiHtml5 />
              <p>TypeScript</p>
            </article>

            <article className="experience_details">
              <TiHtml5 />
              <p>React</p>
            </article>

            <article className="experience_details">
              <TiHtml5 />
              <p>Angular</p>
            </article>
          </div>
        </div>

        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <IoLogoHtml5 />
              <p>HTML</p>
            </article>

            <article className="experience_details">
              <TiHtml5 />
              <p>CSS</p>
            </article>

            <article className="experience_details">
              <TiHtml5 />
              <p>JavaScript</p>
            </article>

            <article className="experience_details">
              <TiHtml5 />
              <p>TypeScript</p>
            </article>

            <article className="experience_details">
              <TiHtml5 />
              <p>React</p>
            </article>

            <article className="experience_details">
              <TiHtml5 />
              <p>Angular</p>
            </article>
          </div>
        </div>

        <div className="experience_frontend">
          <div className="experience_content">
            <article className="experience_details">
              <IoLogoHtml5 />
              <p>HTML</p>
            </article>

            <article className="experience_details">
              <TiHtml5 />
              <p>CSS</p>
            </article>

            <article className="experience_details">
              <TiHtml5 />
              <p>JavaScript</p>
            </article>

            <article className="experience_details">
              <TiHtml5 />
              <p>TypeScript</p>
            </article>

            <article className="experience_details">
              <TiHtml5 />
              <p>React</p>
            </article>

            <article className="experience_details">
              <TiHtml5 />
              <p>Angular</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
