import React from 'react';

const Card = (props) => {
    function getvaluebtn(){
        const propdata=props.indexdata;
        fetch('https://volunteer-server-tasniasamia.vercel.app/getferdata',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(propdata)
        }).then(res=>res.json()).then(data=>console.log(data))
    }
    const propsdata=props.indexdata;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl rounded p-5">
  <figure><img src={propsdata.img} alt="Shoes"style={{height:"200px"}} className='w-full '/></figure>
 

    
      <button className="btn btn-primary text-xl font-bold my-4 "onClick={getvaluebtn}>{propsdata.title}</button>
  

</div>
    );
};

export default Card;