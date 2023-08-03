import React from "react";
import Signup from "./Components/Signup";
import "./index.css";
import {Routes, Route} from "react-router-dom";


const App=()=>{



  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </div>
  )
}
export default App;