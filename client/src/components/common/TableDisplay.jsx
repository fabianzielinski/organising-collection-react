import React from "react";
import { Link } from "react-router-dom";
import { useState } from "@hookstate/core";
import globalstore from "../../Store";
import useFilterData from "./useFilterData";

function TableDisplay() {
  const [newFilteredData, tableHeader, cols] = useFilterData();
  const store = useState(globalstore);

  return (
    <div className="Display">
      <table className="Display__Table">
        <thead>
          <tr>
            {cols.map((c) => (
              <td key={c.key}>{tableHeader[c.key]}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {newFilteredData.map((r, i) => (
            <tr key={i}>
              {cols.map((c) => (
                <td key={c.key}>{r[c.key]}</td>
              ))}
              <td key={i + 1}>
                <Link to={"/articleeditpage"}>
                  <button onClick={() => store.numberEditedStore.set(r[0])}>
                    {/* <button onClick={() => store.numberEditedStore.set(i)}> */}
                    Edit
                  </button>
                </Link>
              </td>
              <td key={i + 2}>
                <button>Del</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableDisplay;
