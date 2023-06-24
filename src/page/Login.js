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

  const handleButtonClick = (id) => {
    if (id === "c#1") {
      setButtonColor("#142850");
      setButton2Color("white");
      setIsClicked({
        "c#1": true,
        "c#2": false,
      });
      console.log("yt");
    } else if (id === "c#2") {
      setButtonColor("white");
      setButton2Color("#142850");
      setIsClicked({
        "c#1": false,
        "c#2": true,
      });
      console.log("uu");
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

  const navigate = useNavigate();
  const setUsername = useAuthStore((state) => state.setUsername);
  const [userType , setUserType] = useState("");
  const [secretKey , setSecretKey] =useState("");
  const checkAdmin = async (e)=> {
     if(userType === "Admin" && secretKey !== "hemanshur"){
          e.preventDefault();
          alert("Invalid USER");
        }else{
        e.preventDefault();
          const { email ,password } = formik ;
          const res = await fetch ('/signin' , {
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify({
               email , password
            })
          });
          const data = await res.json ();
          console.log(data);

  }
  }
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
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
          navigate("/admin");
        })
        .catch((error) => {
          console.error(error);
        });
    },
  });

  return (
    <div className="log">
      <Header />
      <div className="body2">
        <Toaster position="top-center" reverseOrder={false}></Toaster>
        <section className="alpha-2">
          <div className="p-5 ">
            <h2 className="my-3">Welcome Again!</h2>
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
                  onChange={(e)=>setUserType(e.target.value)}

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
              <div className="row1">
                <div className="col-12">
                  <form onSubmit={formik.handleSubmit}  onChange={checkAdmin}>
                  <div className="row1">
                      <label>secretKey</label>
                      <input {...formik.getFieldProps("SECERTKEY")} id="secertkey" />
                    </div>
                    <div className="row1">
                      <label>Username</label>
                      <input {...formik.getFieldProps("username")} id="try" />
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
                      <button type="submit" className="btn" id="login" onChange={(e) => setSecretKey(e.target.value)}>
                        Login
                      </button>
                    </div>
                  </form>
                  <div className="recovery">
                    <span className="tet">Forgot Password?</span>
                    <span>
                      <Link className="tet2" to="/recover">
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
                      <Link className="tet2" to="/recover">
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