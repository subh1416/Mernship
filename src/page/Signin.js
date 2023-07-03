import React, { useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";
// import { Link } from "react-router-dom";
import "./Signin.css";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { registerValidation } from "../helper/validate";
import { registerUser } from "../helper/helper";
import avatar from "../assets/profile.png";
import { Link } from "react-router-dom";
import convertToBase64 from "../helper/convert";

function Signin() {
  const [file, setFile] = useState();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
      UserType: "admin",
      secretkey: "",
    },
    validate: registerValidation,
    validateOnBlur: false,
    validateOnChange: false,

    onSubmit: async (values) => {
      console.log(values);
      values = await Object.assign(values, { profile: file || avatar });
      let registerPromise = registerUser(values);
      toast.promise(registerPromise, {
        loading: "Creating",
        success: <b>Registered Successfully</b>,
        error: <b>Could not register</b>,
      });
    },
  });

  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };

  const [buttonColor, setButtonColor] = useState("#142850");
  const [button2Color, setButton2Color] = useState("white");
  const [isClicked, setIsClicked] = useState({
    "c#1": true,
    "c#2": false,
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
          <div className="ert34">
            <h2 className="m9oi">Register</h2>
            <div className="rectangle2">
              <div
                className={`admin ${
                  formik.values.UserType === "admin" ? "active" : ""
                }`}
              >
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
                    className="bu11"
                    id="c#1"
                    style={buttonStyle}
                    onClick={() => handleButtonClick("c#1")}
                  >
                    Admin
                  </button>
                </label>
              </div>

              <div
                className={`user ${
                  formik.values.UserType === "user" ? "active" : ""
                }`}
              >
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
                    className="bu21"
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
                    <div className="profile78 flex justify-center py-4">
                      <label htmlFor="profile79" className="avatar-wrapper">
                        <img
                          src={file || avatar}
                          className="eit56"
                          alt="avatar"
                        />
                      </label>

                      <input
                        type="file"
                        id="profile79"
                        name="profile79"
                        className="hidden-input78"
                        onChange={onUpload}
                      />
                    </div>

                    <div className="vgv">
                      <div className="row1 gap">
                        <label>Username</label>
                        <input
                          {...formik.getFieldProps("username")}
                          type="text"
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
                    </div>

                    <div className="vgv">
                      <div className="row1 gap">
                        <label>Password</label>
                        <input
                          {...formik.getFieldProps("password")}
                          type="text"
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
                    </div>
                    <div className="row1">
                      <label>Secret Key</label>
                      <input
                        {...formik.getFieldProps("secretkey")}
                        type="text"
                        id="try"
                      />
                    </div>

                    <div className="row1">
                      <button type="submit" className="btn" id="login">
                        Register
                      </button>
                    </div>
                    <div className="recovery">
                      <span className="tet">Registered succesfully?</span>
                      <span>
                        <Link className="tet2" to="/login">
                          
                          Login now
                        </Link>
                      </span>
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
                    <div className="profile78 flex justify-center py-4">
                      <label htmlFor="profile79" className="avatar-wrapper">
                        <img
                          src={file || avatar}
                          className="eit56"
                          alt="avatar"
                        />
                      </label>

                      <input
                        type="file"
                        id="profile79"
                        name="profile79"
                        className="hidden-input78"
                        onChange={onUpload}
                      />
                    </div>

                    <div className="vgv">
                      <div className="row1 gap">
                        <label>Username</label>
                        <input
                          {...formik.getFieldProps("username")}
                          type="text"
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
                    </div>

                    <div className="vgv">
                      <div className="row1 gap">
                        <label>Password</label>
                        <input
                          {...formik.getFieldProps("password")}
                          type="text"
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
                    </div>
                 

                    <div className="row1">
                      <button type="submit" className="btn" id="login">
                        Register
                      </button>
                    </div>
                    <div className="recovery">
                      <span className="tet">Registered succesfully?</span>
                      <span>
                        <Link className="tet2" to="/login">
                          
                          Login now
                        </Link>
                      </span>
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
