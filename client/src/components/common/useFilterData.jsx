import { useState } from "@hookstate/core";
import globalstore from "../../Store";

function useFilterData() {
  const store = useState(globalstore);
  // console.log(store.filteredData.get());
  let newFilteredData = store.filteredData
    .get()
    .filter((item) =>
      item.toString().toLowerCase().includes(store.searchText.get())
    );
  console.log(newFilteredData);
  const cols = store.cols.get();
  const tableHeader = store.tableHeader.get();
  const toExportFiltered = [tableHeader, ...newFilteredData];
  store.toExportFiltered.set(toExportFiltered);
  return [newFilteredData, tableHeader, cols];
}

export default useFilterData;
