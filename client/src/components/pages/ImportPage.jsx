import React from "react";
import { Link } from "react-router-dom";
import Button from "../features/Button";

const ImportPage = () => {
  return (
    <div className="Import__Page container">
      <div className="Import__Page__Row row">
        <Link to={"/excelcomponentpage"} className="col-sm-12 col-md-6">
          <Button>{"From Excel"}</Button>
        </Link>
        <Link to={"/excelcomponentpage"} className="col-sm-12 col-md-6">
          <Button>{"From Base"}</Button>
        </Link>
      </div>
    </div>
  );
};

export default ImportPage;
