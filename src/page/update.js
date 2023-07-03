
import React ,{useState ,useEffect}from 'react'
import { useParams ,useNavigate} from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";

const Update = () => {

  let navigate = useNavigate();

  //  const  [getuserdata , setUserdata] =useState([]);
  //  console.log(getuserdata);
  // const [userType , setUserType] = useState('')
  const [user, setUser] = useState({
    username: "", email: "", address: "", profile: ""
  });
  let name, value;
  const handle = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  }


  const { id } = useParams("");


  const getdata = async () => {
    const res = await fetch(`/getuser/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },


    });
    const data = await res.json();
    console.log(data);

if (res.status === 422 || !data){
  
  console.log("error");
}else{
  setUser(data)
  console.log(" get data ");
}
}
useEffect(() =>{
  getdata();
},[])

const updateuser = async(e) =>{
  e.preventDefault();
  const {username,email,address} =user;

  const res2 = await fetch (`/updateuser/${id}`,{
    method:"PATCH",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      username,email,address
    })
  });
  const data2 = await res2.json();
  console.log(data2);
  if (res2.status === 422 || !data2){
    toast.error("Please fill the data");
  }else{
    toast.success("Data uploaded succesfully");
    setTimeout(() => {
      navigate(-1);
    }, 1000);


      console.log("error");
    } else {
      setUser(data)
      console.log(" get data ");
    }
  }
  useEffect(() => {
    getdata();
  }, [])



  const updateuser = async (e) => {
    e.preventDefault();
    const { username, email, address} = user;
    const res2 = await fetch(`/updateuser/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username, email, address
      })
    });



    const data2 = await res2.json();
    console.log(data2);
    if (res2.status === 422 || !data2) {
      alert("fill the data")
    } else {
      alert("data updated")
      navigate(-1);

    }
  }
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} ></Toaster>

      <div className="container">

        <form className='mt-4'>
          <div className='row'>


            <div className="mb-3 col-lg-6 col-md-6 col-12 col-lg-6 col-md-6 col-12">
              <label for="exampleInputEmail1" className="form-label">Name</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='username' value={user.username} onChange={handle} />

            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label for="exampleInputPassword1" className="form-label">email</label>
              <input type="email" className="form-control" id="exampleInputPassword1" name='email' value={user.email} onChange={handle} />
            </div>

            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label for="exampleInputPassword1" className="form-label">Addres</label>
              <input type="text" className="form-control" id="exampleInputPassword1" name='address' value={user.address} onChange={handle} />
            </div>



            <button type="submit" className="btn btn-primary" onClick={updateuser}>Submit</button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Update
