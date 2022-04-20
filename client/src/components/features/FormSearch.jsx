import React from "react";

const FormSearch = (props) => {
  return (
    <form action="">
      <label htmlFor="serch">
        Szukaj :
        <input
          name="search"
          type="text"
          id="search"
          onChange={props.change}
          value={props.serchText}
        />
      </label>
    </form>
  );
};

export default FormSearch;
