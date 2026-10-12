function Projects() {
  return (
    <section id="projects">

      <div className="window">

        <div className="window-header">
          <span className="red"></span>
          <span className="yellow"></span>
          <span className="green"></span>
        </div>

        <div className="window-content">
          <h2>Projects</h2>

          <div className="project-grid">

            <div className="project-card">
              <h3>SignalScope</h3>
              <p>
                Security Analytics Dashboard simulates a Security Operations Center (SOC) workflow where security events are analyzed to identify potentially suspicious activity.
              </p>

              <a
                href="https://github.com/ruhani-source/SignalScope-SOC-Alert-Triage-Dashboard "
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                View 
              </a>
            </div>

            
            <div className="project-card">
              <h3>Occupancy Monitoring System</h3>
              <p>
                Built a digital system using VHDL on FPGA board to monitor room occupancy.
              </p>

              <a
                href="https://github.com/ruhani-source/Room-Occupancy-Counter-VHDL-FPGA-Simulation "
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                View 
              </a>
            </div>

            <div className="project-card">
              <h3>Ruhani's portfolio</h3>
              <p>
                This is my portfolio, designed using React and Vite. 
              </p>

              <a
                href="https://github.com/ruhani-source/Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                View 
              </a>
            </div>


            <div className="project-card">
              <h3>NOVA</h3>
              <p>
                Project intelligence platform that transforms unstructured project documents into actionable, searchable knowledge.
              </p>

              <a
                href="https://github.com/ruhani-source/NOVA "
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                View
              </a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;