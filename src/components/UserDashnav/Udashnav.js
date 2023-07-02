import React,{useState , useEffect} from "react";
import "./Udashnav.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getUsername , getUser } from "../../helper/helper";

function UDashnav({ activeLink, handleLinkClick }) {
  const navigate = useNavigate();
  
  const [name, setName] = useState('');
      const [uname , setUname] = useState('');
    
      useEffect(() => {
        const fetchUsername = async () => {
          try {
            const name = await getUsername();
            setName(name);
            const uname = await getUser(name.username);
            setUname(uname.data);
          } catch (error) {
            console.error('Error retrieving username:', error);
          }
        };
    
        fetchUsername();
      }, []);
  
      function userLogout(){
        localStorage.removeItem('token');
        navigate('/');
      }
  return (
    <div className="das23">
      <div className="prof">
        <div className="social" id="social1">
          <img src={uname.profile} alt="" id="img1" />
        </div>
        <div className="nam2">

          <span className="name">{uname.username}</span>
          <span className="gname">{uname.email}</span>
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
