import { useState } from "@hookstate/core";
import globalstore from "../../Store";
import Button from "../features/Button";
import FormNameFile from "../features/FormNameFile";
import React from "react";
import useExcelExport from "../common/useExcelExport";

function ExcelExportPage() {
  const store = useState(globalstore);
  const [exportFile, handleChangeFileName] = useExcelExport(globalstore);

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
