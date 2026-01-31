import React, { useState } from 'react';
import './index.css'; 
import XPWindow from './components/XPWindow'; 

import Launcher from './pages/Launcher';
import About from './pages/About';
import Projects from './pages/Projects';
import Volunteering from './pages/Volunteering';
import Media from './pages/Media';
import Contact from './pages/Contact';

function App() {
  const initialLauncherX = window.innerWidth / 2 - 150; 
  const initialLauncherY = window.innerHeight / 2 - 200; 

  const [launcherPos, setLauncherPos] = useState({ x: initialLauncherX, y: initialLauncherY });

  const [windows, setWindows] = useState({
    launcher: true,
    about: false,
    projects: false,
    volunteering: false,
    eyes: false,
    contact: false
  });

  const [minimized, setMinimized] = useState({});
  const [maximized, setMaximized] = useState({});

  const [topIndex, setTopIndex] = useState(100);
  const [activeIndices, setActiveIndices] = useState({
    launcher: 100, about: 100, projects: 100, volunteering: 100, eyes: 100, contact: 100
  });

  const bringToFront = (key) => {
    const newIndex = topIndex + 1;
    setTopIndex(newIndex);
    setActiveIndices({ ...activeIndices, [key]: newIndex });
  };

  const closeWindow = (key) => {
    setWindows({ ...windows, [key]: false });
    setMinimized({ ...minimized, [key]: false });
    setMaximized({ ...maximized, [key]: false });
  };

  const toggleMinimize = (key) => {
    setMinimized({ ...minimized, [key]: !minimized[key] });
    if (minimized[key]) bringToFront(key);
  };

  const toggleMaximize = (key) => {
    setMaximized({ ...maximized, [key]: !maximized[key] });
    bringToFront(key);
  };

  const openFromMenu = (key) => {
    setWindows({ ...windows, [key]: true });
    setMinimized({ ...minimized, [key]: false });
    bringToFront(key);
  };

  const handleTaskbarClick = (key) => {
    if (!windows[key]) {
      setWindows({ ...windows, [key]: true });
      setMinimized({ ...minimized, [key]: false });
      bringToFront(key);
    } else if (minimized[key]) {
      setMinimized({ ...minimized, [key]: false });
      bringToFront(key);
    } else if (activeIndices[key] === topIndex) {
      setMinimized({ ...minimized, [key]: true });
    } else {
      bringToFront(key);
    }
  };

  const getTitle = (key) => {
    switch(key) {
      case 'launcher': return 'Calin.exe';
      case 'about': return 'AboutCalin.exe';
      case 'projects': return 'CalinProjects.exe';
      case 'volunteering': return 'Volunteering.exe';
      case 'eyes': return 'Media.exe';
      case 'contact': return 'Contact.exe';
      default: return key;
    }
  };

  const getWindowPosition = (key) => {
    if (key === 'launcher') return { x: initialLauncherX, y: initialLauncherY };
    return { x: launcherPos.x + 50, y: launcherPos.y - 50 };
  };

  const renderWindowContent = (key) => {
    switch(key) {
      case 'launcher': 
        return <Launcher onOpen={openFromMenu} />;
      case 'about': 
        return <About />;
      case 'projects': 
        return <Projects />;
      case 'volunteering':
        return <Volunteering />;
      case 'eyes':
        return <Media />;
      case 'contact':
        return <Contact />;
      default: 
        return null;
    }
  };

  return (
    <div className="desktop">
      {Object.keys(windows).map(key => {
        return (
          <XPWindow
            key={key}
            title={getTitle(key)}
            isOpen={windows[key]}
            isMinimized={minimized[key]}
            isMaximized={maximized[key]}
            onClose={() => closeWindow(key)}
            onMinimize={() => toggleMinimize(key)}
            onMaximize={() => toggleMaximize(key)}
            zIndex={activeIndices[key]}
            isActive={activeIndices[key] === topIndex}
            onFocus={() => bringToFront(key)}
            

            style={{ 
              width: key === 'launcher' ? '300px' : '400px', 
              height: key === 'launcher' ? 'auto' : '450px' 
            }}
            
            defaultPosition={getWindowPosition(key)}
            onDrag={key === 'launcher' ? (e, data) => setLauncherPos({ x: data.x, y: data.y }) : undefined}
          >
            {renderWindowContent(key)}
          </XPWindow>
        );
      })}

      <div className="taskbar">
        <div className="start-button" onClick={() => handleTaskbarClick('launcher')}>
          <span style={{ fontSize: '1.2em' }}>❖</span> Start
        </div>
        <div style={{ width: '2px', height: '20px', background: 'rgba(0,0,0,0.2)', margin: '0 5px' }}></div>
        {Object.keys(windows).map((key) => {
          if (!windows[key] || key === 'launcher') return null;
          const isTaskbarActive = !minimized[key] && activeIndices[key] === topIndex;
          return (
            <div 
              key={key} 
              className={`taskbar-item ${isTaskbarActive ? 'active' : ''}`}
              onClick={() => handleTaskbarClick(key)}
            >
              {getTitle(key)}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;