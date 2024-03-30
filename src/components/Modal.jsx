import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="modal-container">
      <div className="modal-content bg-white w-180 h-80">
        <span className="close absolute top-0 right-0 p-2 cursor-pointer text-black" onClick={onClose}>&times;</span>
        {children}
      </div>
    </div>
  </div>
  );
};

export default Modal;
