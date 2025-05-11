import { useLocation } from 'react-router-dom';

const NewsDetailsPage = () => {
  const { state } = useLocation();
  const article = state?.article;

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <img src={article.image} alt={article.title} />
      <p>Category: {article.category}</p>
    </div>
  );
};

export default NewsDetailsPage;