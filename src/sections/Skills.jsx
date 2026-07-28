import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillCategories = [
  {
    title: "Backend & Architecture",
    skills: ["Python", "FastAPI", "RESTful APIs", "SQLAlchemy", "Alembic", "Pydantic", "JWT Auth", "Clean Architecture"]
  },
  {
    title: "Agentic AI & LLMs",
    skills: ["Generative AI", "LangGraph", "LangChain", "RAG", "Prompt Engineering", "Tool Calling"]
  },
  {
    title: "Database & Infrastructure",
    skills: ["MySQL", "Relational Databases", "Linux (Ubuntu)", "Git", "GitHub"]
  },
  {
    title: "Frontend & Tools",
    skills: ["HTML", "CSS", "JavaScript", "React", "Figma", "Power BI"]
  }
];

const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technical Arsenal
        </motion.h2>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="skill-category glass-panel"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
