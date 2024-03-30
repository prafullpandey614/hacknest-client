import {React,useState} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterOrganizer = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [badrequest, setBadrequest] = useState(false)
    const navigate = useNavigate();

    // const history = useHistory();
    
    const handleUsername = (e) => setUsername(e.target.value) ;
    const handleEmail = (e) => setEmail(e.target.value) ;
    const handlePassword = (e) => setPassword(e.target.value) ;

    const handleSignUp = async() => {
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        // console.log(username);
        // console.log(email);
        // console.log(password);
        const payload = {
            "username" : username,
            "email": email,
            "password": password
        }
        try {
            let result = await axios.post("http://127.0.0.1:8000/registerV2/", payload);
            localStorage.setItem('accessToken', result.data["access"]);
            localStorage.setItem('refreshToken', result.data["refresh"]);
            // Redirect to a different page after signing up
            // history.push('/dashboard'); // Replace '/dashboard' with the route you want to redirect to
            navigate('/dashboard')
          } catch (error) {
            console.error("Error signing up:", error);
            setBadrequest(true);
          }
      };
    
  return (
    <>
   
    <div className="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">

                {!badrequest && <h2 className="text-white text-lg font-medium title-font mb-5">
                  Signup as a Hackathon Organizer
                </h2>}
                {badrequest && <h2 className="text-white text-lg font-medium title-font mb-5">
                  Something Went Wrong ! Try a different username or email
                </h2>}
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
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={handleEmail}
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
                <button onClick={handleSignUp} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Sign Up
                </button>
                <p className="text-xs mt-3">
                  Already Have an account ?
                </p>
                <button onClick={props.loginpage} className="text-white bg-red-400 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Sign In
                </button>
              </div>
    </>
  )
}

export default RegisterOrganizer