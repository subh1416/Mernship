import React, { useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import "./Signin.css";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { registerValidation } from "../helper/validate";
import { registerUser } from "../helper/helper";

function Signin() {
  const [buttonColor, setButtonColor] = useState("#142850");
  const [button2Color, setButton2Color] = useState("white");
  const [isClicked, setIsClicked] = useState({
    "c#1": true,
    "c#2": false,
  });

  // const navigate = useNavigate() 
  // import useNavigate as well

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validate: registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      console.log(values);
      values = await Object.assign(values)
      let registerPromise = registerUser(values)
      toast.promise(registerPromise, {
        loading: 'Creating',
        success: <b>Registered Succesfully</b>,
        error : <b>Could not register</b>
      });
      // registerPromise.then(function(){navigate('/')})
    },
  });

  const handleButtonClick = (id) => {
    if (id === "c#1") {
      setButtonColor("#142850");
      setButton2Color("white");
      setIsClicked({
        "c#1": true,
        "c#2": false,
      });
    } else if (id === "c#2") {
      setButtonColor("white");
      setButton2Color("#142850");
      setIsClicked({
        "c#1": false,
        "c#2": true,
      });
    }
    // setIsClicked(true);
  };

  const buttonStyle = {
    backgroundColor: buttonColor,
    color: isClicked && buttonColor === "#142850" ? "white" : "#142850",
  };
  const buttonStyle2 = {
    backgroundColor: button2Color,
    color: isClicked && button2Color === "white" ? "#142850" : "white",
  };

  return (
    <div className="log1">
      <Header />
      <div className="body3">
        <Toaster position="top-center" reverseOrder={false}></Toaster>
        <section className="alpha3   box-shadow">
          <div className="p-5 ">
            <h2 className="my-3">Register</h2>
            <div className="rectangle1">
              <div className="admin1">
                <button
                  className="bu1"
                  id="c#1"
                  style={buttonStyle}
                  onClick={() => handleButtonClick("c#1")}
                >
                  Admin
                </button>
              </div>
              <div className="user1">
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
              <form onSubmit={formik.handleSubmit}>
                <div className="row1">
                  <div className="col-12">
                    <div className="row1">
                      <label>Name</label>
                      <input
                        {...formik.getFieldProps("username")}
                        type="text"
                        id="try"
                      />
                    </div>
                    <div className="row1">
                      <label>Email</label>
                      <input
                        {...formik.getFieldProps("email")}
                        type="email"
                        id="try"
                      />
                    </div>
                    <div className="row1">
                      <label>Password</label>
                      <input
                        {...formik.getFieldProps("password")}
                        type="text"
                        id="try"
                      />
                    </div>
                    <div className="row1">
                      <label> Confirm Password</label>
                      <input
                        {...formik.getFieldProps("confirmpassword")}
                        type="password"
                        id="try"
                      />
                    </div>
                    <div className="row1">
                      <button type="submit" className="btn" id="login" >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div
              className={`user_login ${
                isClicked["c#2"] ? "transition active" : ""
              }`}
            >
              <div className="row1">
                <div className="col-12">
                  <div className="row1">
                    <label>Name</label>
                    <input type="text" id="try" />
                  </div>
                  <div className="row1">
                    <label>Email</label>
                    <input type="email" id="try" />
                  </div>
                  <div className="row1">
                    <label>Password</label>
                    <input type="text" id="try" />
                  </div>
                  <div className="row1">
                    <label> Confirm Password</label>
                    <input type="password" id="try" />
                  </div>
                  <div className="row1">
                    <button type="submit" className="btn" id="login" href="">
                      <Link to="/dash" className="des">
                        Register
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
