import React, { useEffect, useState } from 'react';

import endpoints from '../data/Endpoints';

const Products = () => {
  const [items, setItems] = useState([]);
  const [visibleItems, setVisibleItems] = useState(5);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    endpoints.getAllProducts().then((data) => setItems(data));
  }, []);

  const handleScroll = (direction) => {
    if (direction === 'right') {
      setOffset(offset + 5);
      setVisibleItems(5);
    } else if (direction === 'left') {
      setOffset(Math.max(offset - 5, 0));
      setVisibleItems(5);
    }
  };

  return (
    <div className='flex overflow-x-scroll justify-between flex'>
         {offset > 0 && (
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' style={{ float: 'left' }} onClick={() => handleScroll('left')}>
          Show less
        </button>
      )}
      {items.slice(offset, offset + visibleItems).map((item) => (
        <section className='p-3 mx-3 mb-2 rounded-xl w-44 h-72 bg-gray-50'>
          <div className='border-gray-500 border-solid border-b'>
            <img src={item.image} alt="" className='w-full h-44 rounded-xl' />
          </div>
          <div>
            <h3 className='text-xl'>{item.title.substring(0, 10)}{item.title.length > 10 ? '...' : ''}</h3>
            <p>Cena: {item.price} PLN</p>
            <p>{item.description.substring(0, 20)}{item.description.length > 20 ? '...' : ''}</p>
          </div>
        </section>
      ))}
    
      {offset + visibleItems < items.length && (
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' style={{ float: 'right' }} onClick={() => handleScroll('right')}>
          Show more
        </button>
      )}
    </div>
  );
};

export default Products;