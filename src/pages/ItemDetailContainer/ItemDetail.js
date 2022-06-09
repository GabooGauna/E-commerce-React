import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemCount from '../../components/ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContextProvider'
import { collection, getDocs, getFirestore } from "firebase/firestore";
import "./ItemDetailContainer.css"



function ItemDetail(product) {
  const [cantidadDeProductos, setCantidadDeProductos] = useState(null);
  const { addToCart, cartList} = useCartContext();
  console.log(cartList)
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const [item, setItem] = useState({
    "precio": null,
    "title": null,
    "thumbnailUrl": "/"
  })
  useEffect(()=>{
    const db = getFirestore();
    const itemCollection = collection(db, "items");
    getDocs(itemCollection).then((snapshot) => {
      setItem(
        snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        }).find(el => el.id === params.id)
      );
      setLoading(false);
    });
  },[])

  function addHandler(quantityToAdd) {
    if(loading) return;
    console.log(quantityToAdd, item)
    setCantidadDeProductos(quantityToAdd);
    addToCart(item, quantityToAdd)
};

  return (
    <div className='bg pt-5'>
      <div className="card m-auto mt-4 p-0 mb-5 shadow-lg" style={{width: "18rem"}}>
        <img className="card-img-top" src={item.thumbnailUrl} alt="Card image cap" />

        <div className="card-body card-bg">
          <h6 className="card-title text-center">
            {item.title}
          </h6>
          <p className="card-text text-center">
            {item.precio}
          </p>
        </div>
      </div>
      <div className='d-flex justify-content-center align-items-center'>
      {cantidadDeProductos ?
                <button className='btn-primary btn-lg mt-3 mb-5 txt-btn'><Link className='enlance' to='/cart'>Terminar compra ({ cantidadDeProductos } items)</Link></button> :
                <ItemCount stock={5} initial={1} onAdd={addHandler}/>
            }
      </div>
    </div>
  );
}

export default ItemDetail