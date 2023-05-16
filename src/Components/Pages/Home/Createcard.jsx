import React, { useContext } from 'react';
import { authdataall } from '../Share/Authprovider';

const Createcard = () => {
    const receivedata=useContext(authdataall);
    console.log(receivedata);
    const getallvalues=(event)=>{

        event.preventDefault();
        const title=event.target.name.value;
        const date=event.target.date.value;
        const img=event.target.imag.value;
        const description=event.target.des.value;
        const email=receivedata.user.email;
        const user={
            title,date,img,description,email
        }
        console.log(user);

        fetch('http://localhost:8990/aditems',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(user)
        }).then(res=>res.json()).then(data=>console.log(data))
    }
    return (
        <div className='w-full my-5'>
            <h3 className='text-center font-bold text-3xl'>Add Item</h3>
         <form className="grid md:grid-cols-2 grid-cols-1 gap-6 my-10"onSubmit={getallvalues}>



<div className="form-control  w-full">
<label className="label">
<span className="label-text">Event Title</span>
</label>
<input type="text" placeholder="Name"name='name' className="input input-bordered" />
</div>

<div className="form-control  w-full">
<label className="label">
<span className="label-text">Date</span>
</label>
<input type="date" placeholder="date"name="date" className="input input-bordered" />

</div>

<div className="form-control l w-full">
<label className="label">
<span className="label-text">Description</span>
</label>
<textarea name="des" id="des" cols="30" rows="5"className='border-2 p-3'placeholder='Enter Describtion '></textarea>
</div>













<div className="form-control  w-full">
<label className="label">
<span className="label-text">Banner</span>
</label>
<input type="text" placeholder="imag"name="imag" className="input input-bordered" />

</div>

<div className="form-control mt-6 col-span-2">
<button className="btn btn-primary block">Add Item</button>
</div>
</form>

        </div>
    );
};

export default Createcard;