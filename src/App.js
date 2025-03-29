import React from 'react';
import './App.css';
import profilePic from './assets/profile-pic.jpg'; // Your profile picture
import { Link } from 'react-scroll';

function App() {
  const sections = [
    { id: 'education-experience', label: 'Education & Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'recommendations', label: 'Recommendations' },
    { id: 'achievements-contact', label: 'Contact' },
  ];

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <h1 className="nav-title">DB Chunduri</h1>
          <ul className="nav-links">
            {sections.map((section) => (
              <li key={section.id}>
                <Link
                  to={section.id}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="nav-link"
                >
                  {section.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Header Section with About Me */}
      <header className="header" id="header">
        <div className="header-content">
          <div className="about-me">
            <h1 className="header-title">Durga Bhavani Chunduri</h1>
            <p className="subtitle">Software Developer | Ghibli Enthusiast</p>
            <p>
              I'm a dedicated software developer with a love for crafting elegant solutions,
              inspired by the imaginative worlds of Studio Ghibli.
              With a background in [your field], I bring creativity and precision to every project.
              In my free time, I enjoy [hobbies, e.g., sketching, exploring nature].
            </p>
          </div>
          <img src={profilePic} alt="[Your Name]" className="profile-pic" />
        </div>
      </header>

      {/* Combined Education and Experience Section */}
      <section className="education-experience section" id="education-experience">
        <div className="timeline-container">
          {/* Education Timeline */}
          <div className="timeline education-timeline">
            <h2>Education</h2>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>[Degree, e.g., B.S. in Computer Science] - [University Name]</h3>
                <p><em>[Graduation Year, e.g., May 2020]</em></p>
                <p>[Details, e.g., Graduated with honors, GPA: 3.8/4.0]</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>[Another Degree or Certification] - [Institution Name]</h3>
                <p><em>[Year, e.g., June 2018]</em></p>
                <p>[Details, e.g., Specialized in Web Development]</p>
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="timeline experience-timeline">
            <h2>Experience</h2>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Software Developer - [Company Name]</h3>
                <p><em>June 2022 - Present</em></p>
                <p>Developed scalable web applications using React and Node.js.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Junior Developer - [Company Name]</h3>
                <p><em>Jan 2020 - May 2022]</em></p>
                <p>Collaborated on RESTful APIs and optimized database queries.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="skills section" id="skills">
        <h2>Technical Skills</h2>
        <ul className="skills-list">
          <li>JavaScript (React, Node.js)</li>
          <li>Python (Django, Flask)</li>
          <li>HTML5 & CSS3</li>
          <li>Git & GitHub</li>
          <li>SQL & NoSQL Databases</li>
          <li>Cloud: AWS, Docker</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className="projects section" id="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Totoro's Task Manager</h3>
            <p>A React-based task app with a vibrant UI.</p>
            <a href="#">View Project</a>
          </div>
          <div className="project-card">
            <h3>Spirited Blog</h3>
            <p>A full-stack blogging platform with bold animations.</p>
            <a href="#">View Project</a>
          </div>
          <div className="project-card">
            <h3>Kiki's Delivery API</h3>
            <p>A Node.js API for tracking deliveries, dynamically styled.</p>
            <a href="#">View Project</a>
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="recommendations section" id="recommendations">
        <h2>Recommendations</h2>
        <div className="recommendations-container">
          <div className="recommendation-bubble bubble-large">
            <p>"[Your Name] is a talented developer with exceptional work ethic!"</p>
            <p><em>- [Name], [Title], [Company]</em></p>
          </div>
          <div className="recommendation-bubble bubble-medium">
            <p>"Their creative solutions elevated our project."</p>
            <p><em>- [Name], [Title], [Company]</em></p>
          </div>
          <div className="recommendation-bubble bubble-small">
            <p>"A true team player with brilliant ideas!"</p>
            <p><em>- [Name], [Title], [Company]</em></p>
          </div>
        </div>
      </section>

      {/* Combined Achievements and Contact Section */}
      <section className="achievements-contact section" id="achievements-contact">
        <div className="achievements-contact-container">
          <div className="contact">
            <h2>Contact Me</h2>
            <p>Email: your.email@example.com</p>
            <p>GitHub: github.com/yourusername</p>
            <p>LinkedIn: linkedin.com/in/yourusername</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 [Your Name] | Inspired by Studio Ghibli</p>
      </footer>
    </div>
  );
}

export default App;