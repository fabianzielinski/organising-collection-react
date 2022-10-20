const express = require("express");
const { ApolloServer } = require("apollo-server-express");
require("dotenv").config();
const cors = require("cors");

const db = require("../server/src/db");
const models = require("../server/src/model");
const typeDefs = require("../server/src/schema");
const resolvers = require("../server/src/resolvers");

const port = process.env.PORT || 4000;
const DB_HOST = process.env.DB_HOST;

async function startApolloServer() {
  const app = express();
  app.use(cors({}));
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
