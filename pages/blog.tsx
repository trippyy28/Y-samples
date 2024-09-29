// pages/blog.tsx
import React from 'react';
import Link from 'next/link';
import { articles } from '../data/articles';

const Blog: React.FC = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="flex flex-row items-center">
        {articles.map((article) => (
          <div key={article.id} className="flex justify-center items-center m-7 flex-col h-24 bg-fuchsia-300">
            <h2 className=' bg-yellow-200'>{article.title}</h2>
            <Link href={`/articles/${article.id}`} className='bg-blue-400'>
              Read more
            </Link>
          </div>
          
          
        ))}
        
      </div>
    </div>
  );
};

export default Blog;