import React, { useEffect, useState } from 'react';
import shirtsDB from '../../data/shirts';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

function getShirts(){
  return new Promise( (resolve, reject) => {
    setTimeout(() =>{
      resolve(shirtsDB);
    }, 2000);
  });
}

function ItemListContainer({greeting}) {
  const [shirts, setShirts] = useState([]);
  useEffect( () =>{
    getShirts().then( respuestaPromise => {
      setShirts(respuestaPromise);
    });
  }, []);

  return (
    <div className='itemlc container-fluid px-5 py-5 mx-auto'>
      <div className='flex flex-col text-center w-full mb-12'>
      <h1 className='sm:text-3x1 text-2x1 font-bold title-font mb-4 text-light'>{greeting}</h1>
      <ItemList shirts={shirts}/>
      </div>
    </div>
  )
}

export default ItemListContainer;