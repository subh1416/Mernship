
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { resetPasswordValidation } from "../helper/validate";
import { resetPassword } from "../helper/helper";
import { useAuthStore } from '../store/store';
// import {useFetch} from '../hooks/fetch.hook'




function Reset() {
  const {email} = useAuthStore(state => state.auth);
  console.log(email)
  const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            password: "",
            confirmpassword: "",
        },
        validate: resetPasswordValidation,
        validateOnBlur: false,
        validateOnChange: false,


        onSubmit: async (values) => {
          console.log(values);
          let resetPromise = resetPassword ({email , password: values.password})

          toast.promise(resetPromise, {
            loading: 'Updating',
            success : <b>Reset  Successfully</b>,
            error : <b> Could not reset</b>
          });
      resetPromise.then(function(){ navigate('/login') })
          
        },
      });


 

  return (
    <div className="log">
      
      <div className="body2">
        <Toaster position="top-center" reverseOrder={false}></Toaster>
        <section className="alpha  mx-auto box-shadow">
          <div className="p-5 ">
            <h2 className="my-3">Reset Password</h2>
            
            <div
              className="recover" 
            >
              <div className="row">
                <div className="col-12">
                  <form onSubmit={formik.handleSubmit}>
                  <div className="row">
                      <label>Password</label>
                      <input
                      {...formik.getFieldProps("password")}

                        type="text"
                        id="try"
                      />
                    </div>

                    <div className="row">
                      <label>Confirm Password</label>
                      <input
                      {...formik.getFieldProps("confirmpassword")}

                        type="password"
                        id="try"
                      />
                    </div>
                    <div className="row">
                      <button type="submit" className="btn" id="login">
                        Reset
                      </button>
                    </div>
                  </form>
                </div>
              </div>

            </div>
            
        
          </div>
        </section>
      </div>
      
    </div>
  );
}

export default Reset;

