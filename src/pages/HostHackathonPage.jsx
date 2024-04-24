/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const FormComponent = () => {
  const [sucess, setSucess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    event_desc: "",
    who_can_attend: "",
    duration: "",
    openingCeremony: "",
    start_event: "",
    first_round_submission: "",
    second_round_submission: "",
    third_round_submission: "",
    winners_announcement: "",
    rewards: "",
    organizers: "1",
    poster: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      poster: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      const response = await axios.post(
        "http://127.0.0.1:8000/add-hackathon/",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Form data sent successfully:", response.data);
      setSucess(true);
    } catch (error) {
      console.error("Error sending form data:", error);
      setSucess(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-black p-4 min-h-screen flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Host a Hackathon</h2>
          {sucess && <>Successfully Hosted !Soon it will be live</>}
          {!sucess && (
            <>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <label htmlFor="name">Name of the Hackathon</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name of The Event"
                    className="border border-gray-300 rounded-md py-2 px-4"
                  />
                  {/* Description */}
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    id="event_desc"
                    name="event_desc"
                    value={formData.event_desc}
                    onChange={handleChange}
                    placeholder="Add Details Regarding your event.."
                    className="border border-gray-300 rounded-md py-2 px-4"
                  />

                  <label htmlFor="who_can_attend">Attendees</label>
                  <input
                    type="text"
                    id="who_can_attend"
                    name="who_can_attend"
                    value={formData.who_can_attend}
                    onChange={handleChange}
                    placeholder="Add Details Regarding your event.."
                    className="border border-gray-300 rounded-md py-2 px-4"
                  />
                  <label htmlFor="opening_ceremony">Opening Ceremony</label>
                  <input
                    type="datetime-local"
                    id="opening_ceremony"
                    name="opening_ceremony"
                    value={formData.opening_ceremony}
                    onChange={handleChange}
                    placeholder="Add Details Regarding your event.."
                    className="border border-gray-300 rounded-md py-2 px-4"
                  />
                  <label htmlFor="description">Start Event</label>
                  <input
                    type="datetime-local"
                    id="start_event"
                    name="start_event"
                    value={formData.start_event}
                    onChange={handleChange}
                    placeholder="Add Details Regarding your event.."
                    className="border border-gray-300 rounded-md py-2 px-4"
                  />
                  <label htmlFor="description">First Round Evaluation</label>
                  <input
                    type="datetime-local"
                    id="first_round_submission"
                    name="first_round_submission"
                    value={formData.first_round_submission}
                    onChange={handleChange}
                    placeholder="Add Details Regarding your event.."
                    className="border border-gray-300 rounded-md py-2 px-4"
                  />
                  <label htmlFor="description">Second Round Evaluation</label>
                  <input
                    type="datetime-local"
                    id="second_round_submission"
                    name="second_round_submission"
                    value={formData.second_round_submission}
                    onChange={handleChange}
                    placeholder="Add Details Regarding your event.."
                    className="border border-gray-300 rounded-md py-2 px-4"
                  />
                  <label htmlFor="description">Third Round Evaluation</label>
                  <input
                    type="datetime-local"
                    id="third_round_submission"
                    name="third_round_submission"
                    value={formData.third_round_submission}
                    onChange={handleChange}
                    placeholder="Add Details Regarding your event.."
                    className="border border-gray-300 rounded-md py-2 px-4"
                  />
                  <label htmlFor="description">Winners Announcement</label>
                  <input
                    type="datetime-local"
                    id="winners_announcement"
                    name="winners_announcement"
                    value={formData.winners_announcement}
                    onChange={handleChange}
                    placeholder="Add Details Regarding your event.."
                    className="border border-gray-300 rounded-md py-2 px-4"
                  />
                  <label htmlFor="description">Rewards </label>
                  <input
                    type="text"
                    id="rewards"
                    name="rewards"
                    value={formData.rewards}
                    onChange={handleChange}
                    placeholder="Add Details Regarding your event.."
                    className="border border-gray-300 rounded-md py-2 px-4"
                  />
                  {/* Other input fields */}
                  {/* Poster */}
                  <label htmlFor="poster">Poster</label>
                  <input
                    type="file"
                    id="poster"
                    name="poster"
                    onChange={handleFileChange}
                    className="border border-gray-300 rounded-md py-2 px-4"
                  />
                </div>
                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Submit
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default FormComponent;
