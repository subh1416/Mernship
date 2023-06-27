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

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
      UserType: "admin",
    },
    validate: registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      
      console.log(values);
      values = await Object.assign(values);
      let registerPromise = registerUser(values);
      toast.promise(registerPromise, {
        loading: "Creating",
        success: <b>Registered Successfully</b>,
        error: <b>Could not register</b>,
      });
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
      formik.setFieldValue("UserType", "admin");
    } else if (id === "c#2") {
      setButtonColor("white");
      setButton2Color("#142850");
      setIsClicked({
        "c#1": false,
        "c#2": true,
      });
      formik.setFieldValue("UserType", "user");
    }
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
    <div className="log">
      <Header />
      <div className="body3">
        <Toaster position="top-center" reverseOrder={false}></Toaster>
        <section className="alpha3   box-shadow">
          <div className="p-5 ">
            <h2 className="my-3">Register</h2>
            <div className="rectangle">

              <div className={`admin ${formik.values.UserType === "admin" ? "active" : ""}`}>
                <label htmlFor="adminRadio">
                  <input
                    type="radio"
                    id="adminRadio"
                    name="UserType"
                    value="admin"
                    checked={formik.values.UserType === "admin"}
                    onChange={formik.handleChange}
                  />
                  <button
                    className="bu1"
                    id="c#1"
                    style={buttonStyle}
                    onClick={() => handleButtonClick("c#1")}
                  >
                    Admin
                  </button>
                </label>
              </div>

              <div className={`user ${formik.values.UserType === "user" ? "active" : ""}`}>
                <label htmlFor="userRadio">
                  <input
                    type="radio"
                    id="userRadio"
                    name="UserType"
                    value="user"
                    checked={formik.values.UserType === "user"}
                    onChange={formik.handleChange}
                  />
                  <button
                    className="bu2"
                    id="c#2"
                    style={buttonStyle2}
                    onClick={() => handleButtonClick("c#2")}
                  >
                    User
                  </button>
                </label>
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
                      <label>Confirm Password</label>
                      <input
                        {...formik.getFieldProps("confirmpassword")}
                        type="password"
                        id="try"
                      />
                    </div>
                    <div className="row1">
                      <button type="submit" className="btn" id="login">
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
                      <label>Confirm Password</label>
                      <input
                        {...formik.getFieldProps("confirmpassword")}
                        type="password"
                        id="try"
                      />
                    </div>
                    <div className="row1">
                      <button type="submit" className="btn" id="login">
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Signin;
