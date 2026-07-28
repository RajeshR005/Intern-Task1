import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Download, ChevronRight, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import './Hero.css';
import profileImage from '../assets/profile_placeholder_1783539495447.png';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Build scalable backend systems, intelligent AI workflows, and production-ready software using Python, FastAPI, LangGraph, and Generative AI.";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
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
            Hi, I'm Rajesh R.
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
            <a href="/resume.pdf" className="btn btn-secondary">
              <Download size={18} /> Download Resume
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
                <span className="keyword">from</span> fastapi <span className="keyword">import</span> FastAPI<br />
                <span className="keyword">import</span> langchain<br />
                <span className="keyword">import</span> langgraph<br />
                <br />
                app = FastAPI(title=<span className="string">"AI Backend"</span>)<br />
                <br />
                <span className="comment"># Initializing agentic workflow</span><br />
                agent = langgraph.create_agent()<br />
                agent.start()
              </code>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
