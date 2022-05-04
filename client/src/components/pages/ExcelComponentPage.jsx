import React, { useEffect } from "react";
import { useState } from "@hookstate/core";
import XLSX from "xlsx";
import TableDisplay from "../common/TableDisplay";
import MobileTableDisplay from "../common/MobileTableDisplay";
import DataInput from "../features/DataInput";
import DragDropFile from "../common/DragDropFile";
import FormSearch from "../features/FormSearch";
import Button from "../features/Button";
import globalstore from "../../Store";

function ExcelComponentPage() {
  const store = useState(globalstore);

  useEffect(() => {
    const handleResize = () => {
      store.width.set(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const ab = e.target.result;
      const wb = XLSX.read(ab, { type: "array" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws, {
        header: 1,
        blankrows: false,
      });
      // console.log(store);
      const headerdata = data[0];
      store.data.set(data.shift());
      // console.log(store.data.get());
      store.filteredData.set(data);
      // console.log(store.filteredData.get());
      store.tableHeader.set(headerdata);
      // console.log(store.tableHeader.get());
      store.cols.set(make_cols(ws["!ref"]));
    };
    reader.readAsArrayBuffer(file);
  };

  const exportFile = () => {
    const ws = XLSX.utils.aoa_to_sheet(store.filteredData.get());
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
    store.searchText.set(searchText);
    searchText !== ""
      ? store.exportbuttondistabled.set(!!false)
      : store.exportbuttondistabled.set(!!true);
    console.log(store.exportbuttondistabled.get());
  };

  return (
    <DragDropFile handleFile={handleFile} className="container">
      <div className="row">
        <div className="col-sm-12">
          <DataInput handleFile={handleFile} />
        </div>
      </div>
      {/* <div className="row">
        <div className="col-sm-12">
          <Button
            // disabled={!data.length}
            // disabled={store.data.length}
            className="btn btn-success"
            onClick={exportFile}
          >
            Export
          </Button>
        </div>
      </div> */}
      <div className="row">
        <div className="col-sm-9">
          <FormSearch
            change={handleChangeSearch}
            searchText={store.searchText.get()}
          />
        </div>
        <div className="col-sm-3">
          <Button
            className="btn btn-success"
            onClick={() => window.location.reload()}
          >
            Reset
          </Button>
        </div>
      </div>
      <div className="row DisplayWindow">
        <div className="col-sm-12">
          {window.innerWidth > 600 ? (
            <TableDisplay
              data={store.filteredData.get()}
              cols={store.cols.get()}
              tableHeader={store.tableHeader.get()}
              searchText={store.searchText.get()}
            />
          ) : (
            <MobileTableDisplay
              data={store.filteredData.get()}
              cols={store.cols.get()}
              tableHeader={store.tableHeader.get()}
              searchText={store.searchText.get()}
            />
          )}
        </div>
      </div>
    </DragDropFile>
  );
}

export default ExcelComponentPage;
