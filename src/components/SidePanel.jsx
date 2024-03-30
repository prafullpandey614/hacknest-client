import React from 'react';

const SidePanel = ({ isOpen, onClose, children }) => {
  const panelClasses = isOpen ? 'translate-x-0' : '-translate-x-full';

  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white text-black shadow-lg transform ${panelClasses} transition-transform ease-in-out duration-300`}>
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-semibold">Dashboard</h2>
        
        <button onClick={onClose} className="text-gray-600 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
};

export default SidePanel;
