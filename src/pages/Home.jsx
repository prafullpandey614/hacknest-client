import { React, useState,useEffect  } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link } from 'react-router-dom'
import Footer from "../components/Footer";

const Home = () => {

  const [data, setData] = useState([]);
  const fetchTrendingHackathons = async () => {
    try {
      let result = await axios.get(
        "http://127.0.0.1:8000/trending-open-events/"
      );
      // result =  result.data
      setData(result.data);
      console.log("Printing Data ...");
      console.log(data);
    } catch (error) {
      console.log(error)
      console.log("Above exception occured")
    }
   
  };
  useEffect(() => {
    fetchTrendingHackathons();
  }, []); 
  return (
    <>
      <Navbar />
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="src/assets/maintheme.jpg"
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
                 <img src="https://academics.bujhansi.ac.in/2013/UniversityProfile/Image/Fac_Image_202308041127572397.jpg" alt="" />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-white text-lg">
                      Dr. Sadik Khan
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
                  <p className="text-base text-gray-400">
                    Head Of Department, Computer Science and Engineering
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                Welcome to our hackathon hosting application! We empower organizers to seamlessly plan and manage hackathons. Our platform offers intuitive event creation, participant registration, team formation, judging tools, and real-time collaboration features. From ideation to execution, we're your ultimate hackathon partner for innovation and success.
                </p>
                <Link className="text-indigo-400 inline-flex items-center" > 
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
<div>
</div>
     

      <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto">
<p className="font-mono text-6xl text-white text-center my-14">Ongoing Events</p>


    <div className="flex flex-wrap -m-4">
     
    {
      data.map((hackathon,key) => (
          
      // eslint-disable-next-line react/jsx-key
      <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={"http://127.0.0.1:8000"+hackathon.poster}
          alt="blog"
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
            Name
          </h2>
          <h1 className="title-font text-lg font-medium text-white mb-3">
            {hackathon.name}
          </h1>
          <p className="leading-relaxed mb-3">
            {hackathon.event_desc}
          </p>
          <div className="flex items-center flex-wrap ">
            <Link to={"/hackathon-detail/"+hackathon.id} className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </Link>
            <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth={2}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx={12} cy={12} r={3} />
              </svg>
              1.2K
            </span>
            <span className="text-gray-500 inline-flex items-center leading-none text-sm">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth={2}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
              6
            </span>
          </div>
        </div>
      </div>
    </div>
      ))
    }
      
    </div>
  </div>
</section>
<Footer/>
     </>
  );
};

export default Home;
