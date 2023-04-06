import axios from 'axios';

type Props = {
  categories: string;
  keywords: string;
};

export const resolvers = {
  Query: {
    getArticles: async (_: undefined, { categories, keywords }: Props) => {
      try {
        const res = await axios.get(
          `http://api.mediastack.com/v1/news?access_key=${
            process.env.MEDIASTACK_API_KEY
          }&countries=us,gb&categories=${categories}${
            keywords ? '&keywords=' + keywords : ''
          }&sort=published_desc`
        );
        return res.data;
      } catch (error) {
        throw error;
      }
    }
  }
};
