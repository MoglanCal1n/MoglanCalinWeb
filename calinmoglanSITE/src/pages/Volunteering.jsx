import React from 'react';

import saveTheChildrenPic from '../assets/saveTheChildrenHeart.jpg';
import untoldPic from '../assets/untold.jpeg';
import csePic from '../assets/spiruCSE.jpeg';
import debatePic from '../assets/debate.jpeg';
import hermesPic from '../assets/hermes.jpeg';
import tedXPic from '../assets/tedX.jpeg';

const Volunteering = () => {
  const volunteerList = [
    {
      title: "Salvați Copiii",
      role: "Active Volunteer • Project Coordinator",
      description: "I served as a Project Coordinator for the 'Human Trafficking Prevention' initiative, where I led and trained a team of over 20 people. As a volunteer, I participated in marathons, presented organizational projects to local schools, and worked on the front lines distributing essential supplies to vulnerable individuals.",
      image: saveTheChildrenPic
    },
    {
      title: "Societatea Hermes",
      role: "Member • Vice President of Events department",
      description: "As Vice-President of the Events Department, I coordinated the organization of projects for the Faculty of Mathematics and Computer Science community in Cluj-Napoca, including the organization of the Freshmen's Ball.",
      image: hermesPic
    },
    {
      title: "Consiliul Elevilor Spiru Haret",
      role: "President of the Student Council • Student Representative",
      description: "Represented the student body and organized cultural and educational activities within the high school. This experience helped me develop essential leadership, negotiation, and public speaking skills early on.",
      image: csePic
    },
    {
      title: "Retorica Debate Club",
      role: "Debater • Team Member",
      description: "Honed critical thinking and argumentation skills through competitive debating. Engaged in structured discourse on various social and political topics, representing the high school in national competitions.",
      image: debatePic
    },
    {
      title: "TEDx",
      role: "Logistics Volunteer",
      description: "Assisted in the organization of TEDx events, handling logistics and ensuring a smooth experience for speakers and attendees. Contributed to promoting 'ideas worth spreading' in the local community.",
      image: tedXPic
    },
    {
      title: "Untold Festival",
      role: "Steward",
      description: "Part of the on-site operations team for one of Europe's largest music festivals. Managed crowd flow, access points, and provided support in a fast-paced, high-energy environment.",
      image: untoldPic
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
    marginBottom: '20px',
    boxShadow: '2px 2px 3px rgba(0,0,0,0.05)'
  };

  const titleStyle = {
    margin: '0 0 5px 0',
    color: '#333',
    fontSize: '16px',
    fontWeight: 'bold'
  };

  const roleStyle = {
    fontSize: '11px',
    color: '#0055EA',
    fontWeight: 'bold',
    marginBottom: '10px',
    display: 'block',
    textTransform: 'uppercase'
  };

  const descStyle = {
    fontSize: '13px',
    lineHeight: '1.4',
    color: '#555',
    marginBottom: '15px'
  };

  const photoContainerStyle = {
    width: '100%',
    height: '200px',
    backgroundColor: '#e1e1e1',
    border: '2px inset #fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    boxSizing: 'border-box'
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block'
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <div style={{ fontSize: '24px', marginRight: '10px' }}>🤝</div>
        <div>
          <h2 style={{ margin: 0, fontSize: '18px', color: '#0055EA' }}>Volunteering</h2>
          <span style={{ fontSize: '11px', color: '#888' }}>
            Making an impact
          </span>
        </div>
      </div>

      <div>
        {volunteerList.map((item, index) => (
          <div key={index} style={cardStyle}>
            <h3 style={titleStyle}>{item.title}</h3>
            <span style={roleStyle}>{item.role}</span>
            <p style={descStyle}>{item.description}</p>
            <div style={photoContainerStyle}>
              <img 
                src={item.image} 
                alt={item.title} 
                style={imageStyle} 
              />
            </div>
          </div>
        ))}
      </div>

      <div style={{ height: '20px', textAlign: 'center', color: '#aaa', fontSize: '11px' }}>
        End of list
      </div>
    </div>
  );
};

export default Volunteering;