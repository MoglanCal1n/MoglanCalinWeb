import React from 'react';

import calinPic from '../assets/calin.jpeg'; 
import deskPic from '../assets/desk.jpeg';
import catPic1 from '../assets/calinChisica2.jpeg';
import catPic2 from '../assets/steve.jpeg';
import volunteeringPic from '../assets/saveTheChildrenHeart.jpg';
import concertPic from '../assets/concert.jpeg';
import friendsPic from '../assets/calinPlusFrens.jpeg';

const About = () => {
  const photoPlaceholderStyle = {
    width: '100%',
    height: '180px', 
    backgroundColor: '#e1e1e1',
    border: '2px inset #fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#666',
    fontStyle: 'italic',
    marginBottom: '5px',
    overflow: 'hidden',
    boxSizing: 'border-box' 
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover', 
    display: 'block'
  };

  const captionStyle = {
    textAlign: 'center', fontSize: '11px', color: '#666', 
    marginTop: '0px', marginBottom: '20px'
  };

  const sectionTitleStyle = {
    color: '#0055EA', borderBottom: '1px solid #ccc', paddingBottom: '2px',
    marginTop: '25px', marginBottom: '10px', fontSize: '14px', fontWeight: 'bold'
  };

  return (
    <div style={{ 
      height: '100%', overflowY: 'auto', padding: '20px', 
      boxSizing: 'border-box', backgroundColor: '#ffffe0', 
      fontFamily: 'Tahoma, sans-serif',
      overflowX: 'hidden'
    }}>
      
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ 
            width: '64px', height: '64px', minWidth: '64px', 
            border: '2px solid #808080', marginRight: '15px',
            backgroundColor: '#f5f5f5', boxShadow: '2px 2px 5px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
            <img 
                src={calinPic} 
                alt="Calin Avatar"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
        </div>
        <div>
          <h2 style={{ margin: 0, fontSize: '18px', color: '#333' }}>Calin</h2>
          <p style={{ margin: '5px 0 0', color: '#666', fontSize: '12px' }}>
            CS Student & Developer @ UBB
          </p>
        </div>
      </div>

      <h4 style={{ ...sectionTitleStyle, marginTop: 0 }}>Who am I?</h4>
      <p style={{ lineHeight: '1.5', marginBottom: '15px' }}>
        I am a well-rounded individual with strong problem-solving abilities in computer science. 
        I approach every opportunity with enthusiasm and a results-driven mindset.
      </p>

      <div style={photoPlaceholderStyle}>
          <img src={deskPic} alt="My Desk Setup" style={imageStyle} />
      </div>
      <p style={captionStyle}>My workspace setup</p>

      <p style={{ lineHeight: '1.5' }}>
        Currently, I am pursuing a <strong>Computer Science degree at Babeș-Bolyai University</strong>.
      </p>
      
      <div style={{ background: '#fff', padding: '10px', border: '1px dotted #ccc', margin: '15px 0' }}>
        <strong>Technical Interests:</strong>
        <ul style={{ margin: '5px 0 0 20px', padding: 0 }}>
          <li>Machine Learning & AI</li>
          <li>Cybersecurity</li>
          <li>Web & App Development</li>
        </ul>
      </div>

      <h4 style={sectionTitleStyle}>Passions: Music</h4>
      <p style={{ lineHeight: '1.5', marginBottom: '15px' }}>
        Music is a huge part of my life. I play the guitar and love getting lost in the rhythm. 
      </p>
      <div style={photoPlaceholderStyle}>
        <img src={concertPic} alt="Concert Vibes" style={imageStyle} />
      </div>
      <p style={captionStyle}>Alternosfera concert</p>

      <h4 style={sectionTitleStyle}>Social Life</h4>
      <p style={{ lineHeight: '1.5', marginBottom: '15px' }}>
        I'm an extrovert who loves spending quality time with friends.
      </p>
      <div style={photoPlaceholderStyle}>
         <img src={friendsPic} alt="With Friends" style={imageStyle} />
      </div>
      <p style={captionStyle}>Lovely photo with lovely people</p>

      <h4 style={sectionTitleStyle}>Animal Lover</h4>
      <p style={{ lineHeight: '1.5', marginBottom: '15px' }}>
        I have a soft spot for animals, especially cats!
      </p>
      
      <div style={{ display: 'flex', gap: '10px', marginBottom: '5px' }}>
        <div style={{ ...photoPlaceholderStyle, height: '140px', flex: 1 }}>
          <img src={catPic1} alt="Cat 1" style={imageStyle} />
        </div>
        <div style={{ ...photoPlaceholderStyle, height: '140px', flex: 1 }}>
           <img src={catPic2} alt="Cat 2" style={imageStyle} />
        </div>
      </div>
      <p style={captionStyle}>My furry friends</p>

      <h4 style={sectionTitleStyle}>Community & Impact</h4>
      <div style={photoPlaceholderStyle}>
        <img src={volunteeringPic} alt="Volunteering" style={imageStyle} />
      </div>
      <p style={captionStyle}>Save the children</p>

      <div style={{ 
        backgroundColor: '#fff', border: '1px solid #e0e0a0', padding: '15px', 
        marginTop: '25px', boxShadow: '2px 2px 4px rgba(0,0,0,0.1)'
      }}>
        <strong style={{ color: '#d35400', display: 'block', marginBottom: '5px' }}>📌 The Human Side</strong>
        <p style={{ margin: 0, fontSize: '13px', lineHeight: '1.4' }}>
          I am a true <strong>"people person"</strong>. Good software is built by good teams!
        </p>
      </div>

      <div style={{ height: '20px' }}></div>
    </div>
  );
};

export default About;