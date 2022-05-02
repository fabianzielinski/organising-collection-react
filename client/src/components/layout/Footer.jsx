import React from "react";
import { Link } from "react-router-dom";
import Button from "../features/Button";

const Footer = () => {
  return (
    <footer className="Footer container">
      <div className="Footer__Bar row">
        <Link to={"/"} className="col-sm-4">
          <Button>{"Home"}</Button>
        </Link>
        <Link to={"/importpage"} className="col-sm-4">
          <Button>{"Import"}</Button>
        </Link>
        <Link to={"/excelcomponentpage"} className="col-sm-4">
          <Button>{"Export"}</Button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
