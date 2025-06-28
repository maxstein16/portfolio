import React from 'react';
import { FaInstagram, FaLinkedin, FaSpotify } from 'react-icons/fa';
import { SiStrava } from 'react-icons/si';
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
          software engineer<span className="subtitle-break"><br /></span> at octus in new york
        </div>
        <div className="home-links">
          <a href="https://github.com/maxstein16" target="_blank" rel="noopener noreferrer">PROJECTS</a>
          <a href="https://medium.com/@max-stein" target="_blank" rel="noopener noreferrer">ARTICLES</a>
          <a href="https://photo.max-stein.net" target="_blank" rel="noopener noreferrer">PHOTO</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">RESUME</a>
        </div>
      </div>
      <div className="home-social-footer">
        <a href="https://www.instagram.com/maxsteinn/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
        <a href="https://www.linkedin.com/in/max-h-stein" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="https://open.spotify.com/user/9j874bww0y1k4hrl9avn6b32q?si=7351289fb3044b24" target="_blank" rel="noopener noreferrer" aria-label="Spotify"><FaSpotify /></a>
        <a href="https://www.strava.com/athletes/26514547" target="_blank" rel="noopener noreferrer" aria-label="Strava"><SiStrava /></a>
      </div>
    </div>
  );
}

export default Home; 