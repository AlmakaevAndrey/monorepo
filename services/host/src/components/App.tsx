import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { adminRoutes } from '@packages/shared/routes/admin'
import { shopRoutes } from '@packages/shared/routes/shop'

const App: React.FC = () => {
  return (
    <div>
      <h1>Page 1</h1>
      <Link to={adminRoutes.about}>ABOUT</Link>
      <br />
      <Link to={shopRoutes.main}>SHOP</Link>
      <Outlet/>
    </div>
  );
};

export default App;