/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import RegistrationForumofHackathon from './ParticipationForum';
import { useRevalidator } from 'react-router-dom';

const TeamCreationForum = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    hackathon : '4'
  });
  const [profileDetails, setProfileDetails] = useState()
  const [teamCode, setTeamCode] = useState("")
  const [teamId, setTeamId] = useState("")
  const [success, setSuccess] = useState(false)
  const [showforum, setShowforum] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const joinTeam = async ()=>{
    const data = {
      "team" : teamId,
      "member" : profileDetails.id,
      "type" : "Leader"
    }
    console.log(data)
    const result = await axios.post('http://127.0.0.1:8000/join-team/',data)
    console.log("This is the Main Game",result.data)
  }

  const fetchProfile = async ()=>{
    const accessToken = localStorage.getItem('accessToken');
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    const result = await axios.get('http://127.0.0.1:8000/my-profile/', {headers});
    console.log("Profile Details", result.data)

    setProfileDetails(result.data)
   
  }
  const handleMoveAhead = async ()=>{
    const data = {
        "participant_team" : teamId,
        "hackathon" : 1

    }

    try {
      // Send form data to backend
      const response = await axios.post('http://127.0.0.1:8000/participate-hackathon/', data);
      console.log(response.data)
      
    } catch (error) {
      
      console.error('Error:', error);
    }
    setShowforum(true)
    joinTeam()
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchProfile()

    console.log("profo")
    console.log(profileDetails)
    // Handle form submission, e.g., send data to backend or perform some action
    console.log('Form submitted:', formData);
    try {
     
      // Send form data to backend
      const response = await axios.post('http://127.0.0.1:8000/create-team/', formData);
  
      console.log('Response:', response.data.team_code);
      setTeamCode(response.data.team_code)
      setTeamId(response.data.id)
      setSuccess(true)
      setFormData({
        title: '',

      });
      // add membership
      // const  data = {
      //   "team" : teamId,
      //   "member" : userID,
      //   "type" : "Leader"

      // }

    } catch (error) {
      
      console.error('Error:', error);
    }
    
  };

  
  return  (
     
    <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg">

      {success && !showforum && <> <div> <h1>  <b> Share This Id With Your Team to Join  </b> </h1> <br /> 
      
      
       </div> {teamCode} <br />
       <button onClick={handleMoveAhead} className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
             Register
            </button>
        </>}
      {showforum && <> SuccessFully Registered ! <>{profileDetails.id}</> </>}

      {! success && !showforum && <><form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          
          
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Enter Team Name"
            name="name"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
            Team Unique Code 
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="content"
            placeholder="It Will be  auto generated"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            readOnly
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
      </form> </>}
      
    </div>
  );
};

export default TeamCreationForum;
