import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemCount from '../../components/ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContextProvider'
import { collection, getDocs, getFirestore } from "firebase/firestore";



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
    <>
      <div className="card m-auto mt-5 mb-5 shadow-lg" style={{width: "18rem"}}>
        <img className="card-img-top" src={item.thumbnailUrl} alt="Card image cap" />

        <div className="card-body">
          <h5 className="card-title text-center">
            {item.title}
          </h5>
          <p className="card-text text-center">
            {item.precio}
          </p>
        </div>
      </div>
      {cantidadDeProductos ?
                <button><Link to='/cart'>Terminar compra ({ cantidadDeProductos } items)</Link></button> :
                <ItemCount stock={5} initial={1} onAdd={addHandler}/>
            }
    </>
  );
}

export default ItemDetail