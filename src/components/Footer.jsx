import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2>Rajesh R</h2>
            <p>Python Backend Developer & Agentic AI Engineer building scalable systems.</p>
          </div>
          
          <div className="footer-socials">
            <a href="https://github.com/RajeshR005" target="_blank" rel="noreferrer" className="social-link">
              <GithubIcon size={24} />
            </a>
            <a href="https://linkedin.com/in/rajeshradha" target="_blank" rel="noreferrer" className="social-link">
              <LinkedinIcon size={24} />
            </a>
            <a href="mailto:rajeshr30072002@gmail.com" className="social-link">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Rajesh R. All rights reserved.</p>
          <p>Designed & Built from scratch.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
