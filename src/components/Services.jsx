import React from "react";
import { FaCode, FaPalette, FaBullhorn, FaLaptopCode, FaLightbulb, FaChartLine } from "react-icons/fa";
import "./services.css";

const Services = () => {
  return (
    <section id="services" className="services">
      <h2 className="section-title">Services</h2>
      <div className="services-container">
        {/* UI/UX Design */}
        <div className="service-card">
          <div className="service-icon">
            <FaPalette />
          </div>
          <h3 className="service-title">UI/UX Design</h3>
          <p className="service-description">
            Create intuitive and visually appealing user interfaces using Figma.
            Apply principles of responsive design and cross-browser compatibility.
          </p>
        </div>

        {/* Web Development */}
        <div className="service-card">
          <div className="service-icon">
            <FaCode />
          </div>
          <h3 className="service-title">Web Development</h3>
          <p className="service-description">
            Build functional and dynamic websites using HTML, CSS, JavaScript, and React.js.
            Optimize web performance and ensure seamless user experiences.
          </p>
        </div>

        {/* Digital Marketing */}
        <div className="service-card">
          <div className="service-icon">
            <FaBullhorn />
          </div>
          <h3 className="service-title">Digital Marketing</h3>
          <p className="service-description">
            Enhance online presence through SEO strategies and performance optimization.
            Implement digital marketing techniques to drive engagement and growth.
          </p>
        </div>

        {/* Frontend Development */}
        <div className="service-card">
          <div className="service-icon">
            <FaLaptopCode />
          </div>
          <h3 className="service-title">Frontend Development</h3>
          <p className="service-description">
            Develop interactive frontend applications with React.js and Styled Components.
            Collaborate on branding and website redesign projects.
          </p>
        </div>

        {/* Technical Consulting */}
        <div className="service-card">
          <div className="service-icon">
            <FaLightbulb />
          </div>
          <h3 className="service-title">Technical Consulting</h3>
          <p className="service-description">
            Offer solutions for problem-solving, adaptability, and continuous learning in tech projects.
          </p>
        </div>

        {/* Data Analyst */}
        <div className="service-card">
          <div className="service-icon">
            <FaChartLine />
          </div>
          <h3 className="service-title">Data Analyst</h3>
          <p className="service-description">
            Transform complex data into actionable insights using advanced analytics tools.
            Create data-driven visualizations and reports to support business decisions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
