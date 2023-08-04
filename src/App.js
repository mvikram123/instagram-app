import React from "react";
import Signup from "./Components/Signup";
import "./index.css";
import {Routes, Route} from "react-router-dom";
import Login from "./Components/Login";


const App=()=>{



  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  )
}
export default App;