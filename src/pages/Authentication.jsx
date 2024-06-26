import { React, useState ,createContext, useContext} from "react";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import RegisterOrganizer from "../components/RegisterOrganizer";
import About from "./About";
import LoginOrganiser from "../components/LoginOrganiser";
import Registerparticipant from "../components/Registerparticipant";
import Footer from "../components/Footer";

const Authentication = () => {
  const [signin, setSignin] = useState(true);
  const [isloggedin, setIsloggedin] = useState(false);

  const [isparticipant, setIsparticipant] = useState(false)
  
  const [showModal, setShowModal] = useState(true);
  const [currPage, setCurrPage] = useState("Sign Up")
  const [isUserOrganiser, setIsUserOrganiser] = useState(false);
  const openModal = () => setShowModal(true);
  const showLoginPage = () => {
    setCurrPage("Sign In")
  }
  const showSignupPage = () => {
    setCurrPage("Sign Up")
  }
  const closeModalOrganiser = () => {
    setShowModal(false);
    setIsUserOrganiser(true);
  };
  const closeModalParticipant = async () => {
    setShowModal(false);
    setIsUserOrganiser(false);
    let res =  setIsparticipant(true);
    console.log(isparticipant)

    console.log(res)
  };
  return (
    <>
      <Navbar menu={true} auth={true} currState={currPage}/>

      {signin && (
        <>
          <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
              <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                <h1 className="title-font font-medium text-3xl text-white">
                  HackNest : Creative Thinkers Meets Here
                </h1>
                <p className="leading-relaxed mt-4">
                  Welcome to our Hackathon hosting platform! Get ready to
                  innovate, collaborate, and compete with fellow developers
                  worldwide. Dive into the world of coding challenges and
                  unleash your creativity!
                </p>
              </div>
              {showModal && (
                <>
                  <Modal isOpen={showModal}>
                    <h2 className="text-center text-black text-2xl font-medium title-font mb-5">
                      Register as :{" "}
                    </h2>
                    <div className="flex mx-2 px-2">
                      <button
                        onClick={closeModalOrganiser}
                        className="text-white bg-indigo-500 border-0 py-2 px-8 mx-4 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                      >
                        Organiser
                      </button>

                      <button
                        onClick={closeModalParticipant}
                        className="text-white bg-indigo-500 border-0 py-2 px-8 mx-4 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                      >
                        Participant
                      </button>
                    </div>
                  </Modal>
                </>
              )}
              {isUserOrganiser && <>
              {currPage=="Sign Up" && <RegisterOrganizer loginpage={showLoginPage} />}
              
             

              {currPage=="Sign In" && <LoginOrganiser signuppage={showSignupPage}/>}
            
              </>}

              {isparticipant && <> <Registerparticipant/> </>}
            </div>
          </section>
          <Footer/>
        </>
      )}
    </>
  );
};

export default Authentication;
