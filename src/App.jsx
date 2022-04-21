import React from 'react';

import Header from './components/Layout/Header';
import Items from './components/Item/Items';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <React.Fragment>
      <Cart />
      <Header />
      <main>
        <Items />
      </main>
    </React.Fragment>
  );
}

export default App;
