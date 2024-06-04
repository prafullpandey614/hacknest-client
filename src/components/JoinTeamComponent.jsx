/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
const JoinTeamForum = (props) => {
  const [formData, setFormData] = useState({
    team_code : ''
  });
  const [teamDetails, setTeamDetails] = useState()
  const accessToken = localStorage.getItem("accessToken");
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    // Handle form submission, e.g., send data to backend or perform some action
    console.log('Form submitted:', formData);


    try {
      // Make a POST request to your API
      const response = await axios.get(`http://127.0.0.1:8000/get-team/${formData.team_code}`,);

      // Handle the response as needed see-profile/
      const response2 = await axios.get(`http://127.0.0.1:8000/see-profile/`,{
        headers: {
          'Authorization': `Bearer ${accessToken}` // Include your auth token here
        }
      });
      console.log('Response:', response.data);
      setTeamDetails(response.data)
      const data = {
        "team" : response.data.id,
        "member" : response2.data.id,
        "type" : "member"
      }
      const response1 = await axios.get(`http://127.0.0.1:8000/get-team/${response.data.id}`,);

      // Reset form after successful submission
      setFormData({
        team_code: ''        
      });

    } catch (error) {
      console.error('Error:', error);
      // Handle error (e.g., display error message)
    }

    // Reset form after submission
    setFormData({
      team_code  : ''
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
            id="team_code"
            placeholder="ASVA898AE9W"
            name="team_code"
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
            Join Team
          </button>
        </div>
      </form>
    </div>
  );
};

export default JoinTeamForum;
