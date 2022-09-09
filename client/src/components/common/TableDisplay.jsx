import React from "react";
import useFilterData from "./useFilterData";

function TableDisplay() {
  const [newFilteredData, tableHeader, cols] = useFilterData();
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
              {/* <td>
                <button>Edit</button>
              </td>
              <td>
                <button>Del</button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableDisplay;
