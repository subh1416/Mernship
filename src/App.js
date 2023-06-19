import "./App.css";
import Signin from "./page/Signin";
import Homepage from "./page/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Dash from "./page/Dash";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/dash" element={<Dash />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
