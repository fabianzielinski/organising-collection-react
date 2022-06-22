import React from "react";
import { useState } from "@hookstate/core";
import { useQuery, gql } from "@apollo/client";
import { useEffect } from "react";

const GET_ARTICLES = gql`
  query Article {
    articles {
      lp
      number
      date
      section
      title
      authors
      notes
    }
  }
`;

function useCloudImport(globalstore) {
  const store = useState(globalstore);

  const { data, loading, error } = useQuery(GET_ARTICLES);
  // Jeżeli dane są wczytywane, należy wyświetlić odpowiedni komunikat.
  if (loading) return <p>Wczytywanie...</p>;
  // Jeżeli podczas pobierania danych wystąpi błąd, należy wyświetlić komunikat błędu.
  if (error) return <p>Błąd!</p>;

  useEffect(() => {
    store.data.set(data.article);
    console.log(store.data.get());
    store.filteredData.set(data.article);
    // store.cols.set(data.cols)
  });

  return [newFilteredData, tableHeader];
}

export default useCloudImport;
