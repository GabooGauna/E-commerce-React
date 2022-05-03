import {useEffect, useState} from 'react'
import shirts from '../../data/shirts'

const getShirt = (id)=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      const shirt = shirts.find((el)=>el.id===id)
      resolve(shirt);
    },2000)
  })
} 

function ItemDetail({id}) {
  const [item, setItem] = useState({
    "precio": null,
    "title": null,
    "thumbnailUrl": "/"
  })
  useEffect(()=>{
    getShirt(id).then((data)=> setItem(data))
  },[])

  return (
      <div className="card m-auto mt-5 mb-5" style={{width: "18rem"}}>
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
  );
}

export default ItemDetail