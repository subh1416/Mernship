import React, { useState } from "react";
import Header from "../components/header/Header";
import "./Login.css";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import Footer from "../components/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { loginValidation } from "../helper/validate";
import { useAuthStore } from "../store/store";
import { verifyPassword } from "../helper/helper";
// import useFetch from "../hooks/fetch.hook";

function Login() {
  const [buttonColor, setButtonColor] = useState("#142850");
  const [button2Color, setButton2Color] = useState("white");
  const [isClicked, setIsClicked] = useState({
    "c#1": true,
    "c#2": false,
  });

  const navigate = useNavigate();
  const setUsername = useAuthStore((state) => state.setUsername);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      UserType: "admin"

    },
    validate: loginValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      setUsername(values.username);
      console.log(values);

      let loginPromise = verifyPassword({
        username: values.username,
        password: values.password,
        

      });
      toast.promise(loginPromise, {
        loading: "Checking",
        success: <b>logged in Succesfully</b>,
        error: <b>password doesn't match</b>,
      });

      loginPromise
        .then((res) => {
          let { token } = res.data;
          localStorage.setItem("token", token);
          // console.log(values.password)
          if (values.UserType === "admin") {
            navigate("/admin");
          } else if (values.UserType === "user") {
            navigate("/User");
          }
        })
        .catch((error) => {
          console.error(error);
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
      <div className="body2">
        <Toaster position="top-center" reverseOrder={false}></Toaster>
        <section className="alpha-2">
          <div className="p-5 ">
            <center><h2 className="my-3">Welcome Again!</h2></center>
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
                    className="ui89"
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
                    className="ui89"
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
              <div className="row1">
                <div className="col-12">
                  <form onSubmit={formik.handleSubmit}>
                    <div className="row1">
                      <label>Username</label>
                      <input {...formik.getFieldProps("username")} name="username" id="try" />
                    </div>

                    <div className="row1">
                      <label>Password</label>
                      <input
                        {...formik.getFieldProps("password")}
                        type="password"
                        id="try"
                      />
                    </div>
                    <div className="row1">
                      <button type="submit" className="btn" id="login">
                        Login
                      </button>
                    </div>
                  </form>
                  <div className="recovery">
                    <span className="tet">Forgot Password?</span>
                    <span>
                      <Link className="tet2" to="/emailverification">
                        {" "}
                        Recover now
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`user_login ${
                isClicked["c#2"] ? "transition active" : ""
              }`}
            >
              <div className="row1">
                <div className="col-12">
                  <form onSubmit={formik.handleSubmit}>
                    <div className="row1">
                      <label>Username</label>
                      <input
                        {...formik.getFieldProps("username")}
                        type="text"
                        id="try"
                        name="username" 
                      />
                    </div>

                    <div className="row1">
                      <label>Password</label>
                      <input
                        {...formik.getFieldProps("password")}
                        type="password"
                        id="try"
                      />
                    </div>
                    <div className="row1">
                      <button type="submit" className="btn" id="login" href="">
                        Login
                      </button>
                    </div>
                  </form>
                  <div className="recovery">
                    <span className="tet">Forgot Password?</span>
                    <span>
                      <Link className="tet2" to="/emailverification">
                        {" "}
                        Recover now
                      </Link>
                    </span>
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

export default Login;