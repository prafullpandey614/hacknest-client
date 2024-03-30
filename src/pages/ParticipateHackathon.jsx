import React from 'react';
import Navbar from '../components/Navbar';

const ParticipationFormComponent = () => {
    
  return (
      <>
      <Navbar/>
    <div className="bg-black p-4 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Participate</h2>
        <div className="grid grid-cols-2 gap-4">
            <label htmlFor="">Team Name</label>
          <input
            type="text"
            placeholder="Name of The Event"
            className="border border-gray-300 rounded-md py-2 px-4"
          />
            <label htmlFor="">Institution Name : </label>
          
          <input
            type="text"
            placeholder="Add Details Regarding your event.."
            className="border border-gray-300 rounded-md py-2 px-4"
          />
            <label htmlFor="">Qualification</label>

          <input
            type="text"
            placeholder="Graduates, School Students, Experienced..."
            className="border border-gray-300 rounded-md py-2 px-4"
          />
           
        </div>
        {/* Submit Button */}
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Submit
        </button>
      </div>
    </div>
    </>
  );
};

export default ParticipationFormComponent;
