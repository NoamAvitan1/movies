import React from "react";
import { Outlet, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LogoAndSearch from "../components/LogoAndSearch";

const Layout = () => {
  const { idMovie } = useParams();
  return (
    <div className="layout">
      {idMovie ? <LogoAndSearch /> : <Navbar />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
