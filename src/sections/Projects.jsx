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
                Built as a cybersecurity-focused frontend project simulating SOC
                analyst workflows and decision-making under uncertainty.
              </p>

              <a
                href="https://github.com/ruhani-source/SignalScope-SOC-Alert-Triage-Dashboard "
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                View Project
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
                View Project
              </a>
            </div>

            <div className="project-card">
              <h3>Ruhani's portfolio</h3>
              <p>
                This is my portfolio, built using JavaScript and React. 
              </p>

              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                View Project
              </a>
            </div>


            <div className="project-card">
              <h3>Foundly</h3>
              <p>
                Lost and found web app with secure, confidence-based item matching.
              </p>

              <a
                href="https://github.com/AridjTair/Code-carats "
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                View Project
              </a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;