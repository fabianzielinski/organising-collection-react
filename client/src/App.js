import React from "react";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import MainLayout from "./components/layout/MainLayot";

import NotFound from "./components/pages/NotFoundPage";
import Home from "./components/pages/HomePage";
import ExcelComponentPage from "./components/pages/ExcelComponentPage";

const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/excelcomponentpage" element={<ExcelComponentPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Link to={"/"}>Home</Link>
      <NavLink to={"/excelcomponentpage"}>To excel</NavLink>
    </MainLayout>
  );
};

export default App;
