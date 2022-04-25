import React, { useState } from "react";
import XLSX from "xlsx";
import TableDisplay from "../common/TableDisplay";
import MobileTableDisplay from "../common/MobileTableDisplay";
import DataInput from "../features/DataInput";
import DragDropFile from "../common/DragDropFile";
import FormSearch from "../features/FormSearch";

function ExcelComponentPage() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const [cols, setCols] = useState([]);
  const [tableHeader, setTableHeader] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const ab = e.target.result;
      const wb = XLSX.read(ab, { type: "array" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
      const headerdata = data[0];
      setData(data.shift());
      console.log(data);
      setFilteredData(data);
      console.log(filteredData);
      setTableHeader(headerdata);
      console.log(headerdata);
      setCols(make_cols(ws["!ref"]));
    };
    reader.readAsArrayBuffer(file);
  };

  const exportFile = () => {
    const ws = XLSX.utils.aoa_to_sheet(filteredData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
    XLSX.writeFile(wb, "sheetjs.xlsx");
  };

  const make_cols = (refstr) => {
    let o = [],
      C = XLSX.utils.decode_range(refstr).e.c + 1;
    for (let i = 0; i < C; ++i)
      o[i] = { name: XLSX.utils.encode_col(i), key: i };
    // console.log(o);
    return o;
  };

  const handleChangeSearch = (e) => {
    const searchText = e.target.value.toLowerCase();
    setSearchText(searchText);
  };

  return (
    <DragDropFile handleFile={handleFile}>
      <div className="row">
        <div className="col-xs-12">
          <DataInput handleFile={handleFile} />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <button
            disabled={!data.length}
            className="btn btn-success"
            onClick={exportFile}
          >
            Export
          </button>
          <button
            className="btn btn-success"
            onClick={() => window.location.reload()}
          >
            Clean
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <FormSearch change={handleChangeSearch} serchText={searchText} />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <TableDisplay
            data={filteredData}
            cols={cols}
            tableHeader={tableHeader}
            searchText={searchText}
          />
        </div>
      </div>
    </DragDropFile>
  );
}

export default ExcelComponentPage;
