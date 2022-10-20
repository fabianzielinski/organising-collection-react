import React from "react";
import { useState } from "@hookstate/core";
import { useQuery, gql } from "@apollo/client";
import globalstore from "../../Store";
// import { useEffect } from "react";

const GET_ARTICLES = gql`
  query Articles {
    articles {
      id
      title
      authors
      lp
      number
      date
      section
      notes
    }
  }
`;

function useCloudImport() {
  const store = useState(globalstore);

  const dataarray = [];
  // let datamark = true;

  const { data, loading, error } = useQuery(GET_ARTICLES);
  // Jeżeli dane są wczytywane, należy wyświetlić odpowiedni komunikat.
  if (loading) return <p>Wczytywanie...</p>;
  // Jeżeli podczas pobierania danych wystąpi błąd, należy wyświetlić komunikat błędu.
  if (error) return <p>Błąd!</p>;

  data.articles.map((items) => {
    const { lp, number, date, section, title, authors, notes } = items;
    const arr = [lp, number, date, section, title, authors, notes];
    dataarray.push(arr);
    return dataarray;
  });

  const tableHeader = [
    "Lp",
    "Nr",
    "Data",
    "Dzial",
    "Artykol",
    "Autor",
    "Uwagi",
  ];

  const cols = [
    { name: "A", key: 0 },
    { name: "B", key: 1 },
    { name: "C", key: 2 },
    { name: "D", key: 3 },
    { name: "E", key: 4 },
    { name: "F", key: 5 },
    { name: "G", key: 6 },
  ];

  store.data.set(dataarray);
  console.log(store.data.get());
  store.filteredData.set(dataarray);
  console.log(store.filteredData.get());
  store.cols.set(cols);
  console.log(store.cols.get());
  store.tableHeader.set(tableHeader);
  console.log(store.tableHeader.get());

  // const newFilteredData = store.filteredData.get();

  const handleChangeSearch = (e) => {
    const searchText = e.target.value.toLowerCase();
    store.searchText.set(searchText);
  };

  return handleChangeSearch;
}

export default useCloudImport;
