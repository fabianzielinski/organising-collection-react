import React from "react";
import Button from "../features/Button";

const Header = () => {
  return (
    <header className="Header container">
      <div className="Header__Row row">
        <div className="Title col-sm-8">Home</div>
        <div className="Log col-sm-4">
          <Button>{"Log"}</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
