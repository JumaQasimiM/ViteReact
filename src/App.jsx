import { useState } from "react";
import './App.css'
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/login/login.jsx";
import Dashbord from "./pages/dachbord/dachbord.jsx";
import Service from "./pages/service/service.jsx";
import Product from "./pages/prodact/product.jsx";
import News from "./pages/news/news.jsx";
import Navbar from "./pages/nav.jsx";
import UserPage from "./pages/user/userPage.jsx";
import Home from "./pages/home.jsx"
import ResjesterForm from "./pages/user/addUser.jsx";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/service" element={<Service />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashbord" element={<Dashbord />} />
        <Route path="/news" element={<News />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/register" element={<ResjesterForm />} />

        
      </Routes>
    </Router>
  );
}

export default App;
