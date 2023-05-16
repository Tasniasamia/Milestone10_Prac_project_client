import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Upadate = () => {
    const loaddata=useLoaderData();
console.log(loaddata._id);
    const handlefunction=(event)=>{
        event.preventDefault();
    const email=event.target.email.value;
    const name=event.target.name.value;
    const password=event.target.password.value;
    const date=event.target.date.value;
    const desc=event.target.desc.value;
    const organize=event.target.organize.value;
    const admins={
        email,name,password,date,desc,organize
    };


    fetch(`http://localhost:8990/adminupdate/${loaddata._id}`,{
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(admins)
    }).then(res=>res.json()).then(data=>console.log(data))
}
    return (
        <div>
        <div className="hero min-h-screen ">
<div className="hero-content flex-col lg:flex-row items-center my-20 justify-center">

 <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 md:ms-20">
   <form className="card-body"onSubmit={handlefunction}>
     <h2 className='text-center text-3xl font-extrabold'>Update Your Data</h2>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Name</span>
       </label>
       <input type="text" placeholder="Name"name="name" className="input input-bordered" />
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Email</span>
       </label>
       <input type="text" placeholder="email"name="email" className="input input-bordered" />
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Password</span>
       </label>
       <input type="text" placeholder="password"name="password" className="input input-bordered" />
     
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Date</span>
       </label>
       <input type="date" placeholder="date"name="date" className="input input-bordered" />
     
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Decription</span>
       </label>
       <input type="text" placeholder="Description"name="desc" className="input input-bordered" />
     
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Organize books at the Library</span>
       </label>
       <input type="text" placeholder="organize"name="organize" className="input input-bordered" />
     
     </div>
     <div className="form-control mt-6">
       <button className="btn btn-primary">Update</button>
     </div>
    

    
   </form>
  
 </div>
</div>
</div>
     </div>
    );
};

export default Upadate;