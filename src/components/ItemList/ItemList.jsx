import React from 'react'
import Item from '../Item/Item';

function ItemList( {shirts} ) {
  return (
    <>
    { shirts.map( thisshirt => {
      return(
        <Item shirt={thisshirt} key={thisshirt.id} />
      )
    }) }
    </>
  )
}

export default ItemList;