import React from 'react';
import { Outlet } from 'react-router-dom';
import { deepMerge } from '@packages/shared/utils/deepMerge';

const App: React.FC = () => {
  deepMerge();
  return (
    <div>
      <h1>1</h1>
      <Outlet/>
    </div>
  );
};

export default App;