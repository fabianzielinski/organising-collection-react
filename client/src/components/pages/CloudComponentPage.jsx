import React from "react";
import { useState } from "@hookstate/core";
import TableDisplay from "../common/TableDisplay";
import MobileTableDisplay from "../common/MobileTableDisplay";
import FormSearch from "../features/FormSearch";
import globalstore from "../../Store";
import useWindowSize from "../common/useWindowSize";
import { useQuery, gql } from "@apollo/client";
import { useEffect } from "react";

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

const tableHeader = ["Lp", "Nr", "Data", "Dzial", "Artykol", "Autor", "Uwagi"];

const cols = [
  { name: "A", key: 0 },
  { name: "B", key: 1 },
  { name: "C", key: 2 },
  { name: "D", key: 3 },
  { name: "E", key: 4 },
  { name: "F", key: 5 },
  { name: "G", key: 6 },
];

function CloudComponentPage() {
  const [, width] = useWindowSize();

  const dataarray = [];
  const { data, loading, error } = useQuery(GET_ARTICLES);
  const store = useState(globalstore);

  useEffect(() => {
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

    store.data.set(dataarray);
    console.log(store.data.get());
    store.filteredData.set(dataarray);
    console.log(store.filteredData.get());
    store.cols.set(cols);
    console.log(store.cols.get());
    store.tableHeader.set(tableHeader);
    console.log(store.tableHeader.get());
  });

  const handleChangeSearch = (e) => {
    const searchText = e.target.value.toLowerCase();
    store.searchText.set(searchText);
  };

  return (
    <div className="container">
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
    </div>
  );
}

export default CloudComponentPage;
