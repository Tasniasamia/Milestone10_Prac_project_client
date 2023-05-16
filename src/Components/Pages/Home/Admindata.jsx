import React from 'react';
import { Link } from 'react-router-dom';

const Admindata = (props) => {
    const propsdata=props.indexdata;
    function deletefunction(id){
        fetch(`http://localhost:8990/admindelete/${id}`,{
            method:"DELETE"
        } )
            .then(res=>res.json())
            .then(data=>{console.log(data);
            if(data.deletedCount>0){
                const filterdata=props.loaddata.filter(index=>index._id!==id);
                props.setData(filterdata);
            }})
       
    }
    return (
        <tr>
     
        <td>{propsdata.name}</td>
        <td>{propsdata.email}</td>
        <td>{propsdata.date}</td>
        <td>{propsdata.organize}</td>
        <td><button className="btn btn-primary"onClick={()=>deletefunction(propsdata._id)}>Delete</button></td>
        <td><button className="btn btn-primary">
       <Link to={`/Layout2/Admin/${propsdata._id}`}className='text-decoration-none'>Update</Link>     </button></td>
      </tr>
    );
};

export default Admindata;