import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [portfolioData, setPortfolioData] = useState({
    name: 'Shiva Nakkanagoni',
    title: 'Full Stack Developer',
    about: 'Passionate developer with expertise in modern web technologies.',
    skills: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Python'],
    projects: [
      { name: 'Portfolio Website', description: 'Personal portfolio website' },
      { name: 'E-commerce App', description: 'Full-stack e-commerce platform' },
      { name: 'Task Manager', description: 'Productivity application' }
    ],
    contact: { email: 'shivanakkanagoni17@gmail.com' }
  })

  useEffect(() => {
    // Fetch portfolio data from backend
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000'
    fetch(`${apiUrl}/api/portfolio`)
      .then(res => res.json())
      .then(data => setPortfolioData(data))
      .catch(err => console.log('Using fallback data:', err))
  }, [])

  return (
    <div className="app">
      <header className="header">
        <h1>{portfolioData.name}</h1>
        <p className="title">{portfolioData.title}</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>{portfolioData.about}</p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          {portfolioData.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          {portfolioData.projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>Email: {portfolioData.contact.email}</p>
      </section>
    </div>
  )
}

export default App
