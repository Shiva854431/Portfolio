# Personal Portfolio Website

A full-stack personal portfolio website built with React, Express.js, and MongoDB.

## Tech Stack

### Frontend
- React.js (Vite)
- CSS3 with modern styling
- Responsive design

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose

## Features

- Hero section with animated avatar
- About section with education details
- Skills section with categorized skills
- Projects showcase with technology tags
- Experience timeline
- Certifications and achievements
- Contact form
- Responsive navigation with mobile menu
- Smooth scrolling and animations

## Installation

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
npm install
npm start
```

The backend will run on port 5000 by default.

## Environment Variables

Create a `.env` file in the backend directory:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
```

## Deployment

### Render Deployment (Recommended)

#### Backend Deployment

1. Push code to GitHub
2. Go to [Render](https://render.com) and create a new Web Service
3. Connect your GitHub repository
4. Select the `backend` folder as root directory
5. Set environment variables:
   - `MONGODB_URI`: Your MongoDB connection string (MongoDB Atlas recommended)
   - `PORT`: Port number (default: 10000 on Render)
6. Deploy

#### Frontend Deployment

1. Go to Render and create a new Static Site
2. Connect your GitHub repository
3. Select the `frontend` folder as root directory
4. Build command: `npm install && npm run build`
5. Publish directory: `dist`
6. Set environment variable:
   - `VITE_API_URL`: Your backend Render URL (e.g., https://portfolio-backend.onrender.com)
7. Deploy

### Alternative Deployment Options

#### Frontend Deployment (Vercel/Netlify)

1. Push code to GitHub
2. Connect repository to Vercel or Netlify
3. Deploy from the `frontend` directory

#### Backend Deployment (Heroku)

1. Push code to GitHub
2. Connect repository to Heroku
3. Set environment variables:
   - `MONGODB_URI`: Your MongoDB connection string
   - `PORT`: Port number (default: 5000)

## API Endpoints

- `GET /api/portfolio` - Get portfolio data
- `PUT /api/portfolio` - Update portfolio data
- `POST /api/contact` - Submit contact form

## Project Structure

```
portfolio-website/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Certifications.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Navbar.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   └── package.json
├── backend/
│   ├── server.js
│   ├── .env
│   ├── render.yaml
│   └── package.json
└── README.md
```

## Author

Nakkanagoni Shiva
- Email: shivanakkanagoni17@gmail.com
- GitHub: https://github.com/nakkanagoni-shiva
