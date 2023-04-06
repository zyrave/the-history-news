import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  scalar DateTime

  type Article {
    author: String
    category: String
    country: String
    description: String
    image: String
    language: String
    published_at: DateTime
    source: String
    title: String
    url: String
  }

  type Pagination {
    count: Int
    limit: Int
    offset: Int
    total: Int
  }

  type Root {
    pagination: Pagination
    data: [Article]
  }

  type Query {
    getArticles(categories: String, keywords: String): Root
  }
`;
