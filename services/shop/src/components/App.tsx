import React from 'react';
import { Outlet } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div>
      <h1>SHOP MODULE</h1>
      <div>
        123
      </div>
      <Outlet/>
    </div>
  );
};

export default App;