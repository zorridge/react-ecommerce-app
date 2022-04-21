import React, { useState } from 'react';

import CartProvider from './store/CartProvider';
import Header from './components/Layout/Header';
import Items from './components/Item/Items';
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown((prevState) => !prevState);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onShowCartChange={showCartHandler} />}
      <Header onShowCartChange={showCartHandler} />
      <main>
        <Items />
      </main>
    </CartProvider>
  );
}

export default App;
