import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Download, ChevronRight, Terminal, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import './Hero.css';
import profileImage from '../assets/profile_placeholder_1783539495447.png';

const Hero = () => {
  const [text, setText] = useState('');
  const [nameText, setNameText] = useState('');
  const fullText = "Build scalable backend systems, intelligent AI workflows, and production-ready software using Python, FastAPI, LangGraph, and Generative AI.";
  const fullName = "Rajesh R.";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let currentText = '';
    let isDeleting = false;
    let timeoutId;

    const type = () => {
      if (isDeleting) {
        currentText = fullName.substring(0, currentText.length - 1);
      } else {
        currentText = fullName.substring(0, currentText.length + 1);
      }

      setNameText(currentText);

      let typeSpeed = 150;
      if (isDeleting) typeSpeed /= 2;

      if (!isDeleting && currentText === fullName) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && currentText === '') {
        isDeleting = false;
        typeSpeed = 500;
      }

      timeoutId = setTimeout(type, typeSpeed);
    };

    timeoutId = setTimeout(type, 150);
    return () => clearTimeout(timeoutId);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="hero" id="home">
      {/* Background with overlay */}
      <div className="hero-bg">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src="/video/bg-vieo-hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="hero-badge">
            <span className="pulse-dot"></span> Available for Hire
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero-title">
            Hi, I'm <span className="animated-name">{nameText}</span><span className="cursor name-cursor">|</span>
            <br />
            <span className="glow-text">Python Backend Developer</span>
            <br />
            & Agentic AI Engineer
          </motion.h1>

          <motion.div variants={itemVariants} className="hero-description">
            <p className="typing-text">{text}<span className="cursor">|</span></p>
          </motion.div>

          <motion.div variants={itemVariants} className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              Explore My Work <ChevronRight size={18} />
            </a>
            <a href="https://drive.google.com/file/d/1K7rVzx8nmE8ZPgF4OAB7u0CXv5cRtjwK/view?usp=sharing" target="_blank" rel="noreferrer" className="btn btn-secondary">
              <ExternalLink size={18} /> View Resume
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="hero-socials">
            <a href="https://github.com/RajeshR005" target="_blank" rel="noreferrer"><GithubIcon size={20} /></a>
            <a href="https://linkedin.com/in/rajeshradha" target="_blank" rel="noreferrer"><LinkedinIcon size={20} /></a>
            <a href="mailto:rajeshr30072002@gmail.com"><Mail size={20} /></a>
            <div className="location-badge">
              <MapPin size={16} /> Bengaluru
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="profile-wrapper">
            <img src={profileImage} alt="Rajesh R" className="profile-image" />
            
            {/* Floating Badges */}
            <motion.div 
              className="tech-badge badge-1 glass-panel"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              Python
            </motion.div>
            <motion.div 
              className="tech-badge badge-2 glass-panel"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              FastAPI
            </motion.div>
            <motion.div 
              className="tech-badge badge-3 glass-panel"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              LangGraph
            </motion.div>
          </div>
          
          <div className="terminal-window glass-panel">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span></span><span></span><span></span>
              </div>
              <div className="terminal-title">server.py</div>
            </div>
            <div className="terminal-body">
              <code>
                <span className="keyword">uvicorn</span> main:app --reload<br />
                <span className="comment">INFO</span>: Loading modules...<br />
                [<span className="keyword">✓</span>] FastAPI & SQLAlchemy<br />
                [<span className="keyword">✓</span>] LangGraph & LangChain<br />
                [<span className="keyword">✓</span>] JWT Auth Security<br />
                <span className="string">-------------------------</span><br />
                <span className="comment">INFO</span>: Server started on port 8000<br />
                <span className="keyword">[ SYS: RAJESH BACKEND ACTIVE ]</span>
              </code>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
