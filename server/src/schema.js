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
    articles: [Article]
    article(id: ID): Article
  }
  type Mutation {
    newArticle(
      lp: Int
      number: Int
      date: Int
      section: String
      title: String
      authors: String
      notes: String
    ): Article!
    deleteArticle(id: ID!): Boolean!
    updateArticle(id: ID!, notes: String!): Article!
  }
`;
