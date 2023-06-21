import "./Login.css";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import { useAuthStore } from "../store/store";
import { useState } from "react";
import { generateOTP, verifyOTP } from "../helper/helper";

function Recover() {
  const { username } = useAuthStore((state) => state.auth);
  const [OTP, setOTP] = useState("");
  const [otpGenerated, setOTPGenerated] = useState(false);
  const navigate = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    try {
      let { status } = await verifyOTP({ username, code: OTP });
      if (status === 201) {
        toast.success("Verify Successfully!");
        return navigate("/reset");
      }
    } catch (error) {
      return toast.error("Wrong OTP! Check email again!");
    }
  }

  async function generateOTPOnClick() {
    try {
      await toast.promise(generateOTP(username), {
        loading: "Generating",
        success: () => {
          setOTP("");
          setOTPGenerated(true);
          return <b>OTP has been sent to your email</b>;
        },
        error: <b>Could not generate OTP</b>,
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function resendOTP() {
    try {
      await toast.promise(generateOTP(username), {
        loading: "Sending",
        success: () => {
          setOTP("");
          return <b>OTP has been resent to your email</b>;
        },
        error: <b>Could not send OTP</b>,
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="log">
      <Header />
      <div className="body2">
        <Toaster position="top-center" reverseOrder={false}></Toaster>
        <section className="alpha  mx-auto box-shadow">
          <div className="p-5 ">
            <h2 className="my-3">Recover Password</h2>

            <div className="recover">
              <div className="row">
                <div className="col-12">
                  <form onSubmit={onSubmit}>
                    <div className="row">
                      <label>Enter OTP</label>
                      <input
                        onChange={(e) => setOTP(e.target.value)}
                        type="text"
                        id="try"
                      />
                    </div>
                    <div className="row">
                      {otpGenerated ? (
                        <button
                          type="button"
                          className="btn"
                          id="login"
                          onClick={generateOTPOnClick}
                          disabled
                        >
                          OTP Generated
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="btn"
                          id="login"
                          onClick={generateOTPOnClick}
                        >
                          Generate OTP
                        </button>
                      )}
                    </div>
                    <div className="row">
                      <button type="submit" className="btn" id="login">
                        Recover
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="recovery">
              <span className="tet">Can't get OTP? </span>
              <span>
                <Link className="tet2" onClick={resendOTP}>
                  Resend{" "}
                </Link>
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Recover;
