import { createState } from "@hookstate/core";

const globalstore = createState({
  data: [],
  filteredData: [],
  cols: [],
  tableHeader: [],
  searchText: [],
  exportbuttondistabled: true,
});

export default globalstore;
