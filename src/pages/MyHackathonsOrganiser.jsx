/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Stats from '../components/Stats';

const MyHackathonsOrganiser = () => {
  const [hackathons, setHackathons] = useState([]);
  const [showStats, setShowStats] = useState(false)
  const [hackathon, setHackathon] = useState()
  const [profile, setProfile] = useState()
  const [hackathonStats, setHackathonStats] = useState()
  const fetchData = async () => {
    try {
        const accessToken = localStorage.getItem('accessToken');
  
        // Check if access token exists
        if (!accessToken) {
          throw new Error('Access token not found');
        }
    
        // Set headers with authorization token
        const headers = {
          Authorization: `Bearer ${accessToken}`,
        };

      const response = await axios.get('http://127.0.0.1:8000/see-profile/',{headers});
      setProfile(response.data);
      const res =  await axios.get('http://127.0.0.1:8000/my-hosted-hackathons/',{headers});
      setHackathons(res.data);
      console.log("My Hackathons : " ,res.data)
    } catch (error) {
      console.error('Error fetching hackathons:', error);
    }
  };
  const handleStatsClick = (hackathon) =>{
      
    setHackathon(hackathon)
    setShowStats(true);
  }
  useEffect(() => {
   

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <>
      <Navbar />

        {showStats && <Stats hackathon={hackathon} />}
        {!showStats && <> <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-4">My Hackathons</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {hackathons.map((hackathon) => (
            <div key={hackathon.id} className="bg-white shadow-md rounded-md p-4">
              <h2 className="text-lg font-semibold">{hackathon.name}</h2>
              <p className="text-gray-600 mt-2">{hackathon.event_desc}</p>
              <button onClick={()=>handleStatsClick(hackathon)}  className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                  Data
              </button>
            </div>
          ))}
        </div>
      </div>
      <>

      </></>}
     
      

    </>
  );
};

export default MyHackathonsOrganiser;
