
/*function Contact() {
  return (
    <section id="contact">
      <div className="window">

        <div className="window-header">
          <span className="red"></span>
          <span className="yellow"></span>
          <span className="green"></span>
        </div>

        <div className="window-content">
          <h2>Contact</h2>

          <p>
            Email: 
            <a href="ruhanikareer5@gmail.com"> Email</a>
          </p>

          <p>
            GitHub: 
            <a href="https://github.com/ruhani-source " target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </p>

          <p>
            LinkedIn: 
            <a href="https://www.linkedin.com/in/ruhani-kareer/ " target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </p>

        </div>

      </div>
    </section>
  );
}

export default Contact;*/

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact">
      <div className="window">

        <div className="window-header">
          <span className="red"></span>
          <span className="yellow"></span>
          <span className="green"></span>
        </div>

        <div className="window-content">
          <h2>Contact</h2>

          <div className="contact-links">

            <a href="ruhanikareer5@gmail.com" className="contact-item">
              <FaEnvelope />
              <span>Email Me</span>
            </a>

            <a
              href="https://github.com/ruhani-source"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/ruhani-kareer/ "
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;