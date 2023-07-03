import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Adduser = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const adddata = async (e) => {
    e.preventDefault();
    const { username, email, mobile, address } = user;
    const res = await fetch("/addUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        mobile,
        address,
      }),
    });
    const data = await res.json();

    if (res.status === 422 || !data) {
      toast.error("Error while adding the data");
      console.log(res.status);
    } else {
      toast.success("Data uploaded succesfully");
      setTimeout(() => {
        navigate("/admin");
      }, 1000);
    }
  };

  return (
    <div className="containerop90">
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      

      <form className="mt-4">
        <div className="row">
          <div className="mb-3 col-lg-6 col-md-6 col-12 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="username"
              value={user.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputtext1"
              name="email"
              value={user.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Mobile
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              name="mobile"
              value={user.mobile}
              onChange={handleInputChange}
            />
          </div>
          {/* <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name='password'
              value={user.password}
              onChange={handleInputChange}
            />
          </div> */}
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              name="address"
              value={user.address}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={adddata}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Adduser

