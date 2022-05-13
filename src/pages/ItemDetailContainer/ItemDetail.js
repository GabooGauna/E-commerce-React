import {useEffect, useState} from 'react'
import shirts from '../../data/shirts'
import { useParams } from 'react-router-dom'
import ItemCount from '../../components/ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const getShirt = (id)=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      const shirt = shirts.find((el)=>el.id===id)
      resolve(shirt);
    },2000)
  })
} 

function ItemDetail() {
  const [cantidadDeProductos, setCantidadDeProductos] = useState(null);
        function addHandler(quantityToAdd) {
            setCantidadDeProductos(quantityToAdd);
        }

  const params = useParams();
  const [item, setItem] = useState({
    "precio": null,
    "title": null,
    "thumbnailUrl": "/"
  })
  useEffect(()=>{
    getShirt(Number(params.id)).then((data)=> setItem(data))
  },[])

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
                <ItemCount stock={5} initial={1}/>
            }
    </>
  );
}

export default ItemDetail