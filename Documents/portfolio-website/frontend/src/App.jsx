import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [portfolioData, setPortfolioData] = useState(null)

  useEffect(() => {
    // Fetch portfolio data from backend
    fetch('http://localhost:5000/api/portfolio')
      .then(res => res.json())
      .then(data => setPortfolioData(data))
      .catch(err => console.log('Using fallback data:', err))
  }, [])

  // Fallback data if backend is not available
  const fallbackData = {
    name: 'Nakkanagoni Shiva',
    title: 'Full Stack Developer',
    tagline: 'Building efficient software solutions and contributing to innovative technology teams',
    email: 'shivanakkanagoni17@gmail.com',
    phone: '+91 7093648295',
    location: 'Hyderabad',
    linkedin: 'https://linkedin.com/in/nakkanagoni-shiva',
    github: 'https://github.com/nakkanagoni-shiva',
    about: `Motivated Computer Science student passionate about building efficient software solutions and contributing to innovative technology teams. Currently pursuing B.Tech at RGUKT-Basar with a CGPA of 9.5.`,
    skills: [
      { category: 'Languages', items: ['Java', 'C', 'C++', 'Python', 'JavaScript'] },
      { category: 'Frontend', items: ['React.js', 'HTML', 'CSS', 'TailwindCSS'] },
      { category: 'Backend', items: ['Node.js', 'Express.js', 'MongoDB'] },
      { category: 'Tools & Others', items: ['Git', 'GitHub', 'DSA', 'OOPs', 'DBMS', 'Claude', 'Notion', 'Perplexity AI', 'GitHub Copilot'] }
    ],
    projects: [
      {
        title: 'Strider-Live',
        description: 'Real-time sports score tracking platform where audiences can view live updates for games. Implemented an admin panel to manage and update live match scores instantly.',
        technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
        image: '/api/placeholder/400/300'
      },
      {
        title: 'AGRI CART',
        description: 'Agriculture-based e-commerce platform connecting farmers directly with customers. Implemented product listing, customer interaction, and basic cart functionality.',
        technologies: ['MERN Stack', 'Express', 'MongoDB'],
        image: '/api/placeholder/400/300'
      },
      {
        title: 'SanchariRide',
        description: 'Smart ride comparison app that finds the lowest fare and fastest ride options among Uber, Ola, and Rapido. Integrated pickup and drop location analysis.',
        technologies: ['React', 'API Integration', 'JavaScript'],
        image: '/api/placeholder/400/300'
      },
      {
        title: 'codingDost',
        description: 'Online coding practice platform with programming challenges, multi-language support, custom test cases, and real-time code execution.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Judge0 API'],
        image: '/api/placeholder/400/300'
      }
    ],
    experience: [
      {
        title: 'Logo Design Contest',
        company: 'MyGov "VB-G RAM G"',
        period: '2024',
        description: 'Designed the MyGov "VB-G RAM G" Logo Design Contest, creating a visual identity for a national-level government scheme.'
      },
      {
        title: 'Customer Relations & Loan Processing',
        company: 'KLM Axiva Finvest',
        period: '2023',
        description: 'Gained experience in customer relations, loan processing, and promoting gold loan services with competitive interest rates.'
      },
      {
        title: 'Automated Monkey Deterrent System',
        company: 'Telangana Farmer Association',
        period: '2023',
        description: 'Engineered an innovative system to mitigate crop loss through automated deterrent mechanisms in collaboration with farmers.'
      }
    ],
    certifications: [
      {
        title: 'GenAI Powered Data Analytics Job Simulation',
        issuer: 'TATA & Forage',
        date: 'May 2026',
        description: 'Completed practical tasks including exploratory data analysis, predicting delinquency with AI, business reporting, and implementing AI-driven collections strategy.'
      },
      {
        title: 'Prompt Engineering',
        issuer: 'Infosys Springboard',
        date: 'April 5, 2026',
        description: 'Completed comprehensive course on Prompt Engineering, mastering techniques for effective AI prompt design and optimization.'
      },
      {
        title: 'AI Beginner Course',
        issuer: 'Infosys Springboard',
        date: '2025',
        description: 'Gained foundational knowledge in Artificial Intelligence concepts and applications.'
      },
      {
        title: 'IT Wizard 2018',
        issuer: 'Certification Program',
        date: '2018',
        description: 'Completed comprehensive IT training program.'
      }
    ],
    achievements: [
      'Received INR 4,000 cash prize through Turito App for consistent performance',
      'Selected at Mandal-level Science Exhibition (2021)',
      'Participated in Webcasting for Telangana General Elections 2023 & Lok Sabha Elections 2024',
      'Participated in E-Summit 2K25 at IIT Bombay',
      'Ranked in top percentile in SSC CHSL Tier 1 (2025) with score of 104',
      'Secured State Rank 1200 in POLYCET (2021)'
    ]
  }

  const data = portfolioData || fallbackData

  return (
    <div className="app">
      <Navbar />
      <Hero data={data} />
      <About data={data} />
      <Skills data={data} />
      <Projects data={data} />
      <Experience data={data} />
      <Certifications data={data} />
      <Contact data={data} />
    </div>
  )
}

export default App
