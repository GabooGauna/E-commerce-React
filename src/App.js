import './App.css';
import NavBar from './components/NavBar/NavBar';
 import ItemListContainer from './pages/ItemListContainer/index';
import ItemDetail from './pages/ItemDetailContainer/ItemDetail';
import { Route, Routes } from 'react-router-dom';
import Cart from "./pages/Cart/Cart";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetail />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>      
    </div>
  );
}

export default App;
