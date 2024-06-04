/* eslint-disable no-unused-vars */

import {React,useState} from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";

const LoginParticipant = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [badrequest, setBadrequest] = useState(false);
    const navigate = useNavigate();
    
    const handleUsername = (e) => setUsername(e.target.value) ;
    const handlePassword = (e) => setPassword(e.target.value) ;

    const handleLoginButton = async() => {
        const url = "http://127.0.0.1:8000/api/token/";
        const data = {
            "username" : username ,
            "password" : password
        }
        let result = await axios.post(url,data);
        
        console.log("Login Results ")
        console.log(result.data)
        console.log(result.status)
        localStorage.setItem("accessToken",result.data["access"])
        localStorage.setItem("refreshToken",result.data["refresh"])
        props.setIsAuthenticated(true)
        console.log(props)
        navigate('/participant-dashboard')
    }
  return (
    <>
      <div className="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
        {!badrequest && (
          <h2 className="text-white text-lg font-medium title-font mb-5">
              Login as a Participant
          </h2>
        )}
        {badrequest && (
          <h2 className="text-white text-lg font-medium title-font mb-5">
            Something Went Wrong ! Try a different username or email
          </h2>
        )}
        <div className="relative mb-4">
          <label
            htmlFor="full-name"
            className="leading-7 text-sm text-gray-400"
          >
            Username
          </label>
          <input
            type="text"
            id="full-name"
            name="username"
            className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={handleUsername}
          />
        </div>

        
        <div className="relative mb-4">
          <label
            htmlFor="full-name"
            className="leading-7 text-sm text-gray-400"
          >
            Passowrd
          </label>
          <input
            type="text"
            id="full-name"
            name="full-name"
            className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={handlePassword}
          />
        </div>
        <button
          onClick={handleLoginButton}
          className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Login
        </button>
        <p className="text-xs mt-3">Don't have an account ? Create One ! </p>
        <button
          onClick={props.signuppage}
          className="text-white bg-red-400 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Sign Up
        </button>
      </div>
    </>
  );
};

export default LoginParticipant;
