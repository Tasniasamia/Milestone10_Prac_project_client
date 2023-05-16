import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const CollectCreatingcard = () => {
    const loaddata=useLoaderData();
    console.log(loaddata);
    return (

    <div className='grid md:grid-cols-3 grid-cols-1 gap-6 my-10'>
        {
            loaddata.map(index=><Card key={index._id} indexdata={index}></Card>)
        }
    </div>
        
    );
};

export default CollectCreatingcard;