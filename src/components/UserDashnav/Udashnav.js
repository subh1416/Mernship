import React from "react";
import "./Udashnav.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function UDashnav({ activeLink, handleLinkClick }) {
  const navigate = useNavigate();
      function userLogout(){
        localStorage.removeItem('token');
        navigate('/');
      }
  return (
    <div className="das23">
      <div className="prof">
        <div className="social" id="social1"></div>
        <div className="nam2">
          <span className="name">James Curie</span>
          <span className="gname">jamescurie99@gmail.com</span>
        </div>
      </div>
      <div className="lis2">
        <ul className="sidebar-nav">
          <li>
            <Link
              // to="/profile"
              className={activeLink === "profile" ? "bhola active" : "bhola"}
              onClick={() => handleLinkClick("profile")}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              // to="/profile"
              className={activeLink === "addwork" ? "bhola active" : "bhola"}
              onClick={() => handleLinkClick("addwork")}
            >
              Add Work
            </Link>
          </li>
          <li>
            <Link
              // to="/profile"
              className={activeLink === "activity" ? "bhola active" : "bhola"}
              onClick={() => handleLinkClick("activity")}
            >
             Activity
            </Link>
          </li>
          <li>
            <Link
              // to="/settings"
              className={activeLink === "settings" ? "bhola active" : "bhola"}
              onClick={() => handleLinkClick("settings")}
            >
              Settings
            </Link>
          </li>
        </ul>
      </div>

      <div className="logout3">
        <button onClick={userLogout} className="bhola1" href="#">
          Logout
        </button>
      </div>
    </div>
  );
}

export default UDashnav;
