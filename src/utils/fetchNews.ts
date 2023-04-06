import axios from 'axios';
import { gql } from 'graphql-request';
import sortNewsByImage from './sortNewsByImage';

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  // GraphQL query
  const GET_ARTICLES = gql`
    query GetArticles($categories: String, $keywords: String) {
      getArticles(categories: $categories, keywords: $keywords) {
        pagination {
          count
          limit
          offset
          total
        }
        data {
          author
          category
          country
          description
          image
          language
          published_at
          source
          title
          url
        }
      }
    }
  `;

  // Fetch function with Next.js 13 caching
  // const res = await fetch(process.env.API_URL || '', {
  //   method: 'POST',
  //   cache: isDynamic ? 'no-cache' : 'default',
  //   next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     query: GET_ARTICLES,
  //     variables: {
  //       categories: category,
  //       keywords
  //     }
  //   })
  // });

  // const newsResponse = await res.json();

  // Fetch function using Axios
  const res = await axios.post(process.env.API_URL || '', {
    cache: isDynamic ? 'no-cache' : 'default',
    next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
    headers: {
      'Content-Type': 'application/json'
    },
    query: GET_ARTICLES,
    variables: {
      categories: category,
      keywords
    }
  });

  const newsResponse = await res.data;

  // Sort function by images vs not images present
  const news = sortNewsByImage(newsResponse.data.getArticles);

  return news;
};

export default fetchNews;
