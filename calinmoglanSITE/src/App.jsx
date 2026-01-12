import React, { useState, useRef, useEffect } from 'react';
import './index.css'; 
import Draggable from 'react-draggable';

const XPWindow = ({ 
  title, 
  isOpen, 
  isMinimized, 
  isMaximized, 
  onClose, 
  onMinimize, 
  onMaximize, 
  zIndex, 
  onFocus, 
  isActive, 
  children, 
  style,
  defaultPosition, 
  onDrag
}) => {
  const nodeRef = useRef(null);

  if (!isOpen) return null;

  return (
    <Draggable 
      handle=".title-bar" 
      onMouseDown={onFocus} 
      nodeRef={nodeRef}
      disabled={isMaximized}
      bounds="parent" 
      defaultPosition={defaultPosition}
      onDrag={onDrag}
      position={isMaximized ? { x: 0, y: 0 } : undefined}
    >
      <div
        ref={nodeRef}
        className={`window ${isActive ? '' : 'inactive'} ${isMaximized ? 'maximized' : ''}`}
        style={{
          display: isMinimized ? 'none' : 'flex',
          width: '350px',
          zIndex: zIndex,
          ...style
        }}
      >
        <div className={isActive ? "title-bar" : "title-bar inactive"}>
          <div className='title-bar-text'>{title}</div>
          <div className='title-bar-controls'>
            <button aria-label="Minimize" onClick={(e) => { e.stopPropagation(); onMinimize(); }}></button>
            <button aria-label="Maximize" onClick={(e) => { e.stopPropagation(); onMaximize(); }}></button>
            <button aria-label="Close" onClick={(e) => { e.stopPropagation(); onClose(); }}></button>
          </div>
        </div>
        <div className="window-body">
          {children}
        </div>
      </div>
    </Draggable>
  );
};

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
    if (key === 'launcher') {
      return { x: initialLauncherX, y: initialLauncherY };
    }
    return { 
      x: launcherPos.x + 50, 
      y: launcherPos.y - 50 
    };
  };

  return (
    <div className="desktop">
      {Object.keys(windows).map(key => {
        let content = null;
        if (key === 'launcher') {
           content = (
             <>
               <p style={{ textAlign: 'center' }}>Find out more about me!</p>
               <div className="launcher-menu">
                 <button onClick={() => openFromMenu('about')}>About</button>
                 <button onClick={() => openFromMenu('projects')}>Projects</button>
                 <button onClick={() => openFromMenu('volunteering')}>Volunteering</button>
                 <button onClick={() => openFromMenu('eyes')}>Eyes and Ears</button>
                 <button onClick={() => openFromMenu('contact')}>Contact</button>
               </div>
               <div className="status-bar"><p className='status-bar-field'>Status: Ready</p></div>
             </>
           );
        } else if (key === 'about') content = <p>ME ME ME ONLY ME ABOUT ME</p>;
        else if (key === 'projects') content = <p>Here are my projects...</p>;
        else if (key === 'volunteering') content = <p>Volunteering work...</p>;
        else if (key === 'eyes') content = <p>Music and movies...</p>;
        else if (key === 'contact') content = <p>Email me here...</p>;

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
            style={key === 'launcher' ? { width: '300px' } : {}}
            
            defaultPosition={getWindowPosition(key)}
            
            onDrag={key === 'launcher' ? (e, data) => setLauncherPos({ x: data.x, y: data.y }) : undefined}
          >
            {content}
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