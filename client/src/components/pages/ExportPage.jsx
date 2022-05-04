import React from "react";
import { Link } from "react-router-dom";
import Button from "../features/Button";

const ExportPage = () => {
  return (
    <div className="Export__Page container">
      <div className="Export__Page__Row row">
        <Link to={"/excelcomponentpage"} className="col-sm-12 col-md-6">
          <Button>{"To Excel"}</Button>
        </Link>
        <Link to={"/excelcomponentpage"} className="col-sm-12 col-md-6">
          <Button>{"To Base"}</Button>
        </Link>
      </div>
    </div>
  );
};

export default ExportPage;
