import React from 'react';
import './Home.css';

function Home() {
  return (
    <div
      className="home-bg"
      style={{
        backgroundImage: `url('/bg.jpg')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center 75%'
      }}
    >
      <div className="home-center-group">
        <div className="home-name">MAX STEIN</div>
        <div className="home-subtitle">
          software developer<span className="subtitle-break"><br /></span> at octus in new york
        </div>
        <div className="home-links">
          <a href="https://github.com/maxstein16" target="_blank" rel="noopener noreferrer">PROJECTS</a>
          <a href="https://medium.com/@max-stein" target="_blank" rel="noopener noreferrer">ARTICLES</a>
          <a href="https://photo.max-stein.net" target="_blank" rel="noopener noreferrer">PHOTO</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">RESUME</a>
        </div>
      </div>
    </div>
  );
}

export default Home; 