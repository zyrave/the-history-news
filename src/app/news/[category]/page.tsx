import NewsList from '@/components/NewsList';
import { categories } from '@/config/constants';
import fetchNews from '@/utils/fetchNews';

type Props = {
  params: { category: Category };
};

const NewsCategory = async ({ params: { category } }: Props) => {
  const news: NewsResponse = await fetchNews(category);
  return (
    <div>
      <h1 className="header-title">{category}</h1>
      <NewsList news={news} />
    </div>
  );
};

export default NewsCategory;

export async function generateStaticParams() {
  return categories.map((category: Category) => ({
    category
  }));
}
