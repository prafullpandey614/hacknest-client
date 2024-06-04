/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const StatsCard = ({ title, stat, icon,evaluate }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between">
      <div className="flex items-center">
        <div className="flex-shrink-0 mr-4">
          <svg className="h-8 w-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {icon}
          </svg>
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-800">{title}</p>
          <p className="text-gray-600">{stat}</p>
        </div>
       
        
      </div>
      {evaluate &&  <button className="bg-black text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Evaluate</button>}
     
    </div>
  );
};

export default StatsCard;
