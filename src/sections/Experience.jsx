import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Sigvitas',
    location: 'Bengaluru',
    period: 'Aug 2025 – Present',
    description: [
      'Engineered scalable backend services for enterprise applications using Python and FastAPI, significantly improving API response times through optimized business logic.',
      'Designed and executed robust Python data pipelines to parse, transform, and load over 20 years of USPTO XML patent records into a normalized MySQL architecture.',
      'Implemented highly performant SQL queries within a clean architecture framework to ensure data integrity and rapid retrieval for downstream applications.'
    ]
  },
  {
    role: 'Python Development Intern',
    company: 'Maestro Technologies',
    location: 'Coimbatore',
    period: 'Mar 2025 – July 2025',
    description: [
      'Developed and deployed backend modules utilizing Python, FastAPI, and SQLAlchemy ORM for real-world production environments.',
      'Built tested, RESTful APIs strictly adhering to industry best practices and OpenAPI standards.',
      'Collaborated closely with cross-functional teams to resolve technical debt and implement complex database operations in MySQL.'
    ]
  }
];

const Experience = () => {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Professional Journey
        </motion.h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="timeline-marker">
                <div className="marker-icon"><Briefcase size={16} /></div>
                <div className="marker-line"></div>
              </div>
              <div className="timeline-content glass-panel">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <h4 className="timeline-company">{exp.company} <span className="text-muted">| {exp.location}</span></h4>
                  </div>
                  <div className="timeline-date">
                    <Calendar size={14} /> {exp.period}
                  </div>
                </div>
                <ul className="timeline-details">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
