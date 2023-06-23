import React from 'react';
import './usercard.css';

function Usercard() {
  return (
    <div className="user-profile">
      <div className="profile-content">
        <div className="profile-info">
     
          <div className="profile-picture">
            <img
              src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="
              alt="Profile"
            />
          </div>
          <div className="profile-header">
            <h2>Sreenath</h2>
            <div className="profile-actions">
              <button className='del34'>Delete User</button>
              <button className='hp908'>Update </button>
            </div>
          </div>
        </div>

        <div className="profile-details">
          <div className="details-right">
          <p>Name: John Doe</p>
          <p>Email: johndoe@example.com</p>
          <p>Role: Administrator</p>

          </div>

          <div className="details-left">
          <p>Name: John Doe</p>
          <p>Email: johndoe@example.com</p>
          <p>Role: Administrator</p>

          </div>
   
        </div>
      </div>
    </div>
  );
}

export default Usercard;
