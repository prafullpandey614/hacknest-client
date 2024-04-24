import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Reviews from "../components/Reviews";
import Description from "../components/Description";
import Details from "../components/Details";
const HackathonDetails = (props) => {
  const [hackathon, setHackathon] = useState({});
  const [review, setReview] = useState(false);
  const [desc, setDesc] = useState(false);
  const [details, setDetails] = useState(false);
  const { hackathonId } = useParams();
  const dynamicClass =
    "flex-grow  ${desc ? 'text-indigo-400 border-b-2 border-indigo-500' : ' border-gray-800'} py-2 text-lg px-1";

  let fetchCurrentHackathon = async () => {
    let url = "http://127.0.0.1:8000/get-single-hackathon/" + hackathonId;
    let result = await axios.get(url);
    setHackathon(result.data);
    setDesc(true);
    console.log("Printing Data ", hackathonId);
    console.log(result.data);
  };
  let handleReview = () => {
    setReview(true);
    setDesc(false);
    setDetails(false);
  };
  let handleDesc = () => {
    setReview(false);
    setDesc(true);
    setDetails(false);
  };
  let handleDetails = () => {
    setReview(false);
    setDesc(false);
    setDetails(true);
  };
  useEffect(() => {
    fetchCurrentHackathon();
  }, []);
  return (
    <>
      <Navbar />

      <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                WELCOME TO
              </h2>
              <h1 className="text-white text-3xl title-font font-medium mb-4">
                {hackathon.name}
              </h1>
              <div className="flex mb-4">
                <a
                  onClick={handleDesc}
                  className={
                    "flex-grow " +
                    (desc
                      ? "text-indigo-400 border-b-2 border-indigo-500"
                      : " border-gray-800") +
                    "py-2 text-lg px-1"
                  }
                >
                  Description
                </a>
                <a
                  onClick={handleReview}
                  className={
                    "flex-grow " +
                    (review
                      ? "text-indigo-400 border-b-2 border-indigo-500"
                      : " border-gray-800") +
                    "py-2 text-lg px-1"
                  }
                >
                  Reviews
                </a>
                <a
                  onClick={handleDetails}
                  className={
                    "flex-grow " +
                    (details
                      ? "text-indigo-400 border-b-2 border-indigo-500"
                      : " border-gray-800") +
                    "py-2 text-lg px-1"
                  }
                >
                  Details
                </a>
              </div>
              {review && (
                <>
                  <Reviews hack_object={hackathon} />
                </>
              )}
              {desc && (
                <>
                  <Description hack_object={hackathon} />
                </>
              )}
              {details && (
                <>
                  <Details hack_object={hackathon} />
                </>
              )}
              <div className="flex border-t border-gray-800 py-2">
                <span className="text-gray-500">Duration</span>
                <span className="ml-auto text-white">
                  {hackathon.duration} Hrs
                </span>
              </div>
              <div className="flex border-t border-gray-800 py-2">
                <span className="text-gray-500">Attendees</span>
                <span className="ml-auto text-white">
                  {hackathon.who_can_attend}
                </span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-800 py-2">
                <span className="text-gray-500">Organisers</span>
                <span className="ml-auto text-white">
                  {hackathon.organizers}
                </span>
              </div>

              <div className="flex">
                <span className="title-font font-medium text-2xl text-white">
                  $58.00
                </span>
                <Link
                  to={{
                    pathname: "/participate-hackathon",
                    state: {
                      hackathon_id : hackathon.id
                    },
                  }}
                  className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                >
                  Register
                </Link>
                <button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button>
              </div>
            </div>
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={"http://127.0.0.1:8000" + hackathon.poster}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HackathonDetails;
