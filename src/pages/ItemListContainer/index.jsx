import React, { useEffect, useState } from 'react';
import shirtsDB from '../../data/shirts';
import ItemList from '../../components/ItemList/ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';

function getShirts(categoryId){
  return new Promise( (resolve, reject) => {
    setTimeout(() =>{
      if(!categoryId){
        return resolve(shirtsDB)
      }
      const filteredShirts = shirtsDB.filter((el)=>el.category===categoryId)
      return resolve(filteredShirts)
    }, 2000);
  });
}

function ItemListContainer() {
  const params = useParams();
  const [shirts, setShirts] = useState([]);
  useEffect( () =>{
    getShirts(params.categoryId /*? params.categoryId : null*/).then( respuestaPromise => {
      setShirts(respuestaPromise);
    });
  }, [params]);

  return (
    <div className='itemlc py-5 mx-auto'>
      <div>
      <ItemList shirts={shirts}/>
      </div>
    </div>
  )
}

export default ItemListContainer;