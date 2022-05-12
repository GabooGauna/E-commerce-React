import React, {useState} from 'react';

const ItemCount = ({stock, initial, onAdd}) =>{
  const [count, setCount] = useState(initial);

  const onIcrease = ()=>{
    const newValue = count + 1;
    if(newValue <= stock){
      setCount(newValue)
    }
  };

  const onDecrease = () =>{
    const newValue = count - 1;
    if(newValue >= initial){
      setCount(newValue)
    }
  };

  return (
    <div>
        <h1 className='text-center'>Compra tu Producto</h1>
        <br />
      <div>
        <div className='d-flex justify-content-center align-items-center'>
          <button className='btn-light btn-lg' onClick={onDecrease}>-</button>  
          <span className='m-3'>  {count}  </span>
          <button className='btn-light btn-lg' onClick={onIcrease}>+</button>  
        </div>
      </div>   
      <div className='d-flex justify-content-center align-items-center'>
        <button className='btn-primary btn-lg' onClick={()=> onAdd(count)}>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ItemCount;
