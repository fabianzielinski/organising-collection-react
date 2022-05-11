import { useState } from "@hookstate/core";
import XLSX from "xlsx";

function useExcelExport(globalstore) {
  const store = useState(globalstore);

  const exportFile = () => {
    if (store.filteredData.get() !== "") {
      const ws = XLSX.utils.aoa_to_sheet(store.toExportFiltered.get());
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
      XLSX.writeFile(wb, `${store.fileName.get()}.xlsx`);
    } else {
      console.log("Error  empty!!");
    }
  };

  const handleChangeFileName = (e) => {
    const fileName = e.target.value;
    store.fileName.set(fileName);
  };

  return [exportFile, handleChangeFileName];
}

export default useExcelExport;
