const About = ({ data }) => {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-underline"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">{data.about}</p>
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">Name:</span>
                <span className="detail-value">{data.name}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <span className="detail-value">{data.email}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Phone:</span>
                <span className="detail-value">{data.phone}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Location:</span>
                <span className="detail-value">{data.location}</span>
              </div>
            </div>
          </div>
          <div className="about-education">
            <h3 className="education-title">Education</h3>
            <div className="education-card">
              <div className="education-degree">Bachelor of Technology</div>
              <div className="education-school">RGUKT-Basar (IIIT-Basar)</div>
              <div className="education-details">
                <span className="education-cgpa">CGPA: 9.5</span>
                <span className="education-year">Expected 2027</span>
              </div>
            </div>
            <div className="education-card">
              <div className="education-degree">Pre-University Course</div>
              <div className="education-school">RGUKT-Basar</div>
              <div className="education-details">
                <span className="education-year">2021 - 2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
