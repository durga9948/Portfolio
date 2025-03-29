import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <h1>[Your Name]</h1>
        <p>Software Developer | Ghibli Enthusiast</p>
      </header>

      {/* About Section */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          I'm a passionate software developer inspired by the whimsical worlds of Studio Ghibli.
          I craft clean, efficient code with the same care as a Ghibli artisan.
          Let's build something magical together!
        </p>
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