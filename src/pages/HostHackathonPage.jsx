import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FormComponent = () => {
    
  return (
      <>
      <Navbar/>
    <div className="bg-black p-4 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Host a Hackathon</h2>
        <div className="grid grid-cols-2 gap-4">
            <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Name of The Event"
            className="border border-gray-300 rounded-md py-2 px-4"
          />
            <label htmlFor="">Description</label>
          
          <input
            type="text"
            placeholder="Add Details Regarding your event.."
            className="border border-gray-300 rounded-md py-2 px-4"
          />
            <label htmlFor="">Who Can Attend</label>

          <input
            type="text"
            placeholder="Graduates, School Students, Experienced..."
            className="border border-gray-300 rounded-md py-2 px-4"
          />
            <label htmlFor="">Duration</label>

          
          <input
            type="text"
            placeholder="24 Hrs, 48 Hrs  "
            className="border border-gray-300 rounded-md py-2 px-4"
          />
            <label htmlFor="">Opening Ceremony</label>
          
            <input
            type="datetime-local"
            placeholder="Date Time"
            className="border border-gray-300 rounded-md py-2 px-4 col-span-2"
          />
            <label htmlFor="">Start Date</label>
          
            <input
            type="datetime-local"
            placeholder="Date Time"
            className="border border-gray-300 rounded-md py-2 px-4 col-span-2"
          />
            <label htmlFor="">Round 1 Evaluation</label>

            <input
            type="datetime-local"
            placeholder="Date Time"
            className="border border-gray-300 rounded-md py-2 px-4 col-span-2"
          />
            <label htmlFor="">Round 3 Evaluation</label>
          
            <input
            type="datetime-local"
            placeholder="Date Time"
            className="border border-gray-300 rounded-md py-2 px-4 col-span-2"
          />
            <label htmlFor="">Winners Announcement </label>
          
          <input
            type="datetime-local"
            placeholder="Date Time"
            className="border border-gray-300 rounded-md py-2 px-4 col-span-2"
          />
            <label htmlFor="">Rewards </label>
          
            <input
            type="text"
            placeholder="Input 2"
            className="border border-gray-300 rounded-md py-2 px-4"
          />
          <label htmlFor="">Poster </label>
          
          <input
          type="file"
          placeholder="Input 2"
          className="border border-gray-300 rounded-md py-2 px-4"
        />
        </div>
        {/* Submit Button */}
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Submit
        </button>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default FormComponent;
