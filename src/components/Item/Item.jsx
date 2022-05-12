import React from 'react'
import shirts from '../../data/shirts'
import {Link} from 'react-router-dom'

function Item( {shirt} ) {
  return (
    <div className="card m-auto mt-5 mb-5 shadow-lg col-4" style={{width: "18rem"}}>
        <img className="card-img-top" src={shirt.thumbnailUrl} alt="Card image cap" />
        <div className="card-body">
        <Link to={`/item/${shirt.id}`}>
          <h5 className="card-title text-center">
            {shirt.title}
          </h5>
        </Link>
          <p className="card-text text-center">
            {shirt.precio}
          </p>
        </div>
      </div>
  )
}

export default Item;