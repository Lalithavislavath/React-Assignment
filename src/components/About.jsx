import React from 'react';
import './index.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img src="./Assets/img1.png" alt="Lalitha Vislavath" className="profile-image" />
        <div className="about-text">
          <p>
            Hello! I'm Lalitha Vislavath, a front-end developer specializing in building modern and 
             responsive web applications. I focus on creating intuitive and visually appealing user 
             interfaces using technologies like HTML, CSS, and JavaScript. As a front-end developer, 
             I ensure that websites not only look great but also function seamlessly across devices, 
             delivering a smooth and engaging user experience.
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
