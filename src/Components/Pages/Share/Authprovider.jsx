import React, { createContext, useEffect, useState } from 'react';
import { getAuth,createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword,GoogleAuthProvider ,signInWithPopup,onAuthStateChanged,signOut} from "firebase/auth";
import app from '../../../../Firebase/Firebase';

// eslint-disable-next-line react-refresh/only-export-components
export const authdataall=createContext(null);
const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null);
    const[load,setLoad]=useState(true);
    const value1="hello";

//authapp
const auth = getAuth(app);
//google sign
const googlesign=()=>{
    const provider = new GoogleAuthProvider();

    setLoad(true);
// eslint-disable-next-line no-undef
return signInWithPopup(auth, provider)
 }
//resister
const resister=(email,password)=>{
    setLoad(true);

    return createUserWithEmailAndPassword(auth, email, password);

}
//login
const signin=(email,password)=>{
    setLoad(true);

    return signInWithEmailAndPassword(auth, email, password);

}
//updateuser
const upadateprofiles=(name)=>{
 return   updateProfile(auth.currentUser, {
        displayName:name
      })
}
//signout
const logout=()=>{
    signOut(auth).then(() => {
        // localStorage.removeItem('doctor-token');
        setUser('')
        
      }).catch((error) => {
       
      });
}

//onauthstate
useEffect(()=>{
   const unsubscribe=onAuthStateChanged(auth, (user) => {
        if (user) {
            // const loguser={
            //     email:user.email
            // }
            // console.log(loguser);
            // fetch('https://doctor-server-beryl.vercel.app/jwt',{
            //     method:"POST",
            //     headers:{
            //         "content-type":"application/json"
            //     },
            //     body:JSON.stringify(loguser)
            // }).then(res=>res.json()).then(data=>{console.log(data);
            // if(data.token){
            //     localStorage.setItem('doctor-token',data.token)
            // }})
            const loguser={email:user.email};
            fetch('http://localhost:8990/jwt',{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(loguser)
            }).then(res=>res.json()).then(data=>{console.log(data);
            if(data.token){
                localStorage.setItem("jwt_token",data.token)
            }})
            console.log(user);
            setUser(user);
            setLoad(false);
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          // ...
        } else {
            localStorage.removeItem("jwt_token");
          // User is signed out
          // ...
        }
      });
      return ()=>{
        unsubscribe();
      }
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])
    const useObj={
        value1,resister,upadateprofiles,signin,user,setUser,logout,googlesign

    }
    return (
        <authdataall.Provider value={useObj}>
{children}
        </authdataall.Provider>
        
        
    );
};

export default AuthProvider;