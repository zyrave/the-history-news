type Article = {
  author: string | null;
  category: string;
  country: string;
  description: string;
  image: string | null;
  language: string | null;
  published_at: string;
  source: string;
  title: string;
  url: string;
};

type Pagination = {
  count: Int;
  limit: Int;
  offset: Int;
  total: Int;
};

type NewsResponse = {
  data: Article[];
  pagination: Pagination;
};

type Category =
  | 'business'
  | 'entertainment'
  | 'general'
  | 'health'
  | 'science'
  | 'sports'
  | 'technology';
