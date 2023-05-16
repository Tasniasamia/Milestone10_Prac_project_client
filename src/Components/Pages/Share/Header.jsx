import React, { useContext } from 'react';
import pik from '../../../assets/Group 1329.png'
import { Link } from 'react-router-dom';
import { authdataall } from './Authprovider';
const Header = () => {
    const receivedata=useContext(authdataall);
    const navitem=(
        <>
         <li><Link to="/">Home</Link></li>
                  <li><Link to="/Layout2/AddItem">Donation</Link></li>
                  <li><Link to="/events">Events</Link></li>
                  <li><a>Blog</a></li>
                

        </>
    );
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
             {navitem}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl"><img src={pik} style={{height:"50px"}} alt="logo" /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navitem}
          </ul>
        </div>
        <div className="navbar-end">
      {
      receivedata.user?<button className="btn btn-info me-2 text-white"onClick={receivedata.logout}>LogOut</button>: <button className="btn btn-info me-2 text-white"><Link to="/resisterlayout/resister"className='text-decoration-none text-white'>Resister</Link></button>
      }
       

{
    receivedata.user?<button className="btn">Admin</button>:""
}

        </div>
      </div>
    );
};

export default Header;