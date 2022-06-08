const { gql } = require("apollo-server-express");

module.exports = gql`
  type Article {
    id: ID
    lp: Int
    number: Int
    date: Int
    section: String
    title: String
    authors: String
    notes: String
  }

  type Query {
    hello: String
    articles: [Article]
    article(id: ID): Article
  }
  type Mutation {
    newArticle(title: String!): Article
  }
`;
