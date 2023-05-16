import React from 'react';
import Header3 from '../Pages/Share/Header3';
import { Outlet } from 'react-router-dom';

const Resisterlayout = () => {
    return (
        <div>
            <div className='flex justify-center'>
            <Header3></Header3></div>
            <div className='flex justify-center items-center my-20'>
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Resisterlayout;