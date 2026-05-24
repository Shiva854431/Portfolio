const Skills = ({ data }) => {
  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Skills</h2>
          <div className="section-underline"></div>
        </div>
        <div className="skills-grid">
          {data.skills.map((skillCategory, index) => (
            <div key={index} className="skill-category">
              <h3 className="skill-category-title">{skillCategory.category}</h3>
              <div className="skill-items">
                {skillCategory.items.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
