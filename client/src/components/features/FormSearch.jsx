import React from "react";

const FormSearch = (props) => {
  return (
    <form action="">
      <label htmlFor="search">
        Szukaj :
        <input
          name="search"
          type="text"
          id="search"
          onChange={props.change}
          value={props.searchText}
        />
      </label>
    </form>
  );
};

export default FormSearch;
