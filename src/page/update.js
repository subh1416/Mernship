import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";

const Update = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    username: "",
    email: "",
    address: "",
    profile: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const getdata = async () => {
    try {
      const res = await fetch(`/getuser/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });

      if (res.status === 422) {
        toast.error("Error retrieving user data");
      } else {
        const data = await res.json();
        setUser(data);
        console.log("User data retrieved successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error occurred while retrieving user data");
    }
  };

  const updateuser = async (e) => {
    e.preventDefault();
    const { username, email, address } = user;

    try {
      const res = await fetch(`/updateuser/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          email,
          address
        })
      });

      if (res.status === 422) {
        toast.error("Please fill in all the required fields");
      } else {
        toast.success("Data updated successfully");
        setTimeout(() => {
          navigate(-1);
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error occurred while updating user data");
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="container">
        <form className='mt-4'>
          <div className='row'>
            <div className="mb-3 col-lg-6 col-md-6 col-12 col-lg-6 col-md-6 col-12">
              <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name='username'
                value={user.username}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputPassword1"
                name='email'
                value={user.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                name='address'
                value={user.address}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary" onClick={updateuser}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
