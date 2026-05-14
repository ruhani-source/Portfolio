/*function Skills() {
  return (
    <section id="skills">

      <div className="window">

        <div className="window-header">
          <span className="red"></span>
          <span className="yellow"></span>
          <span className="green"></span>
        </div>

        <div className="window-content">
          <h2>Skills</h2>

          <ul className="skills-list">
            <li>VHDL</li>
            <li>C++</li>
            <li>Python</li>
            <li> JavaScript</li>
            <li></li>
          </ul>

        </div>

      </div>

    </section>
  );
}

export default Skills;*/

/*function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>

      <div className="skills-container">

        <div className="skill-category">
          <h3>Programming Languages</h3>
          <p>Python, C++, JavaScript, VHDL, React, CSS</p>
        </div>

        <div className="skill-category">
          <h3>Hardware</h3>
          <p>PCB design, FPGA programming </p>
        </div>

        <div className="skill-category">
          <h3>Software</h3>
          <p>Object-Oriented Programming</p>
        </div>

        <div className="skill-category">
          <h3>Tools</h3>
          <p>Git, GitHub, Linux, Altium</p>
        </div>

      </div>
    </section>
  );
}

export default Skills;*/

import {
  FaPython,
  FaJs,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaReact,
} from "react-icons/fa";

import {
  SiCplusplus,
  SiAltiumdesigner,
} from "react-icons/si";


function Skills() {
  return (
    <section id="skills">
      <div className="window">

        <div className="window-header">
          <span className="red"></span>
          <span className="yellow"></span>
          <span className="green"></span>
        </div>

        <div className="window-content">
          <h2>Skills</h2>

          <div className="icon-cloud">

            <FaPython title="Python" />
            <SiCplusplus title="C++" />
            <FaJs title="JavaScript" />
            <FaCss3Alt title="CSS" />
            <FaReact title="React" />

            <FaGitAlt title="Git" />
            <FaGithub title="GitHub" />
            <FaLinux title="Linux" />

            <SiAltiumdesigner title="Altium" />

          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;