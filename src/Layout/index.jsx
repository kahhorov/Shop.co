import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import NewsLetter from "../components/NewsLetter";

function MainLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container">
        <Navbar />
      </div>
      <main className="flex-1 h-full">
        <Outlet />
      </main>
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default MainLayout;
