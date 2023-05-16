import React from 'react';
import Header2 from '../Pages/Share/Header2';
import { Outlet } from 'react-router-dom';

const Layout2 = () => {
    return (
        <div className='w-full flex'>
          <div className='w-1/6'><Header2></Header2></div>  
          <div className='w-3/4 '>
            <Outlet></Outlet>
          </div>
        </div>
    );
};

export default Layout2;