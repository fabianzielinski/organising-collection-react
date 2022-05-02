import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayot";

import NotFound from "./components/pages/NotFoundPage";
import Home from "./components/pages/HomePage";
import ExcelComponentPage from "./components/pages/ExcelComponentPage";
import ImportPage from "./components/pages/ImportPage";

const App = () => {
  return (
    <MainLayout>
      <div className="AppDisplay">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/excelcomponentpage" element={<ExcelComponentPage />} />
          <Route path="/importpage" element={<ImportPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {/* <Link to={"/"}>
        <button>Home</button>
      </Link>
      <Link to={"/excelcomponentpage"}>
        <button>Excel </button>
      </Link>
      <Link to={"/excelcomponentpage"}>
        <button>Base</button>
      </Link> */}
    </MainLayout>
  );
};

export default App;
