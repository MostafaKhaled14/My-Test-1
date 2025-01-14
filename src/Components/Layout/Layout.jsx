import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div >
      <Navbar />
        <div style={{ color: "tomato",textAlign:"center", display:"flex", alignItems: "center" ,justifyContent:"center", height:"100vh"}}>
          <Outlet />
        </div>
      <Footer />
    </div>
  );
};

export default Layout;
