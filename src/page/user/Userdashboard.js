import AddWork from "../AddWork";
import Activity from "../Activity";
import Profile from "../Profile";
// import Settings from "./Settings";
import UDashnav from "../../components/UserDashnav/Udashnav";
import { useState } from "react";
import "./user.css";
// ...

function Userdashboard() {
  // ...
  const [activeLink, setActiveLink] = useState("profile");
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  // ...

  // Render the content based on the activeLink state
  const renderContent = () => {
    switch (activeLink) {
      case "profile":
        return <Profile />;
      case "addwork":
        return <AddWork />;
      case "activity":
         return <Activity />;
      
      default:
        return null;
    }
  };

  return (
    <div className="dsdf3">
      <div className="ds1">
        <UDashnav activeLink={activeLink} handleLinkClick={handleLinkClick} />
      </div>
      <div className="df2">
        <div className="content34">{renderContent()}</div>
      </div>
    </div>
  );
}

export default Userdashboard;
