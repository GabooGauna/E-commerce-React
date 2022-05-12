import './App.css';
import NavBar from './components/NavBar/NavBar';
 import ItemListContainer from './pages/ItemListContainer/index';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetail from './pages/ItemDetailContainer/ItemDetail';
import { Route, Routes } from 'react-router-dom';
import CartWidget from './components/CartWidget/CartWidget';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetail />} />
        <Route path="/cart" element={<CartWidget/>} />
      </Routes>      
      <ItemCount stock={5} initial={1}/>
    </div>
  );
}

export default App;
