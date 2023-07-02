import React from "react";
import "./Dash.css";
import Smallcards from "../components/Smallcards/Smallcards";
import Usercard from "../components/usercard/Usercard";
import { NavLink } from "react-router-dom";
import { useState , useEffect } from "react";

function Dash2() {
  const [userCount, setUserCount] = useState(0);
  const getcount = async () => {
    try {
      const res = await fetch('/getcountofusers');
      const data = await res.json();
    
      if (res.status === 201) {
        setUserCount(data);
      } else {
        console.log('Error retrieving user data:', res.status);
      }
    } catch (error) {
      console.error('Error retrieving user data:', error);
    }
  };

  useEffect(() => {
    getcount();
  }, []);
  
  





  return (
    <div className="dsdf3">
      <div className="fgh">
        <div className="hh4lj3">
          <div className="head23">
            <span className="heds"> Dashboard</span>
          </div>
          <div className="shots34">
            <Smallcards title={"Number of active user"} number={userCount} />
            <Smallcards title={"Number of active user"} number={"86486"} />
            <Smallcards title={"Number of active user"} number={"86486"} />
            <Smallcards title={"Number of active user"} number={"86486"} />
          </div>
        </div>

        <div className="hgf">
          <div className="head64">
            <div className="hed34">
              <span className="ofji"> All Users</span>
             <NavLink to="/addUser"> <button className="hgo">Add User</button></NavLink>
            </div>
            <div className="sercg">
              {" "}
              <label></label>
              <input placeholder="Search Users" type="search" id="try908" />
            </div>
          </div>

          <div className="containerkdihd">
            <Usercard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dash2;
