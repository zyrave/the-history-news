import NewsList from '@/components/NewsList';
import { categories } from '@/config/constants';
import fetchNews from '@/utils/fetchNews';

const Homepage = async () => {
  const news: NewsResponse = await fetchNews(categories.join(','));
  return <NewsList news={news} />;
};

export default Homepage;
