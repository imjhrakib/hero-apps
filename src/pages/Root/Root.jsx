import React from 'react';
import HomePage from '../HomePage/HomePage';
import AllAppsList from '../AllAppsList/AllAppsList';
import { Outlet } from 'react-router';

const Root = () => {

  return (
    <div>
      <Outlet></Outlet>    
    </div>
  );
};

export default Root;