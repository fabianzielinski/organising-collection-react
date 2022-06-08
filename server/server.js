const express = require("express");
const { ApolloServer } = require("apollo-server-express");
require("dotenv").config();

const db = require("../server/src/db");
const models = require("../server/src/model");
const typeDefs = require("../server/src/schema");
const resolvers = require("../server/src/resolvers");

// Uruchomienie serwera nasłuchującego na porcie wskazanym w pliku .env, czyli na porcie 4000.
const port = process.env.PORT || 4000;
// Przechowywanie wartości DB_HOST w postaci zmiennej.
const DB_HOST = process.env.DB_HOST;

// Utworzenie schematu za pomocą języka schematu GraphQL.
// const typeDefs = gql`
//   type Article {
//     id: ID
//     lp: Int
//     number: Int
//     date: Int
//     section: String
//     title: String
//     authors: String
//     notes: String
//   }

//   type Query {
//     hello: String
//     articles: [Article]
//     article(id: ID): Article
//   }
//   type Mutation {
//     newArticle(title: String!): Article
//   }
// `;
// Dostarczenie funkcji resolvera dla właściwości schematu.
// const resolvers = {
//   Query: {
//     hello: () => "Witaj, świecie!",
//     articles: async () => {
//       return await models.Article.find();
//     },
//     article: async (parent, args) => {
//       return await models.Article.findById(args.id);
//     },
//   },
//   Mutation: {
//     newArticle: async (parent, args) => {
//       return await models.Article.create({
//         lp: "1",
//         number: "146",
//         date: "2022",
//         section: "Listy",
//         title: args.title,
//         authors: "Adam Scott",
//         notes: "Tyle",
//       });
//     },
//   },
// };

async function startApolloServer() {
  const app = express();
  // Nawiązanie połączenia z bazą danych.
  db.connect(DB_HOST);
  // Konfiguracja serwera Apollo.
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => {
      return { models };
    },
  });
  await server.start();

  // Zastosowanie oprogramowania pośredniczącego Apollo GraphQL i zdefiniowanie ścieżki dostępu do /api.
  server.applyMiddleware({ app, path: "/api" });
  app.listen({ port }, () =>
    console.log(
      `Serwer GraphQL działa pod adresem http://localhost:${port}${server.graphqlPath}`
    )
  );
}

startApolloServer();
