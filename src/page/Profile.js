import {useNavigate} from 'react-router-dom';
import React, {useState , useEffect} from 'react';
import toast, { Toaster } from "react-hot-toast";
import './profile.css';
import {getUsername , getUser} from '../helper/helper'

function Profile() {
    let history = useNavigate();
    const [name, setName] = useState('');
    const [uname , setUname] = useState('');
  
    useEffect(() => {
      const fetchUsername = async () => {
        try {
          const name = await getUsername();
          setName(name);
          const uname = await getUser(name.username);
          setUname(uname.data);
        } catch (error) {
          console.error('Error retrieving username:', error);
        }
      };
  
      fetchUsername();
    }, []);

    // console.log(uname);

    const Updateuser =async (id) =>{
      history(`/update/${id}`);
    }
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
                        <center><img src={uname.profile} className="img-thumbnail" alt="..." id='propic' /></center>
                    </div>
                    <hr id='hr'></hr>
                    <div className='details'>
                      <div className='urow1'>
                        <div className='col-6'>
                          <label>Name: </label>
                        </div>
                        <div className='col-6'>
                          <label>{name.username}</label>
                        </div>
                      </div>
                      <div className='urow1'>
                        <div className='col-6'>
                          <label>Email: </label>
                        </div>
                        <div className='col-6'>
                          <label>{uname.email}</label>
                        </div>
                      </div>
                      <div className='urow1'>
                        <div className='col-6'>
                          <label>Mobile Number: </label>
                        </div>
                        <div className='col-6'>
                          <label>{uname.mobile}</label>
                        </div>
                      </div>
                      <div className='urow1'>
                        <div className='col-6'>
                          <label>Address: </label>
                        </div>
                        <div className='col-6'>
                          <label>{uname.address}</label>
                        </div>
                      </div>
                      <div className='urow1'>
                        <button type="submit" className="ubtn" id="login" onClick={ () => Updateuser(uname._id)}>
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