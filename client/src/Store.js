import { createState } from "@hookstate/core";

const globalstore = createState({
  data: [],
  filteredData: [],
  cols: [],
  tableHeader: [],
  searchText: [],
  fileName: "sheetjs.xlsx",
  exportbuttondistabled: true,
});

export default globalstore;
