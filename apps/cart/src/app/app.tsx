import { Route, Routes } from 'react-router-dom';

import '@nx-shops/shared/header';

import { CartCartPage } from '@nx-shops/z-cart/cart-page';

export const App = () => {
  return (
    <>
      <nx-shops-header />
      <Routes>
        <Route path="/" element={<CartCartPage />} />
      </Routes>
    </>
  );
};

export default App;
