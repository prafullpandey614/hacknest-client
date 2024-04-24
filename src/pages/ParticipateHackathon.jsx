/* eslint-disable no-unused-vars */
import React,{useState } from "react";
import { useLocation } from 'react-router-dom';
import Navbar from "../components/Navbar";
import TeamCreationForum from "../components/TeamCreationForm";
import JoinTeamForum from "../components/JoinTeamComponent";

const ParticipationFormComponent = () => {
  const [showTeamCreation, setShowTeamCreation] = useState(false)
  const [showJoinTeam, setShowJoinTeam] = useState(false)
  const location = useLocation();
// const {hackathon_id} = location.state
  const handleTeamCreation = ()=> {
    setShowTeamCreation(true)
    setShowJoinTeam(false)
  }
  const handleJoinTeam = ()=>{
    setShowTeamCreation(false)
    setShowJoinTeam(true)
  }
  return (
    <>
      <Navbar />
      <div className="bg-black p-4 min-h-screen flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Participate</h2>
          <div className="grid grid-cols-2 gap-4">
     
            <button onClick={handleJoinTeam} className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Join a Team
            </button>
            <button onClick={handleTeamCreation} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Create a Team
            </button>

          </div>

        { showTeamCreation && <TeamCreationForum/>}
        { showJoinTeam && <JoinTeamForum hackathon_id={ "hackathon_id"}/>}

        </div>
      </div>
    </>
  );
};

export default ParticipationFormComponent;
