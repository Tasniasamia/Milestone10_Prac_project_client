import React from 'react';
import pik from '../../../assets/Group 1329.png';
import { Link } from 'react-router-dom';
const Header3 = () => {
    return (
        <div className='text-center'>
             <Link to="/" className="btn btn-ghost normal-case text-xl"><img src={pik} style={{height:"50px"}} alt="logo" /></Link>
        </div>
    );
};

export default Header3;