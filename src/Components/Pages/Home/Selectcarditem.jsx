import React from 'react';

const Selectcarditem = (prop) => {
    const propsdata=prop.indexdata;
    return (
        <div>
              <div className="card card-compact w-full h-full bg-base-100 shadow-xl p-5">
  <figure><img src={propsdata.img} alt="cardphoto"style={{height:"300px"}} /></figure>
  <div className="card-body">
    <h2 className="card-title">{propsdata.title}</h2>
    <p>{propsdata.description}</p>
     <div className="card-actions justify-between">
        <div>{propsdata.date}</div>
       <button className="btn btn-primary">Cancel</button>
     </div>
   </div>
 </div>   
        </div>
    );
};

export default Selectcarditem;