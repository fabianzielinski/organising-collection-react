import React from "react";
import { Link } from "react-router-dom";
import Button from "../features/Button";
import { ImFileExcel, ImCloud } from "react-icons/im";

const ExportPage = () => {
  return (
    <div className="Export__Page container">
      <div className="Export__Page__Row row">
        <Link to={"/excelexportpage"} className="col-sm-12 col-md-6">
          <Button>
            <ImFileExcel className="Ico" />
          </Button>
        </Link>
        <Link to={"/cloudexportpage"} className="col-sm-12 col-md-6">
          <Button>
            <ImCloud className="Ico" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ExportPage;
