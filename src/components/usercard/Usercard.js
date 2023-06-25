import React,{useEffect ,useState} from 'react';
import './usercard.css';
import { useNavigate } from 'react-router-dom';


function Usercard() {
  let history = useNavigate();
  const [getuserdata , setUserdata] =useState([]);
  console.log(getuserdata);
  const getdata = async(e) =>{
    
    
    const res = await fetch ('/getdata' , {
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      },
     
    });
    const data = await res.json ();
    
    if (res.status === 422 || !data){
      
      console.log("error");
    }else{
      setUserdata(data)
      //console.log(" get data ");
    }
  }

    useEffect(()=>{
      getdata();
    },[])

    
    const deleteuser = async (id) =>{

      const res2 = await fetch(`/deleteuser/${id}`, {
        method:"DELETE" ,
        headers:{
          "Content-Type" :"application/json"
        }
      });

      const deletedata = await res2.json();
      console.log(deletedata);

      if (res2.status === 422 || !deletedata){
        console.log("error");
      }else{
        console.log("user deleted");
        getdata();
      }
    }

    const Updateuser =async (id) =>{
      history(`/update/${id}`);
    }

  return (
    <>  
    {
        getuserdata.map((element , id) => {
          return(
              <>
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
            <h2>{element.username}</h2>
            <div className="profile-actions">
              <button className='del34' onClick={ () => deleteuser(element._id)}>Delete </button>
              <button className='hp908' onClick={ () => Updateuser(element._id)}>Update </button>
            </div>
          </div>
        </div>

        <div className="profile-details">
          <div className="details-right">
          <p>Name: {element.username}</p>
          <p>Email: {element.email}</p>
          <p>Address: {element.address}</p>

          </div>

          <div className="details-left">
          <p>mobile:{element.mobile}</p>
          {/* <p>Email: johndoe@example.com</p>
          <p>Role: Administrator</p> */}

          </div>
   
        </div>
      </div>
    </div>

              </>
          )
        })
      }
</>
  );
}

export default Usercard;
