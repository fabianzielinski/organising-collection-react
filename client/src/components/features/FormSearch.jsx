import React from "react";
import { CgSearch } from "react-icons/cg";

const FormSearch = (props) => {
  return (
    <form action="" className="form-search">
      <label htmlFor="search">
        <CgSearch className="ico-search" />
        <input
          name="search"
          type="text"
          id="search"
          placeholder=""
          onChange={props.change}
          value={props.searchText}
        />
      </label>
    </form>
  );
};

export default FormSearch;
