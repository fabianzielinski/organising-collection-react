import React from "react";

const FormNameFile = (props) => {
  return (
    <form action="">
      <label htmlFor="filename">
        Wpisz nazwe pliku :
        <input
          name="filename"
          type="text"
          id="filename"
          onChange={props.change}
          value={props.fileName}
        />
      </label>
    </form>
  );
};

export default FormNameFile;
