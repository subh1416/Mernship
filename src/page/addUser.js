import React ,{useState} from 'react';
import { useNavigate } from 'react-router-dom'

const Adduser = () => {
  let history = useNavigate();
  const [user, setUser] = useState({
    username: "", email: "", mobile: "" , password:"" , address:""
});
let name, value;
const handle = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
}

  const adddata = async(e) =>{
    e.preventDefault();
    const {username, email ,mobile , address} = user;
    const res = await fetch ('/addUser' , {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        username, email ,mobile , address
      })
    });
    const data = await res.json ();
    
    if (res.status === 422 || !data){
      alert("error");
      console.log("error");
    }else{
      alert("data added");
      history("/admin");
      console.log("data added");
    }
  }

  return (
    <div className="container">
        
        <form className='mt-4'> 
            <div className='row'>
  <div className="mb-3 col-lg-6 col-md-6 col-12 col-lg-6 col-md-6 col-12">
    <label for="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='username' value={user.username} onChange={handle} />
    
  </div>
  <div className="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" className="form-label">email</label>
    <input type="email" className="form-control" id="exampleInputtext1" name='email' value={user.email} onChange={handle}/>
  </div>
  
  <div className="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" className="form-label">mobile</label>
    <input type="text" className="form-control" id="exampleInputPassword1" name='mobile' value={user.mobile} onChange={handle}/>
  </div>
  {/* <div className="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" className="form-label">password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={user.password} onChange={handle}/>
  </div> */}
  <div className="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" className="form-label">Addres</label>
    <input type="text" className="form-control" id="exampleInputPassword1" name='address' value={user.address} onChange={handle}/>
  </div>
  
  <button type="submit" className="btn btn-primary" onClick={adddata}>Submit</button>
</div>
</form>
      
    </div>
  )
}

export default Adduser
