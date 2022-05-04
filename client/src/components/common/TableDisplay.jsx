import React from "react";

function TableDisplay({ data, cols, tableHeader, searchText }) {
  console.log(cols);
  return (
    <div className="Display">
      <table className="Display__Table">
        <thead>
          {/* {tableHeader !== data[0] ? ( */}
          <tr>
            {cols.map((c) => (
              <td key={c.key}>{tableHeader[c.key]}</td>
            ))}
          </tr>
          {/* ) : null} */}
        </thead>
        <tbody>
          {data
            .filter((item) =>
              item.toString().toLowerCase().includes(searchText)
            )
            .map((r, i) => (
              <tr key={i}>
                {cols.map((c) => (
                  <td key={c.key}>{r[c.key]}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableDisplay;
