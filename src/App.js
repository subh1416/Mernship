import "./App.css";
import Signin from "./page/Signin";
import Homepage from "./page/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Dash from "./page/Dash";
import Dash2 from "./page/Dash2";
import PageNotFound from "./page/PageNotFound";
import Recover from "./page/Recover";
import Reset from "./page/Reset";
import { AuthorizeUser } from "./middleware/auth";
import Profile from "./page/Profile";
import AdminDashboard from "./page/admin/AdminDashboard";
import Userdashboard from "./page/user/Userdashboard";
import Adduser from "./page/addUser";
import Update from "./page/update";
import Emailforrecover from './page/Emailforrecover'


//0dVHB07bJVuZltWl
function App() {
  return (
    <Router>
      <div className="App">
        
      
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/dash2" element={<Dash2 />}/>
          <Route exact path="/profile" element={<Profile />}/>
          <Route exact path="/pagenotfound" element={<PageNotFound />} />
          <Route exact path="/recover" element={ <Recover />} />
          <Route exact path="/reset" element={<Reset />} />

          <Route exact path="/admin" element={<AuthorizeUser> <AdminDashboard /> </AuthorizeUser>} />
          <Route exact path="/User" element={<AuthorizeUser> <Userdashboard /> </AuthorizeUser>} />
            <Route exact path="/update/:id" element={<Update/>}/>
           
          <Route exact path="/addUser" element={<Adduser/>}/>
              <Route exact path="/emailverification" element={<Emailforrecover />} />
          


        </Routes>
      </div>
    </Router>
  );
}

export default App;
