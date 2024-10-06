// pages/articles/[id].tsx
import { useRouter } from 'next/router';
import React from 'react';
import { products } from '../../data/products';

const ProductPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((product) => product.id === parseInt(id as string));
  
  if (!product) {
    return <div>product not found</div>;
  }

  return (
    <div className='flex justify-center items-center m-5 flex-col'>
      <h1 className="bg-green-500 font-bold">{product.name}</h1>
      <p>{product.content}</p>
      
    </div>
  );
};

export default ProductPage;