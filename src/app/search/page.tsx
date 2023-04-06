import NewsList from '@/components/NewsList';
import fetchNews from '@/utils/fetchNews';

type Props = {
  searchParams?: { term: string };
};

const SearchPage = async ({ searchParams }: Props) => {
  const news: NewsResponse = await fetchNews(
    'general',
    searchParams?.term,
    true
  );
  return (
    <div>
      <NewsList news={news} />
    </div>
  );
};

export default SearchPage;
