import React from 'react'
import { useNavigate } from 'react-router-dom'
function Dash() {

  const navigate = useNavigate();
      function userLogout(){
        localStorage.removeItem('token');
        navigate('/');
      }
  return (
    <div>
      <p>Welcome to dashboard</p>
      <button onClick={userLogout}>Logout</button>

    </div>
  )
}

export default Dash
