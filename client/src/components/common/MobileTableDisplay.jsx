import React from "react";
import { v4 as uuidv4 } from "uuid";

const MobileTableDisplay = ({ data, cols, tableHeader }) => {
  return (
    <div className="">
      {data.map((r, i) =>
        data[i] !== data[0] ? (
          <table className="" key={i}>
            <>
              <tbody key={uuidv4()}>
                {data[0].map((d, n) => (
                  <tr key={uuidv4()}>
                    <td key={uuidv4()}>{d}</td>
                    <td key={uuidv4()}>{r[n]}</td>
                  </tr>
                ))}
              </tbody>
            </>
          </table>
        ) : null
      )}
    </div>
  );
};

export default MobileTableDisplay;
