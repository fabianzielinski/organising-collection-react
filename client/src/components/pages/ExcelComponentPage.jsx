import React from "react";
import { useState } from "@hookstate/core";
import TableDisplay from "../common/TableDisplay";
import MobileTableDisplay from "../common/MobileTableDisplay";
import DataInput from "../features/DataInput";
import DragDropFile from "../common/DragDropFile";
import FormSearch from "../features/FormSearch";
// import Button from "../features/Button";
import globalstore from "../../Store";
import useWindowSize from "../common/useWindowSize";
import useExcelImport from "../common/useExcelImport";

function ExcelComponentPage() {
  const store = useState(globalstore);
  // store.filteredData.set([]);
  const [, width] = useWindowSize();
  const [handleFile, handleChangeSearch] = useExcelImport(globalstore);

  return (
    <DragDropFile handleFile={handleFile} className="container">
      <div className="row">
        <div className="col-sm-12">
          <DataInput handleFile={handleFile} />
        </div>
      </div>
      <div className="row DisplayWindow">
        <div className="col-sm-12">
          {width > 600 ? <TableDisplay /> : <MobileTableDisplay />}
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-12">
          <FormSearch
            change={handleChangeSearch}
            searchText={store.searchText.get()}
          />
        </div>
      </div>
    </DragDropFile>
  );
}

export default ExcelComponentPage;
