/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import TransparentLogo from './TransparentLogo'
const Navbar = (props) => {
  return (
   <>
   
   <header className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    {props.hasPanel &&  <span className="ml-3 text-xl" > <button onClick={props.menu}>Menu</button> </span>}
   
    <Link className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
    <img src="/src/assets/transparentlogo.png" className='logo'/>
      
      <span className="ml-3 text-xl">HackNest</span>
    </Link>

    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
      <Link className="mr-5 hover:text-white" to="/" >Home</Link>
      <Link className="mr-5 hover:text-white" to="/about">About </Link>
      <Link className="mr-5 hover:text-white" to="/all-hackathons">Hackathons</Link>
      <Link className="mr-5 hover:text-white" to="/contacts"></Link>
    </nav>
    <Link onChange={props.authChange} to={props.auth ? "/auth" : "/participant-dashboard"}   className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
      
      {props.auth && <>Logout</>}

      {!props.auth &&  <> Take Me In </>}
      
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </Link>
  </div>
</header>

   </>
  )
}

export default Navbar