import React from 'react';

import Header from './components/Layout/Header';
import Items from './components/Item/Items';

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Items />
      </main>
    </React.Fragment>
  );
}

export default App;
