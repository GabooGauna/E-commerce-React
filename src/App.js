import './App.css';
import NavBar from './components/NavBar/NavBar';
 import ItemListContainer from './pages/ItemListContainer/index';
import ItemDetail from './pages/ItemDetailContainer/ItemDetail';
import { Route, Routes } from 'react-router-dom';
import Cart from "./pages/Cart/Cart";
import CartContextProvider from './context/CartContextProvider';


function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetail />} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </CartContextProvider>      
    </div>
  );
}

export default App;
