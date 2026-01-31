import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: "Edge AI Crosswalk Detector",
      tech: "Liquid AI • Python • Edge Computing",
      description: "A highly optimized, lightweight AI model capable of detecting pedestrian crosswalks in real-time. It's designed to run efficiently even on mobile hardware.",
      link: "https://github.com/MoglanCal1n/scene-aware-assistant" 
    },
    {
      title: "Mobile Barrier Opener",
      tech: "IoT • Mobile App",
      description: "An automated system allowing users to control physical barriers using their smartphone. Secure, fast, and convenient.",
      link: "https://github.com/MoglanCal1n/Mobile-Barrier-Opener"
    },
    {
      title: "AI Hand Recognition",
      tech: "Computer Vision • Python",
      description: "Built an AI pipeline that recognizes the alphabet in sign language.",
      link: "https://github.com/MoglanCal1n/Hand-Tracking"
    },
    {
      title: "Ray-Tracing Simulator",
      tech: "C • SDL",
      description: "A proof of concept. Made to understand RayTracing better.",
      link: "https://github.com/MoglanCal1n/RayTracing-in-C"
    },
{
      title: "Youtube App",
      tech: "PHP • Laravel • MySQL • Blade",
      description: "A full-stack YouTube mock application designed to handle complex content management. It features a complete CRUD system for videos, allowing users to upload, edit, and manage their content. The app includes a multi-user environment with dedicated roles: an Admin panel for total platform oversight and a User interface for video interaction. I implemented a dynamic 'Like' system with a personalized library where users can save and revisit their favorite clips, all powered by a robust relational database.",
      link: "https://github.com/MoglanCal1n/MyTube"
    },
    {
      title: "Text Editor",
      tech: "Rust • Iced GUI",
      description: "A fast and memory-safe text editor built with Rust. Focuses on performance and a clean, minimalist user interface.",
      link: "https://github.com/MoglanCal1n/Rust-Text-Editor"
    },
    {
      title: "Speech to Text AI",
      tech: "Python • NLP",
      description: "An intelligent tool that converts spoken language into written text with high accuracy using modern AI libraries.",
      link: "https://github.com/MoglanCal1n/SpeechToText"
    },
    {
      title: "Spendings App",
      tech: "PHP • Web",
      description: "A personal finance tracker to monitor expenses and income, helping users manage their budget effectively.",
      link: "https://github.com/MoglanCal1n/hackathon-2025"
    }
  ];

  const containerStyle = {
    height: '100%',
    overflowY: 'auto',
    padding: '15px',
    boxSizing: 'border-box',
    backgroundColor: '#ffffe0', 
    fontFamily: 'Tahoma, sans-serif'
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    borderBottom: '2px solid #0055EA',
    paddingBottom: '10px'
  };

  const cardStyle = {
    backgroundColor: '#f9f9f9',
    border: '1px solid #dcdcdc',
    borderRadius: '3px',
    padding: '15px',
    marginBottom: '15px',
    boxShadow: '2px 2px 3px rgba(0,0,0,0.05)'
  };

  const titleStyle = {
    margin: '0 0 5px 0',
    color: '#333',
    fontSize: '16px',
    fontWeight: 'bold'
  };

  const techStyle = {
    fontSize: '11px',
    color: '#0055EA',
    fontWeight: 'bold',
    marginBottom: '8px',
    display: 'block',
    textTransform: 'uppercase'
  };

  const descStyle = {
    fontSize: '13px',
    lineHeight: '1.4',
    color: '#555',
    marginBottom: '15px'
  };

  const buttonStyle = {
    display: 'inline-block',
    padding: '5px 15px',
    backgroundColor: '#f0f0f0',
    background: 'linear-gradient(to bottom, #fff 0%, #e0e0e0 100%)',
    border: '1px solid #999',
    borderRadius: '3px',
    color: '#333',
    fontSize: '12px',
    textDecoration: 'none',
    cursor: 'pointer',
    boxShadow: '1px 1px 2px rgba(0,0,0,0.1)',
    fontFamily: 'Tahoma, sans-serif'
  };

  return (
    <div style={containerStyle}>
      
      <div style={headerStyle}>
        <div style={{ fontSize: '24px', marginRight: '10px' }}>📁</div>
        <div>
          <h2 style={{ margin: 0, fontSize: '18px', color: '#0055EA' }}>My Projects</h2>
          <span style={{ fontSize: '11px', color: '#888' }}>
            {projectList.length} projects selected
          </span>
        </div>
      </div>

      <div>
        {projectList.map((project, index) => (
          <div key={index} style={cardStyle}>
            <h3 style={titleStyle}>{project.title}</h3>
            <span style={techStyle}>{project.tech}</span>
            <p style={descStyle}>{project.description}</p>
            
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={buttonStyle}
              onMouseOver={(e) => e.currentTarget.style.background = 'linear-gradient(to bottom, #f0f0f0 0%, #d0d0d0 100%)'}
              onMouseOut={(e) => e.currentTarget.style.background = 'linear-gradient(to bottom, #fff 0%, #e0e0e0 100%)'}
            >
              View on GitHub ➔
            </a>
          </div>
        ))}
      </div>

      <div style={{ height: '20px', textAlign: 'center', color: '#aaa', fontSize: '11px' }}>
        End of list
      </div>

    </div>
  );
};

export default Projects;