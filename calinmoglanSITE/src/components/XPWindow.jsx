// src/components/XPWindow.jsx
import React, { useRef } from 'react';
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

export default XPWindow;