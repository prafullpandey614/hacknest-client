/* eslint-disable no-unused-vars */
import React,{useEffect,useState} from 'react'
import Navbar from '../components/Navbar'
import {useSelector} from 'react-redux'
import ParticipatedHackathon from '../components/HackathonItemsParticipated';
import axios from "axios"

const ParticipantDashboard = () => {
  const items = [{
    "name" : "item 1",
    "price" : "450",
    "description" : "thi sis is"
  },{
    "name" : "item 1",
    "price" : "450",
    "description" : "thi sis is"
  },{
    "name" : "item 1",
    "price" : "450",
    "description" : "thi sis is"
  }]
  const [myTeams, setMyTeams] = useState([])
  const fetchCurrentHackathon = async ()=>{
    try {
      // Retrieve access token from localStorage
      const accessToken = localStorage.getItem('accessToken');
  
      // Check if access token exists
      if (!accessToken) {
        throw new Error('Access token not found');
      }
  
      // Set headers with authorization token
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };
  
      // Make request to API with access token in headers
      const response = await axios.get('http://127.0.0.1:8000/my-teams/', { headers });
  
      // Process response
      console.log("MyTeams" ,response.data);
      setMyTeams(response.data)

    } catch (error) {
      // Handle errors
      console.error('Error fetching current hackathon:', error.message);
      throw error; // Propagate error for handling elsewhere if necessary
    }
  }

  const { userType, username, accessToken, email } = useSelector((state) => state.auth);

  useEffect(() => {
    fetchCurrentHackathon()
  }, [])
  

  return (
    <>
    <Navbar auth={true}/>
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Dashboard Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Total Hackathons</h2>
            <p className="text-gray-700">1000</p>
          </div>
          {/* Dashboard Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Total Teams</h2>
            <p className="text-gray-700">500</p>
          </div>
          {/* Dashboard Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">My Score</h2>
            <p className="text-gray-700">$10,000</p>
          </div>
          {/* Dashboard Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Recent Activity</h2>
            <ul className="text-gray-700">
              <li>New user registered</li>
              <li>Order #12345 placed</li>
              <li>Product added to cart</li>
            </ul>
          </div>
          <ParticipatedHackathon items={myTeams}/>

        </div>
      </div>
    </div>
    </>
  )
}

// const mapStateToProps = (state) => ({
//   email: email,
//   username : username
//   // 'profile_id': state.participantData.profile_id
// });

// Connect the component to Redux store
export default ParticipantDashboard;