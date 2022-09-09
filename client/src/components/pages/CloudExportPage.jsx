import React from "react";
// import { useState } from "react";
import { useState, useHookstate } from "@hookstate/core";
import { useMutation, gql } from "@apollo/client";
import globalstore from "../../Store";
// import store from "../../storeimport";

const ADD_ARTICLES = gql`
  mutation newArticle(
    $lp: Int!
    $number: Int!
    $date: Int!
    $section: String!
    $title: String!
    $authors: String!
    $notes: String!
  ) {
    newArticle(
      lp: $lp
      number: $number
      date: $date
      section: $section
      title: $title
      authors: $authors
      notes: $notes
    ) {
      id
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

const CloudExportPage = () => {
  const store = useState(globalstore);
  // const state = useHookstate({});

  // console.log(`State:`);
  // console.log(state);

  const [addNewArticle] = useMutation(ADD_ARTICLES);

  async function exportdates() {
    store.filteredData.get().map(async (items) => {
      console.log(`A: ${items}`);

      let [$lp, $number, $date, $section, $title, $authors, $notes] = items;

      // state.merge({
      //   lp: parseInt($lp),
      //   number: parseInt($number),
      //   date: parseInt($date),
      //   section: toString($section),
      //   title: toString($title),
      //   authors: toString($authors),
      //   notes: toString($notes),
      // });

      console.log(`B:  ${$authors}`);
      // console.log(`C:`);
      // console.log(state.get());

      addNewArticle({
        variables: {
          lp: parseInt($lp),
          number: parseInt($number),
          date: parseInt($date),
          section: $section,
          title: $title,
          authors: $authors,
          notes: $notes,
        },
      });
      // console.log(variables);
      // console.log(section);
      return <div>Gotowe wyeksportowane :)</div>;
    });
  }

  return (
    <div>
      <p>Naciśnij Przycisk żeby wysłać</p>
      <button
        onClick={() => {
          exportdates();
        }}
      >
        Exportuj do bazy
      </button>
    </div>
  );
};

export default CloudExportPage;
