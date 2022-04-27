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
        <h1>Compra tu Producto</h1>
        <br />
      <div>
        <div>
          <button onClick={handleSubstract}>-</button>  
          <span>  {count}  </span>
          <button onClick={onAdd}>+</button>  
        </div>
      </div>   
      <div>
        <button onClick={handleCart}>Agregar al carrito</button>
      </div>
    
    </div>
  )
}

export default ItemCount;
