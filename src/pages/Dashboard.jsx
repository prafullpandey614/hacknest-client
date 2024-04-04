import { React, useState , useEffect} from "react";
import Modal from "../components/Modal";
// import Navbar from "../components/Navbar";
import axios from "axios";
import SidePanel from "../components/SidePanel";
import Navbar from "../components/Navbar";
import {Link} from 'react-router-dom'
import Footer from "../components/Footer";

const Dashboard = () => {
  const [organiser, setOrganiser] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [profileData, setProfileData] = useState()
  const [showDashboard, setShowDashboard] = useState(true);
  const [firmName, setFirmName] = useState("");

  const accessToken = localStorage.getItem("accessToken");
  const [isPanelOpen, setIsPanelOpen] = useState(true);

  const togglePanel = () => {
      console.log("Entered in the Toggle panel")
    setIsPanelOpen(!isPanelOpen);
  };

  const onChangeFirmsDetails = (e) => {
    setFirmName(e.target.value);
  };

  const handleSubmitBtn = async () => {
    const data = {
      name: firmName,
    };
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    try {
      const result = await axios.post(
        "http://127.0.0.1:8000/add-organisation/",
        data,
        config
      );
      console.log(result.data);
      setFirmName(result.data.name)
      localStorage.setItem('firmName',firmName)
    } catch (error) {
      console.error(error);
    }
    setShowModal(false);
    setShowDashboard(true);
  };
  const handleSkipButton = () => {
    setShowModal(false);
    setShowDashboard(true);
  };
  const fetchAccountDetails = async () => {
    
    const url = "http://127.0.0.1:8000/see-profile/" ;

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      }
    };
    console.log("Bearer ${acessToken}")
      let result = await axios.get(url,config);
      console.log(result.status)
      setProfileData(result.data);
      console.log("Profile Data")
      console.log(profileData)
  }
  useEffect( ()=>{
    fetchAccountDetails();
  },[])

  return (
    <>
      <Navbar menu={togglePanel} hasPanel={true}/>

      <Modal isOpen={showModal}>
        <h2 className=" font-mono px-4 pt-8 pb-1 text-center text-black text-2xl font-medium title-font mb-5">
          Tell Us More About your Firm 😀:
        </h2>
        <div className="relative mb-4 px-8">
          <label htmlFor="full-name" className="leading-7 text-sm text-black">
            Organisation's Name
          </label>
          <input
            type="text"
            id="full-name"
            name="username"
            className="w-full  bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={onChangeFirmsDetails}
          />
        </div>
        <div className="flex mx-2 px-2">
          <button
            onClick={handleSubmitBtn}
            className="text-white bg-indigo-500 border-0 py-2 px-8 mx-4 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Go Forward
          </button>
          <button
            onClick={handleSkipButton}
            className="text-grey-800 bg-white-500 border-0 py-2 px-8 mx-4 focus:outline-none hover:bg-indigo-600 hover:text-white rounded text-lg"
          >
            Skip for now
          </button>
        </div>
      </Modal>

      {showDashboard && (
        <>
          <SidePanel isOpen={isPanelOpen} onClose={togglePanel}>
          <div className="px-1 mx-2 mt-10">

          
          <h1 className="font-mono">Hello there  😀</h1>
          </div>
          <div className="px-1 mx-2 my-2">
          <button>Dashboard</button>
          </div>
          <div className="px-1 mx-2 my-2">
          <button>My Hackathons</button>
          </div>
          <div className="px-1 mx-2 my-2">
          <button>Leaderboard</button>
          </div >
          <div className="px-1 mx-2 my-2">
          <button>Edit Profile</button>
          </div>
          <div className="px-1 mx-2 my-2 mt-16">
          <button>Signout</button>
          </div>



          </SidePanel>
          <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
       Welcome to the HackNest
        <br className="hidden lg:inline-block" />
     
        {firmName.name}
      </h1>
      <p className="mb-8 leading-relaxed">
        {firmName.bio}
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Add Details
        </button>
        <Link to="/edit-organisation" className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
          Edit Company Profile
        </Link>
        <Link to="/host-hackathon" className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
          Host a Hackathon
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src="/src/assets/Organization-In-Leadership.webp"
      />
    </div>
  </div>
</section>
<Footer/>

        
        </>
      )}
    </>
  );
};

export default Dashboard;
