const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
let dbConnected = false;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio')
.then(() => {
  console.log('MongoDB connected successfully');
  dbConnected = true;
})
.catch((err) => {
  console.log('MongoDB connection error - using fallback data:', err.message);
});

// Portfolio Schema
const portfolioSchema = new mongoose.Schema({
  name: String,
  title: String,
  tagline: String,
  email: String,
  phone: String,
  location: String,
  linkedin: String,
  github: String,
  about: String,
  skills: [{
    category: String,
    items: [String]
  }],
  projects: [{
    title: String,
    description: String,
    technologies: [String],
    image: String
  }],
  experience: [{
    title: String,
    company: String,
    period: String,
    description: String
  }],
  certifications: [{
    title: String,
    issuer: String,
    date: String,
    description: String
  }],
  achievements: [String]
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

// Fallback data
const fallbackPortfolio = {
  name: 'Nakkanagoni Shiva',
  title: 'Full Stack Developer',
  tagline: 'Building efficient software solutions and contributing to innovative technology teams',
  email: 'shivanakkanagoni17@gmail.com',
  phone: '+91 7093648295',
  location: 'Hyderabad',
  linkedin: 'https://linkedin.com/in/nakkanagoni-shiva',
  github: 'https://github.com/nakkanagoni-shiva',
  about: 'Motivated Computer Science student passionate about building efficient software solutions and contributing to innovative technology teams. Currently pursuing B.Tech at RGUKT-Basar with a CGPA of 9.5.',
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
};

// Routes
app.get('/api/portfolio', async (req, res) => {
  try {
    if (dbConnected) {
      let portfolio = await Portfolio.findOne();
      if (!portfolio) {
        portfolio = await Portfolio.create(fallbackPortfolio);
      }
      res.json(portfolio);
    } else {
      res.json(fallbackPortfolio);
    }
  } catch (error) {
    console.error('Error fetching portfolio:', error);
    res.json(fallbackPortfolio);
  }
});

app.put('/api/portfolio', async (req, res) => {
  try {
    const portfolio = await Portfolio.findOneAndUpdate({}, req.body, { new: true, upsert: true });
    res.json(portfolio);
  } catch (error) {
    console.error('Error updating portfolio:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    console.log('Contact form submission:', { name, email, subject, message });
    // Here you would typically send an email or save to database
    res.json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending contact form:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
