import React,{useState ,useEffect} from "react";
import "./Dashnav.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getUsername , getUser } from "../../helper/helper";

function Dashnav({ activeLink, handleLinkClick }) {
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
        <div className="social78" id="social1" >
        <img src= {uname.profile}  id="img1"  ></img>
        </div>
        <div className="nam2">
          <span className="name">{name.username}</span>
          <span className="gname">{uname.email}</span>

        </div>
      </div>
      <div className="lis2">
        <ul className="sidebar-nav">
          <li>
            <Link
              // to="/dash2"
              className={activeLink === "dash2" ? "bhola active" : "bhola"}
              onClick={() => handleLinkClick("dash2")}
            >
              Dashboard
            </Link>
          </li>
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

export default Dashnav;
