import React from 'react';
import './App.css';
import profilePic from './assets/profile-pic.jpg'; // Placeholder for your image

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <img src={profilePic} alt="[Your Name]" className="profile-pic" />
        <h1>[Your Name]</h1>
        <p>Software Developer | Ghibli Enthusiast</p>
      </header>

      {/* About Me Section */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          I'm a dedicated software developer with a love for crafting elegant solutions,
          inspired by the serene and imaginative worlds of Studio Ghibli.
          With a background in [your field], I bring creativity and precision to every project.
          In my free time, I enjoy [hobbies, e.g., sketching, exploring nature].
        </p>
      </section>

      {/* Experiences Section */}
      <section className="experiences">
        <h2>Experiences</h2>
        <div className="experience-item">
          <h3>Software Developer - [Company Name]</h3>
          <p><em>June 2022 - Present</em></p>
          <p>Developed scalable web applications using React and Node.js, improving user experience by 30%.</p>
        </div>
        <div className="experience-item">
          <h3>Junior Developer - [Company Name]</h3>
          <p><em>Jan 2020 - May 2022</em></p>
          <p>Collaborated on a team to build RESTful APIs and optimized database queries.</p>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="skills">
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
      <section className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Totoro's Task Manager</h3>
            <p>A React-based task app with a forest-inspired UI.</p>
            <a href="#">View Project</a>
          </div>
          <div className="project-card">
            <h3>Spirited Blog</h3>
            <p>A full-stack blogging platform with mystical animations.</p>
            <a href="#">View Project</a>
          </div>
          <div className="project-card">
            <h3>Kiki's Delivery API</h3>
            <p>A Node.js API for tracking deliveries, Ghibli-style.</p>
            <a href="#">View Project</a>
          </div>
        </div>
      </section>

      {/* Other Achievements Section */}
      <section className="achievements">
        <h2>Other Achievements</h2>
        <ul>
          <li>Won 1st Place at [Hackathon Name] 2023 for [Project Name]</li>
          <li>Published an article on [Topic] in [Publication]</li>
          <li>Contributed to open-source project [Project Name]</li>
        </ul>
      </section>

      {/* Recommendations Section */}
      <section className="recommendations">
        <h2>Recommendations</h2>
        <div className="recommendation-item">
          <p>"[Your Name] is a talented developer with a keen eye for detail. Their work ethic is exceptional!"</p>
          <p><em>- [Name], [Title], [Company]</em></p>
        </div>
        <div className="recommendation-item">
          <p>"Working with [Your Name] was a delight. Their creative solutions elevated our project."</p>
          <p><em>- [Name], [Title], [Company]</em></p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact Me</h2>
        <p>Email: your.email@example.com</p>
        <p>GitHub: github.com/yourusername</p>
        <p>LinkedIn: linkedin.com/in/yourusername</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 [Your Name] | Inspired by Studio Ghibli</p>
      </footer>
    </div>
  );
}

export default App;