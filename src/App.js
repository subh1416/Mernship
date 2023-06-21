import "./App.css";
import Signin from "./page/Signin";
import Homepage from "./page/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Dash from "./page/Dash";
import PageNotFound from "./page/PageNotFound";
import Recover from "./page/Recover";
import Reset from "./page/Reset";
import { AuthorizeUser } from "./middleware/auth";
//0dVHB07bJVuZltWl
function App() {
  return (
    <Router>
      <div className="App">
        
      
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/dash" element={<AuthorizeUser><Dash /></AuthorizeUser>} />
          <Route exact path="/pagenotfound" element={<PageNotFound />} />
          <Route exact path="/recover" element={<Recover />} />
          <Route exact path="/reset" element={<Reset />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
