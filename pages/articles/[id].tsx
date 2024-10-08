// pages/articles/[id].tsx
import { useRouter } from 'next/router';
import React from 'react';
import { articles } from '../../data/articles';

const ArticlePage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const article = articles.find((article) => article.id === parseInt(id as string));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className='flex justify-center items-center m-5 flex-col'>
      <h1 className="bg-green-500 font-bold">{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
};

export default ArticlePage;