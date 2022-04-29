import React from "react";
import { v4 as uuidv4 } from "uuid";

const MobileTableDisplay = ({ data, cols, tableHeader, searchText }) => {
  return (
    <div className="MobileDisplay">
      <div className="MobileDisplay__Table" key={uuidv4()}>
        {data
          .filter((item) => item.toString().toLowerCase().includes(searchText))
          .map((r, i) => (
            <div className="MobileDisplay__Table__Record" key={uuidv4()}>
              {tableHeader.map((d, n) => (
                <div
                  className="MobileDisplay__Table__Record__Row"
                  key={uuidv4()}
                >
                  <div
                    className="MobileDisplay__Table__Record__Row__Name"
                    key={uuidv4()}
                  >
                    {d}
                  </div>
                  <div
                    className="MobileDisplay__Table__Record__Row__Value"
                    key={uuidv4()}
                  >
                    {r[n]}
                  </div>
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default MobileTableDisplay;
