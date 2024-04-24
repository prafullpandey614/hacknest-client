
import {Route,Routes} from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contacts"
import About from "./pages/About"
import HackathonDetails from "./pages/HackathonDetails"
import Authentication from "./pages/Authentication"
import Dashboard from "./pages/Dashboard"
import EditOrganiser from "./pages/EditOrganiser"
import FormComponent from "./pages/HostHackathonPage"
import ParticipationFormComponent from "./pages/ParticipateHackathon"
import AllHackathons from "./pages/AllHackathons"
import ParticipantDashboard from "./pages/ParticipantDashboard"

function App() {


  return (
    <>
     <Routes>
       <Route path="" Component={Home} />
       <Route path="/contacts" Component={Contact} />
       <Route path="/about" Component={About} />
       <Route path="/auth" Component={Authentication} />
       <Route path="/participant-dashboard" Component={ParticipantDashboard} />
       <Route path="/dashboard" Component={Dashboard} />
       <Route path="/edit-organisation" Component={EditOrganiser} />
       <Route path="/host-hackathon" Component={FormComponent} />
       <Route path="/participate-hackathon" Component={ParticipationFormComponent} />
       <Route path="/all-hackathons" Component={AllHackathons} />
       <Route path="/hackathon-detail/:hackathonId" element={<HackathonDetails/>} />
       {/* <Route path="/hackathon-detail/:hackathonId" element={<HackathonDetails/>} /> */}
  

      
     </Routes>
  
    </>
  )
}

export default App
