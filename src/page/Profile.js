import {useNavigate} from 'react-router-dom';
import React from 'react';
import toast, { Toaster } from "react-hot-toast";
import './profile.css';

function Profile() {

  
    return (
        <div className="ulog">
          <div className="ubody2">
            <Toaster position="top-center" reverseOrder={false}></Toaster>
            <section className="ualpha-2">
              <div className="up-5 ">
                <center><h2 className="umy-3">Profile</h2></center>
                <div className="urectangle">
                  <div className="uadmin">
                    <div className='proimg'>
                        <center><img src="https://img.freepik.com/free-icon/user_318-159711.jpg" class="img-thumbnail" alt="..." id='propic' /></center>
                    </div>
                    <hr id='hr'></hr>
                    <div className='details'>
                      <div className='urow1'>
                        <div className='col-6'>
                          <label>Name: </label>
                        </div>
                        <div className='col-6'>
                          <label>username</label>
                        </div>
                      </div>
                      <div className='urow1'>
                        <div className='col-6'>
                          <label>Email: </label>
                        </div>
                        <div className='col-6'>
                          <label>useremail</label>
                        </div>
                      </div>
                      <div className='urow1'>
                        <div className='col-6'>
                          <label>Mobile Number: </label>
                        </div>
                        <div className='col-6'>
                          <label>usermobilenumber</label>
                        </div>
                      </div>
                      <div className='urow1'>
                        <div className='col-6'>
                          <label>Address: </label>
                        </div>
                        <div className='col-6'>
                          <label>useraddress</label>
                        </div>
                      </div>
                      <div className='urow1'>
                        <button type="submit" className="ubtn" id="login">
                          Update
                        </button>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      );
}

export default Profile;