import React from 'react'
import shirts from '../../data/shirts'

function Item( {shirt} ) {
  return (
    <div>
      <h3 className='text-light'>{shirt.title}</h3>
      <p className='text-light'>{shirt.precio}</p>
      <br/>
      <hr/>
    </div>
  )
}

export default Item;