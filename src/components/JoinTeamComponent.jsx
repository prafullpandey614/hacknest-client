/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const JoinTeamForum = (props) => {
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend or perform some action
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      title: '',
      content: ''
    });
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg">
      {/* <h2 className="text-xl font-semibold mb-4">Create a New Post</h2> */}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
            Enter Your Teams Unique Code
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="content"
            placeholder="ASVA898AE9W"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create Team
          </button>
        </div>
      </form>
    </div>
  );
};

export default JoinTeamForum;
