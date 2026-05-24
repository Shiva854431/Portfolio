const Experience = ({ data }) => {
  return (
    <section id="experience" className="experience">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <div className="section-underline"></div>
        </div>
        <div className="experience-timeline">
          {data.experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-marker"></div>
              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <div className="experience-company">{exp.company}</div>
                <p className="experience-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
