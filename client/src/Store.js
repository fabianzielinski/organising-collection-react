import { createState } from "@hookstate/core";

const globalstore = createState({
  data: [],
  filteredData: [],
  cols: [],
  tableHeader: [],
  searchText: [],
  width: [window.innerWidth],
  exportbuttondistabled: true,
});

// export function useStore() {
//   const state = useState(store);
//   return {
//     lenghtData() {
//       return state.data.length !== [] ? true : false;
//     },
//     addData(props) {
//       return state.data.set(props);
//     },
//     addFilteredData(props) {
//       return state.filteredData.set(props);
//     },
//     addCols(props) {
//       return state.cols.set(props);
//     },
//     addTableHeader(props) {
//       return state.tableHeader.set(props);
//     },
//     addSearchText(props) {
//       return state.searchText.set(props);
//     },
//     getData() {
//       return state.data.get();
//     },
//     getFilteredData() {
//       return state.filteredData.get();
//     },
//     getCols() {
//       return state.cols.get();
//     },
//     getTableHeader() {
//       return state.tableHeader.get();
//     },
//     getSearchText() {
//       return state.searchText.get();
//     },
//   };
// }

export default globalstore;
