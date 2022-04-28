import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import MainLayout from "./components/layout/MainLayot";

import NotFound from "./components/pages/NotFoundPage";
import Home from "./components/pages/HomePage";
import ExcelComponentPage from "./components/pages/ExcelComponentPage";

const App = () => {
  return (
    <MainLayout>
      <div className="AppDisplay">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/excelcomponentpage" element={<ExcelComponentPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Link to={"/"}>
        <button>Home</button>
      </Link>
      <Link to={"/excelcomponentpage"}>
        <button>To Excel </button>
      </Link>
      <Link to={"/excelcomponentpage"}>
        <button>To Base</button>
      </Link>
    </MainLayout>
  );
};

export default App;
