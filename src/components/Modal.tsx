import React, { CSSProperties } from 'react';

const BACKGROUND_STYLE: CSSProperties = {
  position: 'fixed',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  backgroundColor: 'rgb(0,0,0, 0.98)',
  zIndex: 1000,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const CLOSE_BUTTON_STYLE: CSSProperties = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  background: 'none',
  border: 'none',
  color: '#fff',
  fontSize: '24px',
  cursor: 'pointer'
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div style={BACKGROUND_STYLE} onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>
        <button style={CLOSE_BUTTON_STYLE} onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
