import React from "react";
import { Link } from "react-router-dom";
import Button from "../features/Button";
import globalstore from "../../Store";
import { useState } from "@hookstate/core";
import {
  CgHome,
  CgSoftwareDownload,
  CgSoftwareUpload,
  CgUndo,
} from "react-icons/cg";

const Footer = () => {
  const store = useState(globalstore);
  console.log(store.exportbuttondistabled.get());
  return (
    <footer className="Footer container">
      <div className="Footer__Bar row">
        <Link to={"/"} className="col-sm-3">
          <Button>
            <CgHome className="Ico Ico-Home" />
          </Button>
        </Link>
        <Link to={"/importpage"} className="col-sm-3">
          <Button>
            <CgSoftwareDownload className="Ico" />
          </Button>
        </Link>
        <Link to={"/exportpage"} className="col-sm-3 ">
          <Button>
            <CgSoftwareUpload className="Ico" />
          </Button>
        </Link>
        <Link to={"/"} className="col-sm-3">
          <Button onClick={() => window.location.reload()}>
            <CgUndo className="Ico" />
          </Button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
