import React from 'react';
import Google from '../Share/Google';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='grid grid-cols-1 gap-6 py-20'>
        <div className='card card-compact w-full h-full bg-base-100 h-96  shadow-xl p-5 text-center'>
           <div className='text-3xl font-bold my-5'>Login</div> 
            <Google></Google>
            <div className='my-5'>
                {`Do havn't a  Account`}
           <Link to="/resisterlayout/resister"className='text-decoration-none text-primary'>     Create new Account </Link>
            </div>
        </div></div>
    );
};

export default Login;