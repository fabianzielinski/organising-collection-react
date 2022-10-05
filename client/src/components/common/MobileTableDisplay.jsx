import React from "react";
import { v4 as uuidv4 } from "uuid";
import useFilterData from "./useFilterData";

const MobileTableDisplay = () => {
  const [newFilteredData, tableHeader] = useFilterData();
  return (
    <div className="MobileDisplay">
      <div className="MobileDisplay__Table" key={uuidv4()}>
        {newFilteredData.map((r, i) => (
          <div className="MobileDisplay__Table__Record" key={uuidv4()}>
            {tableHeader.map((d, n) => (
              <div className="MobileDisplay__Table__Record__Row" key={uuidv4()}>
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
            <button>Edit</button>
            <button>Del</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileTableDisplay;
