import React, {useState} from 'react';

const ItemCount = (props) =>{
  const {stock,initial} = props; 
  const [count, setCount] = useState(1);

  function onAdd(){
    if (count < stock){
      setCount(count + 1)
    }else{
      console.log("no hay suficiente stock")
    }
  }

  function handleSubstract(){
    setCount(count - 1)
  }
  

  function handleCart() {
    console.log("Agregaste " + count + " productos al carro") 
  }

  return(
    <div>
        <h1 className='text-center'>Compra tu Producto</h1>
        <br />
      <div>
        <div className='d-flex justify-content-center align-items-center'>
          <button className='btn-light' onClick={handleSubstract}>-</button>  
          <span>  {count}  </span>
          <button className='btn-light' onClick={onAdd}>+</button>  
        </div>
      </div>   
      <div className='d-flex justify-content-center align-items-center'>
        <button className='btn-light' onClick={handleCart}>Agregar al carrito</button>
      </div>
    
    </div>
  )
}

export default ItemCount;
