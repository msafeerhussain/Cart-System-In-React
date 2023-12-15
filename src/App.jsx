import {useState} from 'react';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown , setCartShown]=useState(false);
  const cartShownHandler = ()=>{
    setCartShown(true);
  }
  const cartHideHandler = ()=>{
    setCartShown(false);
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose= {cartHideHandler} />}
      <Header  onCartShown={cartShownHandler} />
      <Meals />
      
    </CartProvider>
  );
}

export default App;
