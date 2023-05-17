import React, { useContext, useEffect, useState } from 'react';
import Selectcarditem from './Selectcarditem';
import { authdataall } from '../Share/Authprovider';

const Selectcard = () => {
    const receivedata=useContext(authdataall);
    const [book,setBook]=useState([])
   useEffect(()=>{
    fetch(`https://volunteer-server-tasniasamia.vercel.app/productsbyemail?email=${receivedata.user.email}`,{
        method:"GET",
        headers:{
            authorization:`Bearer ${localStorage.getItem("jwt_token")}`}}).then(res=>res.json()).then(data=>{console.log(data);setBook(data)})
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[])

return(

    <div className='grid md:grid-cols-2 grid-cols-1 gap-6 my-10'>
        {
        book.map(index=><Selectcarditem indexdata={index} key={index._id}></Selectcarditem>)

        }
    </div>
)
    
};

export default Selectcard;