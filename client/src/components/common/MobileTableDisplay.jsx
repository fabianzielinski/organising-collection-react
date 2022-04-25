import React from "react";
import { v4 as uuidv4 } from "uuid";

const MobileTableDisplay = ({ data, cols, tableHeader, searchText }) => {
  return (
    <div className="">
      <table className="" key={uuidv4()}>
        {data
          .filter((item) => item.toString().toLowerCase().includes(searchText))
          .map((r, i) => (
            <tbody key={uuidv4()}>
              {tableHeader.map((d, n) => (
                <tr key={uuidv4()}>
                  <td key={uuidv4()}>{d}</td>
                  <td key={uuidv4()}>{r[n]}</td>
                </tr>
              ))}
            </tbody>
          ))}
      </table>
    </div>
  );
};

export default MobileTableDisplay;
