import { createState } from "@hookstate/core";

const globalstore = createState({
  data: [],
  filteredData: [],
  cols: [],
  tableHeader: [],
  searchText: [],
  fileName: "sheetjs",
  toExportFiltered: [],
  // exportbuttondistabled: true,
  numberEditedStore: [],
  numberEditedLine: [],
});

export default globalstore;
