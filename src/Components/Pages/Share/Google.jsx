import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { authdataall } from './Authprovider';
const Google = () => {
    const {googlesign,setUser}=useContext(authdataall);
    
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const googlesignin=()=>{
      
        googlesign().then((result) => {
            const user = result.user;
            console.log(user);
            setUser(user);
           navigate(from);
           console.log(from);
           // IdP data available using getAdditionalUserInfo(result)
           // ...
         }).catch((error) => {
           // Handle Errors here.
           const errorCode = error.code;
           const errorMessage = error.message;
           console.log(errorMessage);
      
   
           // ...
         });
    }
    return (
        
        <div className='text-center'onClick={googlesignin}> 
        <button className="btn btn-outline btn-info"style={{background:"#F5F5F8",color:"gray"}}><i className="fa-brands fa-google me-2"></i>Continue with Google</button>
      
        </div>
    );
};

export default Google;