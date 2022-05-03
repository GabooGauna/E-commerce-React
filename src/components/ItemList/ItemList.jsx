import React from 'react'
import Item from '../Item/Item';

function ItemList( {shirts} ) {
  return (
    <div>
    { shirts.map( thisshirt => {
      return(
        <Item shirt={thisshirt} key={thisshirt.id} />
      )
    }) }
    </div>
  )
}

export default ItemList;