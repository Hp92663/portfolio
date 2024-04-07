import React from "react";
import "./services.css";
import { FaCheck } from "react-icons/fa6";

const Services = () => {
  return (
    <section id="service">
      <h5>What i offer</h5>
      <h2>Services</h2>
      <div className="services_container">
        <article className="service">
          <div className="service__head">
            <h3>UI/Ux Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <FaCheck className="service_list_icon" />
              <p>loream ipsum dolor sit ame consectutor</p>
            </li>
            <li>
              <FaCheck className="service_list_icon" />
              <p>loream ipsum dolor sit ame consectutor</p>
            </li>
            <li>
              <FaCheck className="service_list_icon" />
              <p>loream ipsum dolor sit ame consectutor</p>
            </li>
            <li>
              <FaCheck className="service_list_icon" />
              <p>loream ipsum dolor sit ame consectutor</p>
            </li>
            <li>
              <FaCheck className="service_list_icon" />
              <p>loream ipsum dolor sit ame consectutor</p>
            </li>
            <li>
              <FaCheck className="service_list_icon" />
              <p>loream ipsum dolor sit ame consectutor</p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX Design */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <FaCheck className="service_list_icon" />
              <p>loream ipsum dolor sit ame consectutor</p>
            </li>
            <li>
              <FaCheck className="service_list_icon" />
              <p>loream ipsum dolor sit ame consectutor</p>
            </li>
            <li>
              <FaCheck className="service_list_icon" />
              <p>loream ipsum dolor sit ame consectutor</p>
            </li>
            <li>
              <FaCheck className="service_list_icon" />
              <p>loream ipsum dolor sit ame consectutor</p>
            </li>
            <li>
              <FaCheck className="service_list_icon" />
              <p>loream ipsum dolor sit ame consectutor</p>
            </li>
            <li>
              <FaCheck className="service_list_icon" />
              <p>loream ipsum dolor sit ame consectutor</p>
            </li>
          </ul>
        </article>
        {/* End of Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <FaCheck className="service_list_icon" />
              <p>loream ipsum dolor sit ame consectutor</p>
            </li>
            <li>
              <FaCheck className="service_list_icon" />
              <p>loream ipsum dolor sit ame consectutor</p>
            </li>
            <li>
              <FaCheck className="service_list_icon" />
              <p>loream ipsum dolor sit ame consectutor</p>
            </li>
            <li>
              <FaCheck className="service_list_icon" />
              <p>loream ipsum dolor sit ame consectutor</p>
            </li>
            <li>
              <FaCheck className="service_list_icon" />
              <p>loream ipsum dolor sit ame consectutor</p>
            </li>
            <li>
              <FaCheck className="service_list_icon" />
              <p>loream ipsum dolor sit ame consectutor</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
