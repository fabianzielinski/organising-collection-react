import React from "react";
import { Link } from "react-router-dom";
import Button from "../features/Button";
import globalstore from "../../Store";
import { useState } from "@hookstate/core";

const Footer = () => {
  const store = useState(globalstore);
  console.log(store.exportbuttondistabled.get());
  return (
    <footer className="Footer container">
      <div className="Footer__Bar row">
        <Link to={"/"} className="col-sm-4">
          <Button>{"Home"}</Button>
        </Link>
        <Link to={"/importpage"} className="col-sm-4">
          <Button>{"Import"}</Button>
        </Link>
        <Link to={"/exportpage"} className="col-sm-4" disabled={true}>
          <Button>{"Export"}</Button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
