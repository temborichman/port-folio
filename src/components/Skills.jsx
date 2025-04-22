import React from 'react'
import "./skills.css";  
import Frontend from './Frontend';
import Backend from './Backend';
import Projects from './Projects';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section-title">Skills</h2>
      
    
    <div className="skills-container container grid">
    <Frontend/>
    <Backend/>       
    </div>

    <Projects />
    </section>
  )
}

export default Skills
