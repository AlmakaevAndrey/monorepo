import React from 'react';
import { shopRoutes } from '@packages/shared/routes/shop'
import { Link } from 'react-router-dom'
const Shop: React.FC = () => {
  return (
    <div>
      <h1>Shop</h1>
      <div>
        <Link to={shopRoutes.second}>go to second page</Link>
      </div>
    </div>
  );
};

export default Shop;