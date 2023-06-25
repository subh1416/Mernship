import React from "react";
import Header from "../components/header/Header";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/store";
import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { emailValidation } from "../helper/validate";
import { verifyEmail } from "../helper/helper";


function Emailforrecover() {
    const navigate = useNavigate();

    const setEmail = useAuthStore((state) => state.setEmail);

  const formik = useFormik({
    initialValues: {
      email:'subhadip.s@somaiya.edu'
    },
    validate: emailValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      setEmail(values.email);
      console.log(values);

      let emailPromise = verifyEmail({
        email: values.email,
       
      });
      toast.promise(emailPromise, {
        loading: "Checking",
        success: <b>Email verified Succesfully</b>,
        error: <b>Email didn't match any</b>,
      });

      emailPromise
        .then(() => {
          
          // console.log(values.password)
          navigate("/recover");
        })
        .catch((error) => {
          console.error(error);
        });
    },
  });

  return (
    <div>
      <Header />
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="bdosihi">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <label>Enter Email</label>
            <input
              {...formik.getFieldProps("email")}
              type="text"
              id="try"
            />
          </div>
          <button
            type="submit"
            className="btn"
            id="login"

          >
            Verify Email
          </button>
        </form>
      </div>
    </div>
  );
}

export default Emailforrecover;
