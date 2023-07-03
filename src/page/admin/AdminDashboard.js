import Dash2 from "../Dash2";
import Profile from "../Profile";
// import Settings from "./Settings";
import Dashnav from "../../components/Dashnav/Dashnav";
import { useState } from "react";
import "./admin.css";
// ...

function AdminDashboard() {
  // ...
  const [activeLink, setActiveLink] = useState("dash2");
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  // ...

  // Render the content based on the activeLink state
  const renderContent = () => {
    switch (activeLink) {
      case "dash2":
        return <Dash2 />;
      case "profile":
        return <Profile />;

      default:
        return null;
    }
  };

  return (
    <div className="dsdf3">
      <div className="ds1">
        <Dashnav activeLink={activeLink} handleLinkClick={handleLinkClick} />
      </div>
      <div className="df2">
        <div className="content34">{renderContent()}</div>
      </div>
    </div>
  );
}

export default AdminDashboard;