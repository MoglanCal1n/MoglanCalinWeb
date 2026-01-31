import React from 'react';

const Contact = () => {
  const socialLinks = [
    { 
      platform: "LinkedIn", 
      username: "Moglan Calin", 
      link: "https://www.linkedin.com/in/calin-stefan-moglan-751694230/", 
      icon: "💼"
    },
    { 
      platform: "GitHub", 
      username: "MoglanCal1n", 
      link: "https://github.com/MoglanCal1n", 
      icon: "💻"
    },
    { 
      platform: "Hugging Face", 
      username: "calinMoglan", 
      link: "https://huggingface.co/calinMoglan", 
      icon: "🤗"
    },
    { 
      platform: "LeetCode", 
      username: "moglancalin", 
      link: "https://leetcode.com/u/moglancalin/", 
      icon: "🧠"
    },
    { 
      platform: "Instagram", 
      username: "@calinmoglan", 
      link: "https://instagram.com/calinmoglan", 
      icon: "📸"
    },
    { 
      platform: "Email", 
      username: "calin.moglan.dev@gmail.com",
      link: "mailto:calin.moglan.dev@gmail.com", 
      icon: "📧"
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
    marginBottom: '25px',
    borderBottom: '2px solid #0055EA',
    paddingBottom: '10px'
  };

  const gridStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  };

  const cardStyle = {
    backgroundColor: '#f9f9f9',
    border: '1px solid #dcdcdc',
    borderRadius: '3px',
    padding: '10px 15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '1px 1px 2px rgba(0,0,0,0.05)',
    transition: 'background-color 0.2s'
  };

  const infoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px'
  };

  const iconBoxStyle = {
    width: '32px',
    height: '32px',
    backgroundColor: '#e1e1e1',
    border: '1px solid #999',
    borderRadius: '3px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px'
  };

  const platformNameStyle = {
    fontWeight: 'bold',
    color: '#333',
    fontSize: '14px',
    display: 'block'
  };

  const usernameStyle = {
    fontSize: '11px',
    color: '#666'
  };

  const buttonStyle = {
    display: 'inline-block',
    padding: '5px 15px',
    backgroundColor: '#f0f0f0',
    background: 'linear-gradient(to bottom, #fff 0%, #e0e0e0 100%)',
    border: '1px solid #0055EA',
    borderRadius: '3px',
    color: '#0055EA',
    fontSize: '11px',
    fontWeight: 'bold',
    textDecoration: 'none',
    cursor: 'pointer',
    boxShadow: '1px 1px 2px rgba(0,0,0,0.1)',
    minWidth: '80px',
    textAlign: 'center'
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <div style={{ fontSize: '24px', marginRight: '10px' }}>📞</div>
        <div>
          <h2 style={{ margin: 0, fontSize: '18px', color: '#0055EA' }}>Contact Me</h2>
          <span style={{ fontSize: '11px', color: '#888' }}>
            Let's keep in touch
          </span>
        </div>
      </div>

      <div style={gridStyle}>
        {socialLinks.map((item, index) => (
          <div key={index} style={cardStyle}>
            <div style={infoStyle}>
              <div style={iconBoxStyle}>
                {item.icon}
              </div>
              <div>
                <span style={platformNameStyle}>{item.platform}</span>
                <span style={usernameStyle}>{item.username}</span>
              </div>
            </div>

            <a 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={buttonStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to bottom, #e0e0e0 0%, #fff 100%)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to bottom, #fff 0%, #e0e0e0 100%)';
              }}
            >
              Go to Link ➔
            </a>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '11px', color: '#888' }}>
        <p>Feel free to reach out anytime!</p>
      </div>
    </div>
  );
};

export default Contact;