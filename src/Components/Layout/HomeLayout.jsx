import React from 'react';
import Header from '../Pages/Share/Header';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Header></Header>
            <div className='my-10'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default HomeLayout;