// frontend/src/pages/News.jsx

import NewsHero from '../components/news/NewsHero.jsx';
import NewsGrid from '../components/news/NewsGrid.jsx';
import NewsCTA from '../components/news/NewsCTA.jsx';

export default function News() {
  return (
    <>
      <NewsHero />
      <NewsGrid />
      <NewsCTA />
    </>
  );
}
