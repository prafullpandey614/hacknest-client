/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React,{useEffect,useState} from 'react';
import axios from 'axios'

const ParticipatedHackathon = ({ items }) => {

  const [details, setDetails] = useState([]);
  const [dj, setDj] = useState(false)
  useEffect(() => {
    const fetchDetails = async () => {
      const detailsPromises = items.map(async (item) => {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/get-team-details/${item.id}`); // Assuming item.id is used to construct the API endpoint
          return response.data;
        } catch (error) {
          console.error('Error fetching details:', error);
          return null;
        }
      });

      const resolvedDetails = await Promise.all(detailsPromises);
      setDetails(resolvedDetails);
    };

    fetchDetails();
  }, [items]); 

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Participated Hackathons</h2>
      <div className="grid gap-4">
        {details.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-md p-4">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600 mt-2">{item.hackathon}</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-gray-500">asdfgh</span>
              <button className="text-blue-500 hover:text-blue-700">{item.team_code}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParticipatedHackathon;
