import { useState } from "@hookstate/core";
import globalstore from "../../Store";
import Button from "../features/Button";
import FormNameFile from "../features/FormNameFile";
import React from "react";
import useExcelExport from "../common/useExcelExport";
// import XLSX from "xlsx";

function ExcelExportPage() {
  const store = useState(globalstore);
  const [exportFile, handleChangeFileName] = useExcelExport(globalstore);

  // const exportFile = () => {
  //   console.log(store.filteredData.get());
  //   const ws = XLSX.utils.aoa_to_sheet(store.filteredData.get());
  //   const wb = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
  //   XLSX.writeFile(wb, `${store.fileName.get()}.xlsx`);
  // };

  // const handleChangeFileName = (e) => {
  //   const fileName = e.target.value;
  //   store.fileName.set(fileName);
  // };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9">
          <FormNameFile
            change={handleChangeFileName}
            fileName={store.fileName.get()}
          />
        </div>
        <div className="col-sm-3">
          <Button className="btn btn-success" onClick={exportFile}>
            Export
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ExcelExportPage;
