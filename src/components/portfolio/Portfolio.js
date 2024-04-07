import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Portfolio.png";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    Image: IMG1,
    title: "Personal Portfolio",
    technology: "React, Tailwind CSS",
    github: "https://github.com",
    demo: "https://dribble.com/shots/16673715-Crypto-currency-dashboard-and-financial-data-visualization",
  },

  {
    id: 2,
    Image: IMG2,
    title: "charts templets & infographics in figma",
    technology: "React, Tailwind CSS",
    github: "https://github.com",
    demo: "https://dribble.com/shots/1680766-orion-UI-kit-charts-templets-infographics-in-figma",
  },

  {
    id: 3,
    Image: IMG3,
    title: "Figma dashboard ui kit for data design web apps",
    technology: "React, Tailwind CSS",
    github: "https://github.com",
    demo: "https://dribble.com/shots/16673715-Crypto-currency-dashboard-and-financial-data-visualization",
  },

  {
    id: 4,
    Image: IMG4,
    title: "Maintaining tasks and tracking progress",
    technology: "React, Tailwind CSS",
    github: "https://github.com",
    demo: "https://youtube.com",
  },

  {
    id: 5,
    Image: IMG5,
    title: "charts templets & infographics in figma",
    technology: "React, Tailwind CSS",
    github: "https://github.com",
    demo: "https://dribble.com/shots/16673715-Crypto-currency-dashboard-and-financial-data-visualization",
  },

  {
    id: 6,
    Image: IMG6,
    title: "charts templets & infographics in figma",
    technology: "React, Tailwind CSS",
    github: "https://github.com",
    demo: "https://dribble.com/shots/15887665-orion-UI-Kit-charts-templets-infographics-in-figma",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent work</h5>
      <h2>portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, img, title, technology, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={IMG1} alt={title} />
              </div>
              <h3 className="title_fix">{title}</h3>
              <h5>{technology}</h5>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="_blank">
                  github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  live demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
