import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Layers, Server, Activity, ShieldCheck, Zap } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import './Projects.css';
import ziyaImg from '../assets/Ziya_Interface.png';
import dayflowImg from '../assets/dayflow_dashboard_placeholder_1783539547660.png';
import atmCliImg from '../assets/atm_cli.png';
import healthcareImg from '../assets/healthcare.png';

const Projects = () => {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Work
        </motion.h2>

        {/* Project 1: Ziya - Massive Highlight */}
        <div className="project-showcase ziya-showcase">
          <motion.div 
            className="project-hero-image"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="browser-header">
              <div className="browser-dots"><span></span><span></span><span></span></div>
              <div className="browser-url">api.ziya-ai.com/dashboard</div>
            </div>
            <img src={ziyaImg} alt="Ziya AI Dashboard" />
          </motion.div>

          <motion.div 
            className="project-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="project-title glow-text">Ziya – Agentic AI Shopping Assistant</h3>
            <p className="project-description">
              An intelligent, conversational shopping assistant that executes multi-step reasoning to discover products, filter results, and manage shopping carts securely via Agentic AI workflows.
            </p>

            <div className="project-tech-stack">
              <span>Python</span><span>FastAPI</span><span>LangGraph</span><span>LangChain</span><span>SQLAlchemy</span><span>MySQL</span><span>JWT</span>
            </div>

            <div className="project-grid-features">
              <div className="feature-block glass-panel">
                <h4><Layers size={18}/> Architecture</h4>
                <p>Modular FastAPI backend. Relational MySQL DB managed via Alembic. Stateful agent graphs via LangGraph for multi-turn interactions.</p>
              </div>
              <div className="feature-block glass-panel">
                <h4><Zap size={18}/> Features</h4>
                <p>Conversational product search, authenticated cart ops, secure user reviews, automated filtering via LLM tool calling.</p>
              </div>
              <div className="feature-block glass-panel">
                <h4><ShieldCheck size={18}/> Engineering Decisions</h4>
                <p>Separated LLM reasoning (LangGraph) from API routing. Normalized DB schema to ensure data integrity during parallel user requests.</p>
              </div>
              <div className="feature-block glass-panel">
                <h4><Server size={18}/> Deployment</h4>
                <p>Backend deployed on Render with secure environment configs. Frontend hosted on Vercel.</p>
              </div>
            </div>

            <div className="project-actions">
              <a href="#" className="btn btn-primary"><ExternalLink size={18} /> Live Demo</a>
              <a href="#" className="btn btn-secondary"><Code size={18} /> API Swagger</a>
              <a href="#" className="btn btn-secondary"><GithubIcon size={18} /> Source</a>
            </div>
          </motion.div>
        </div>

        {/* Project 2: Dayflow */}
        <div className="project-showcase dayflow-showcase">
          <motion.div 
            className="project-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="project-title">Dayflow – Unified Productivity Backend</h3>
            <p className="project-description">
              A comprehensive FastAPI backend integrating expense tracking, journaling, and task management with secure authentication and atomic financial operations.
            </p>

            <div className="project-tech-stack">
              <span>Python</span><span>FastAPI</span><span>SQLAlchemy</span><span>MySQL</span><span>JWT</span>
            </div>

            <div className="project-grid-features compact-features">
              <div className="feature-block glass-panel">
                <h4><Activity size={18}/> Challenges & Decisions</h4>
                <p>Implemented ACID-compliant transactional logic to maintain wallet balance consistency during concurrent expense submissions.</p>
              </div>
              <div className="feature-block glass-panel">
                <h4><Layers size={18}/> Architecture</h4>
                <p>Domain-driven design (DDD) isolating auth, finance, and tasks into independent modules.</p>
              </div>
            </div>

            <div className="project-actions">
              <a href="https://github.com/RajeshR005/dayflow" target="_blank" rel="noopener noreferrer" className="btn btn-secondary"><GithubIcon size={18} /> Source</a>
            </div>
          </motion.div>

          <motion.div 
            className="project-hero-image"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="browser-header">
              <div className="browser-dots"><span></span><span></span><span></span></div>
              <div className="browser-url">api.dayflow.app/admin</div>
            </div>
            <img src={dayflowImg} alt="Dayflow Dashboard" />
          </motion.div>
        </div>

        {/* Project 3: ATM CLI System */}
        <div className="project-showcase atm-showcase">
          <motion.div 
            className="project-hero-image"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="browser-header">
              <div className="browser-dots"><span></span><span></span><span></span></div>
              <div className="browser-url">terminal /atm-cli</div>
            </div>
            <img src={atmCliImg} alt="ATM CLI Dashboard" />
          </motion.div>

          <motion.div 
            className="project-content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="project-title">ATM CLI System</h3>
            <p className="project-description">
              A secure command-line banking application mimicking real ATM logic, including PIN authentication, role-based access, and cash denomination management.
            </p>

            <div className="project-tech-stack">
              <span>Python</span><span>SQLAlchemy</span><span>MySQL</span><span>bcrypt</span>
            </div>

            <div className="project-grid-features compact-features">
              <div className="feature-block glass-panel">
                <h4><Activity size={18}/> Features</h4>
                <p>Role-based login for Admin & Account Holders, real-time ATM cash management (₹500, ₹100 notes), and smart withdrawals.</p>
              </div>
              <div className="feature-block glass-panel">
                <h4><ShieldCheck size={18}/> Security</h4>
                <p>User PINs are securely hashed using bcrypt. System prevents invalid cash combinations and ensures robust transactional integrity.</p>
              </div>
            </div>

            <div className="project-actions">
              <a href="https://github.com/RajeshR005/atm-cli-system" target="_blank" rel="noopener noreferrer" className="btn btn-secondary"><GithubIcon size={18} /> Source</a>
            </div>
          </motion.div>
        </div>

        {/* Project 4: Healthcare Chatbot */}
        <div className="project-showcase healthcare-showcase">
          <motion.div 
            className="project-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="project-title">AI Healthcare Chatbot</h3>
            <p className="project-description">
              An AI-powered chatbot designed to assist users with healthcare-related queries, initial symptom checks, and general medical advice.
            </p>

            <div className="project-tech-stack">
              <span>Node.js</span><span>JavaScript</span><span>HTML/CSS</span><span>NLP</span>
            </div>

            <div className="project-grid-features compact-features">
              <div className="feature-block glass-panel">
                <h4><Layers size={18}/> Capabilities</h4>
                <p>Provides instant responses using NLP for symptom assessment and offers appointment booking assistance directly within the chat interface.</p>
              </div>
              <div className="feature-block glass-panel">
                <h4><Zap size={18}/> UI/UX</h4>
                <p>User-friendly, privacy-focused design that ensures a smooth and interactive conversation experience for medical inquiries.</p>
              </div>
            </div>

            <div className="project-actions">
              <a href="https://github.com/RajeshR005/healthcare-chatbot" target="_blank" rel="noopener noreferrer" className="btn btn-secondary"><GithubIcon size={18} /> Source</a>
            </div>
          </motion.div>

          <motion.div 
            className="project-hero-image"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="browser-header">
              <div className="browser-dots"><span></span><span></span><span></span></div>
              <div className="browser-url">medbot.local</div>
            </div>
            <img src={healthcareImg} alt="Healthcare Chatbot UI" />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
