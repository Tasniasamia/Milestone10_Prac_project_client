import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { authdataall } from '../Share/Authprovider';


const Resister = () => {
 
    const[success,setSuccess]=useState(null);
    const[err,setErr]=useState(null);
    const receivedata=useContext(authdataall);
    console.log(receivedata);
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
}
console.log(admins);
// fetch('http://localhost:8990/admin',{
//     method:"POST",
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//     body:JSON.stringify(admins)
// }).then(res=>res.json()).then(data=>console.log(data));
receivedata.resister(email,password)
.then((userCredential) => 
{const user = userCredential.user;
    console.log(user);
    setSuccess("User has Submitted Successfull");
    setErr(" ");
    fetch('http://localhost:8990/admin',{
        method:"POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body:JSON.stringify(admins)
    }).then(res=>res.json()).then(data=>console.log(data));
    receivedata.upadateprofiles(name).then(() => {
    // Profile updated!
    // ...
  }).catch((error) => {
    // An error occurred
    // ...
  });})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setSuccess(" ");
    setErr(errorMessage);
    // ..
  });
    
}

    return (
        <div>
           <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row items-center my-20 justify-center">
   
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 md:ms-20">
      <form className="card-body"onSubmit={handlefunction}>
        <h2 className='text-center text-3xl font-extrabold'>Sign Up</h2>
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
          <button className="btn btn-primary">Resister</button>
        </div>
        <h2 className='text-green-600'>{success}</h2>
        <h2 className='text-red-600'>{err}</h2>

       
      </form>
      <h2 className='text-center my-5'style={{color:"gray"}}>Or Sign Up with</h2>
      
        <h2 className='text-center my-5'style={{color:"gray"}}>Aready Have an Account?<Link to="/resisterlayout/login"className='text-decoration-none text-blue-500'>Login</Link></h2>
    </div>
  </div>
</div>
        </div>
    );
};

export default Resister;