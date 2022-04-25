import React from "react";

function TableDisplay({ data, cols, tableHeader, searchText }) {
  return (
    <div className="">
      <table className="">
        <thead>
          {tableHeader !== data[0] ? (
            <tr>
              {cols.map((c) => (
                <td key={c.key}>{tableHeader[c.key]}</td>
              ))}
            </tr>
          ) : null}
        </thead>
        <tbody>
          {data
            .filter((item) =>
              item.toString().toLowerCase().includes(searchText)
            )
            .map((r, i) =>
              r !== null ? (
                <tr key={i}>
                  {cols.map((c) => (
                    <td key={c.key}>{r[c.key]}</td>
                  ))}
                </tr>
              ) : null
            )}
        </tbody>
      </table>
    </div>
  );
}

export default TableDisplay;
