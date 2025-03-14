import { useState } from "react";
// import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/login/login.jsx";
import Dashbord from "./pages/dachbord/dachbord.jsx";
import Service from "./pages/service/service.jsx";

function App() {
  return(
  <Router>
    <Routes>
      <Route path="/" element={<Service />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashbord" element={<Dashbord />} />
    </Routes>
  </Router>
  );

  // <>
  // {/* for fomat codes shif + alt + f */}
  //   <div>
  //     <Login />
  //   </div>
  // </>
}

export default App;
