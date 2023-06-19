import React, { useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import "./Signin.css";

function Signin() {
  const [buttonColor, setButtonColor] = useState("#a55eea");
  const [button2Color, setButton2Color] = useState("white");
  const [isClicked, setIsClicked] = useState({
    "c#1": true,
    "c#2": false,
  });

  const handleButtonClick = (id) => {
    if (id === "c#1") {
      setButtonColor("#a55eea");
      setButton2Color("white");
      setIsClicked({
        "c#1": true,
        "c#2": false,
      });
    } else if (id === "c#2") {
      setButtonColor("white");
      setButton2Color("#a55eea");
      setIsClicked({
        "c#1": false,
        "c#2": true,
      });
    }
    // setIsClicked(true);
  };

  const buttonStyle = {
    backgroundColor: buttonColor,
    color: isClicked && buttonColor === "#a55eea" ? "white" : "#a55eea",
  };
  const buttonStyle2 = {
    backgroundColor: button2Color,
    color: isClicked && button2Color === "white" ? "#a55eea" : "white",
  };

  return (
    <div className="log">
      <Header />
      <div className="body2">
        <section className="alpha  mx-auto box-shadow">
          <div className="p-5 ">
            <h2 className="my-3">Welcome!</h2>
            <div className="rectangle">
              <div className="admin">
                <button
                  className="bu1"
                  id="c#1"
                  style={buttonStyle}
                  onClick={() => handleButtonClick("c#1")}
                >
                  Admin
                </button>
              </div>
              <div className="user">
                <button
                  className="bu2"
                  id="c#2"
                  style={buttonStyle2}
                  onClick={() => handleButtonClick("c#2")}
                >
                  User
                </button>
              </div>
            </div>
            <div
              className={`admin_login ${
                isClicked["c#1"] ? "transition active" : ""
              }`}
            >
              <div class="dropdown">
                <button
                  class="btn1 btn1-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Abbrevation
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <div class="dropdown-item" >
                      Mr.
                    </div>
                  </li>
                  <li>
                    <div class="dropdown-item" >
                      Ms.
                    </div>
                  </li>
                  <li>
                    <div class="dropdown-item" >
                      Dr.
                    </div>
                  </li>
                  <li>
                    <div class="dropdown-item" >
                      Prefer not to say
                    </div>
                  </li>
                </ul>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <label>Username:</label>
                    <input type="email" id="try" />
                  </div>
                  <div className="row">
                    <label>Unique Id:</label>
                    <input type="email" id="try" />
                  </div>
                  <div className="row">
                    <label>Password:</label>
                    <input type="password" id="try" />
                  </div>
                  <div className="row">
                    <button type="submit" className="btn" id="login" href="">
                      <Link to="/dash" className="des">
                        Login
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`user_login ${
                isClicked["c#2"] ? "transition active" : ""
              }`}
            >
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <label>Username:</label>
                    <input type="email" id="try" />
                  </div>

                  <div className="row">
                    <label>Password:</label>
                    <input type="password" id="try" />
                  </div>
                  <div className="row">
                    <button type="submit" className="btn" id="login" href="">
                      <Link to="/dash" className="des">
                        Login
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Signin;
