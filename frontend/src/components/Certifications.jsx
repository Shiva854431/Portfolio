const Certifications = ({ data }) => {
  return (
    <section id="certifications" className="certifications">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Certifications & Achievements</h2>
          <div className="section-underline"></div>
        </div>
        <div className="certifications-content">
          <div className="certifications-list">
            {data.certifications.map((cert, index) => (
              <div key={index} className="certification-card">
                <div className="certification-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                  </svg>
                </div>
                <div className="certification-info">
                  <h3 className="certification-title">
                    {cert.title}
                  </h3>
                  <div className="certification-meta">
                    <span className="certification-issuer">{cert.issuer}</span>
                    <span className="certification-date">{cert.date}</span>
                  </div>
                  <p className="certification-description">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="achievements-section">
            <h3 className="achievements-title">Achievements</h3>
            <ul className="achievements-list">
              {data.achievements.map((achievement, index) => (
                <li key={index} className="achievement-item">
                  <span className="achievement-bullet">•</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications
