import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';
import { useState } from 'react';
import '../Home/Createcard/createcard.css'
const CollectCreatingcard = () => {
    const[langth,setLength]=useState(null);
    const[itemsPerPage,setItemsPerPage]=useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    const[loaddata,setloadata]=useState([])
    useEffect(()=>{
        
    const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:8990/products?currentPage=${currentPage}&itemsPerPage=${itemsPerPage}`);
          const jsonData = await response.json();
          setloadata(jsonData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    },[currentPage, itemsPerPage])
    const optional=[5,8,10];
    useEffect(()=>{
        fetch(`http://localhost:8990/collectiondatalength`)
        .then(res=>res.json())
        .then(data=>{setLength(data.length);console.log(data.length)})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    console.log(langth);
    const totalPages = Math.ceil(langth / itemsPerPage);

   
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Fetch and display data for the selected page
  };
  const handleItemsPerPageChange = (event) => {
    const newItemsPerPage = parseInt(event.target.value, 10);
    setItemsPerPage(newItemsPerPage);
  };
  const pageButtons = [];
  for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
    pageButtons.push(
        <div className=' btn-group'>
      <button
        key={pageNumber}
        onClick={() => handlePageChange(pageNumber)}
        className={currentPage === pageNumber ? 'btn btn-primary' : 'btn'}
      >
        {pageNumber}
      </button></div>
    );
  }
  
    
    return (
        <div>
    <div className='grid md:grid-cols-3 grid-cols-1 gap-6 my-10'>
        {
            loaddata.map(index=><Card key={index._id} indexdata={index}></Card>)
        }
    </div>
    <div>
    Current page :{currentPage}<br/>
        {pageButtons}
       
    <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
        {
            optional.map(index=><option value={index} key={index}>{index}</option>)
        }
    
      </select> 
    </div>
       </div>
    );
};

export default CollectCreatingcard;