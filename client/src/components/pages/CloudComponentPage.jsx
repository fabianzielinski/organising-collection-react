import React from "react";
import { useState } from "@hookstate/core";
import TableDisplay from "../common/TableDisplay";
import MobileTableDisplay from "../common/MobileTableDisplay";
// import Button from "../features/Button";
import globalstore from "../../Store";
import useWindowSize from "../common/useWindowSize";
// import useCloudImport from "../common/useCloudImport";
import { useQuery, gql } from "@apollo/client";
// import { useEffect } from "react";

const GET_ARTICLES = gql`
  query Articles {
    articles {
      id
      title
      authors
    }
  }
`;

function CloudComponentPage() {
  const [, width] = useWindowSize();
  // const [newFilteredData, tableHeader] = useCloudImport(globalstore);
  const store = useState(globalstore);

  const { data, loading, error } = useQuery(GET_ARTICLES);

  if (loading) return <p>Wczytywanie...</p>;
  // Jeżeli podczas pobierania danych wystąpi błąd, należy wyświetlić komunikat błędu.
  if (error) return <p>Błąd!</p>;

  store.newFilteredData.set(data.articles);

  return (
    <div className="container">
      <div className="row DisplayWindow">
        <div className="col-sm-12">
          {width > 600 ? <TableDisplay /> : <MobileTableDisplay />}
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-12">
          {data.articles.map((article) => {
            return <p key={article.id}>{article.title}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default CloudComponentPage;
