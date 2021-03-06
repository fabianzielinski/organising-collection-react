import { useState } from "@hookstate/core";
import globalstore from "../../Store";

function useFilterData() {
  const store = useState(globalstore);
  const newFilteredData = store.filteredData
    .get()
    .filter((item) =>
      item.toString().toLowerCase().includes(store.searchText.get())
    );

  const cols = store.cols.get();
  const tableHeader = store.tableHeader.get();
  const toExportFiltered = [tableHeader, ...newFilteredData];
  store.toExportFiltered.set(toExportFiltered);
  return [newFilteredData, tableHeader, cols];
}

export default useFilterData;
