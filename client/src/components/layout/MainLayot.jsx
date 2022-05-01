import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = ({ children }) => {
  return (
    <div className="MainLayout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
