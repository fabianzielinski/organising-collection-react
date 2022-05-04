import { useState } from "@hookstate/core";
import React from "react";
import globalstore from "../../Store";

const Button = ({ children, onClick }) => {
  const store = useState(globalstore);
  console.log(store.exportbuttondistabled.get());
  return (
    <button
      className="Btn"
      onClick={onClick}
      // distabled={!!store.exportbuttondistabled.get()}
    >
      {children}
    </button>
  );
};

export default Button;
