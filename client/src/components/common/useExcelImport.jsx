import { useState } from "@hookstate/core";
import XLSX from "xlsx";

function useExcelImport(globalstore) {
  const store = useState(globalstore);

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
        blankcols: false,
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
  };

  return [handleFile, handleChangeSearch];
}

export default useExcelImport;
