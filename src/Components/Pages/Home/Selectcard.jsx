import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Selectcarditem from './Selectcarditem';

const Selectcard = () => {
    const loaddata=useLoaderData();
//     const loaddata=useLoaderData();
//     console.log(loaddata);
//     return (

return(

    <div className='grid md:grid-cols-2 grid-cols-1 gap-6 my-10'>
        {
        loaddata.map(index=><Selectcarditem indexdata={index} key={index._id}></Selectcarditem>)

        }
    </div>
)
    
};

export default Selectcard;