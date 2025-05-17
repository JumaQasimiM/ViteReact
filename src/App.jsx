import { useEffect, useState } from "react";
import './App.css'
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// import aos
import AOS  from 'aos';
import 'aos/dist/aos.css';
import Login from "./pages/login/login.jsx";
import Dashbord from "./pages/dachbord/dachbord.jsx";
import Service from "./pages/service/service.jsx";
import Product from "./pages/prodact/product.jsx";
import News from "./pages/news/news.jsx";

import UserPage from "./pages/user/userPage.jsx";
import Home from "./pages/home.jsx"
import ResjesterForm from "./pages/user/addUser.jsx";
import Footer from "./pages/footer.jsx"


// import Navbar from "./pages/nav.jsx";
import Navbar from "./components/navbar.jsx"
function App() {
  useEffect(()=>{
    AOS.init({
      once:true,
    });
  },[]);

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
      <Footer />
    </Router>
  );
}

export default App;
