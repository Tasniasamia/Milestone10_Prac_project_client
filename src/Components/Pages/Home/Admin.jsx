import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Admindata from './Admindata';

const Admin = () => {
    const loaddata=useLoaderData();
    console.log(loaddata);
    const [data,setData]=useState(loaddata);
    return (
        <div className='my-10'>
          <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        
        <th>Name</th>
        <th>Email Id</th>
        <th>Regristrating Date</th>
        <th>Volunteer List</th>
        <th>Remove</th>
        <th>Update</th>
      </tr>
    </thead>

    <tbody>
      {/* row 1 */}
      {
data.map(index=><Admindata key={index._id}indexdata={index}loaddata={data}setData={setData}></Admindata>)
      }
     
 
    
      
   
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Admin;