import React from "react";
import { v4 as uuidv4 } from "uuid";

const MobileTableDisplay = ({ data, cols, tableHeader, searchText }) => {
  return (
    <div className="MobileDisplay">
      <table className="MobileDisplay__Table" key={uuidv4()}>
        {/* <tbody className="MobileDisplay__Table__Record"> */}
        {data
          .filter((item) => item.toString().toLowerCase().includes(searchText))
          .map((r, i) => (
            <div className="MobileDisplay__Table__Record">
              {tableHeader.map((d, n) => (
                <tr key={uuidv4()}>
                  <td key={uuidv4()}>{d}</td>
                  <td key={uuidv4()}>{r[n]}</td>
                </tr>
              ))}
            </div>
          ))}
        {/* </tbody> */}
      </table>
    </div>
  );
};

export default MobileTableDisplay;
