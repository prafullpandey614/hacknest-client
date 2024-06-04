/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios"; // Import Axios

const MainDashBoardPage = () => {
  const [hackathons, setHackathons] = useState([]);
  const [teams, setTeams] = useState([]);
  const [showTeams, setShowTeams] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [selectedHackathon, setSelectedHackathon] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state
  const accessToken = localStorage.getItem("accessToken");
  const [evaluatedhackathon, setEvaluatedhackathon] = useState([]);

  useEffect(() => {
    // Fetch hackathons data from API
    const fetchHackathons = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };
        const response = await axios.get(
          "http://127.0.0.1:8000/my-hosted-hackathons/",
          config
        );
        if (!response.data) {
          throw new Error("Failed to fetch hackathons data");
        }
        console.log("Total Hackathons ", response.data);
        setHackathons(response.data); // Update hackathons state with fetched data
        setLoaded(true);
      } catch (error) {
        console.error("Error fetching hackathons:", error);
        // Handle error (e.g., display error message)
      }
    };

    fetchHackathons(); // Call the fetchHackathons function when component mounts
  }, [accessToken]); // Make sure to include accessToken in the dependency array

  const totalHackathons = hackathons.length;

  // Function to fetch teams for a specific hackathon
  const fetchTeamsForHackathon = async (hackathonId) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/participated-teams/${hackathonId}`
      );
      if (!response.data) {
        throw new Error("Failed to fetch teams data");
      }
      console.log("Teams for hackathon", response.data);
      setTeams(response.data); // Update teams state with fetched data
      setShowTeams(!showTeams);
    } catch (error) {
      console.error("Error fetching teams:", error);
      // Handle error (e.g., display error message)
    }
  };

  // Function to handle click on a hackathon
  const handleHackathonClick = (hackathonId) => {
    setSelectedHackathon(hackathonId);
    fetchTeamsForHackathon(hackathonId);
  };

  const fetchevalution = async (hackathonId) => {
    setLoading(true); // Set loading to true when the API call starts
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/evaluate-teams/${hackathonId}`
      );
      if (!response.data) {
        throw new Error("Failed to fetch evaluate-teams");
      }
      setEvaluatedhackathon(response.data);
      console.log("Evaluated hackathon", response.data);
    } catch (error) {
      console.error("Error fetching evaluate-team:", error);
      // Handle error (e.g., display error message)
    } finally {
      setLoading(false); // Set loading to false when the API call completes
    }
  };
  const addHackathons = async (hackathonId,hackathonName) => {
    setLoading(true);
    const result1 = await axios.post(`http://127.0.0.1:8000/add-org-to-codacy/${hackathonName}`)
    alert("Result1 ",result1.data)
    const result = await axios.post(`http://127.0.0.1:8000/add-teams/${hackathonId}`)
    if(result.status==200){
      alert("Passed")
       console.log("pass")
    }
    else{
      alert("Failed")
      console.log("Fail")
    }
    setLoading(false)
  }
  // Loader component.;p0umkrt1 q1    qcr gyuj8ulpok/-;/ 

  const Loader = () => (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
    </div>
  );

  return (
    <>
      {loading && <Loader />} {/* Show loader when loading is true */}
      {!loaded && <div>Loading...</div>}
      <div className="bg-gray-900">
        <Navbar />
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-8">Dashboard</h1>

          {/* Total number of hackathons */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-semibold mb-2">
              Total Hackathons Organized:
            </h2>
            <p className="text-gray-700">{totalHackathons}</p>
          </div>

          {/* Open a specific hackathon */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-2">
              Open a Hackathon:
            </h2>
            {hackathons.map((hackathon) => (
              <div
                key={hackathon.id}
                className={`bg-white p-6 rounded-lg shadow-md mb-4 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 ${
                  selectedHackathon === hackathon.id && "bg-blue-200"
                }`}
              >
                <h3 className="text-lg font-semibold text-blue-500">
                  {hackathon.name}
                </h3>
                <button
                  onClick={() => handleHackathonClick(hackathon.id)}
                  className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Show Teams
                </button>
                <button
                  onClick={() => addHackathons(hackathon.id,hackathon.name)}
                  className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none mx-2 focus:shadow-outline"
                >
                  Stag Teams
                </button>
                <button
                  onClick={() => fetchevalution(hackathon.id)}
                  className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none mx-2 focus:shadow-outline"
                >
                  Evaluation round 1
                </button>
                <button
                  onClick={() => fetchevalution(hackathon.id)}
                  className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none mx-2 focus:shadow-outline"
                >
                  Evaluation round 2
                </button>
                <button
                  onClick={() => fetchevalution(hackathon.id)}
                  className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none mx-2 focus:shadow-outline"
                >
                  Evaluation round 3
                </button>
              </div>
            ))}
          </div>

          {/* Display teams for selected hackathon */}
          {showTeams && teams.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-2">
                Teams for Selected Hackathon:
              </h2>
              {teams.map((team) => (
                <div
                  key={team.id}
                  className="bg-white p-6 rounded-lg shadow-md mb-4"
                >
                  <h3 className="text-lg font-semibold">
                    {team.participant_team.name}
                  </h3>
                  {/* Add more team details if needed */}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MainDashBoardPage;
