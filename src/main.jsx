import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import HomeLayout from './Components/Layout/HomeLayout.jsx';
import Layout2 from './Components/Layout/Layout2.jsx';
import Createcard from './Components/Pages/Home/Createcard.jsx';
import Admin from './Components/Pages/Home/Admin.jsx';
import CollectCreatingcard from './Components/Pages/Home/CollectCreatingcard.jsx';
import Selectcard from './Components/Pages/Home/Selectcard.jsx';
import AuthProvider from './Components/Pages/Share/Authprovider.jsx';
import Resisterlayout from './Components/Layout/Resisterlayout.jsx';
import Resister from './Components/Pages/Home/Resister.jsx';
import PrivateRoute from './Components/Pages/Share/private.jsx';
import Login from './Components/Pages/Home/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
      {
        path:"/",
        element:<CollectCreatingcard></CollectCreatingcard>,
        loader:()=>fetch('http://localhost:8990/products')
      },{
        path:"/events",
        element:<Selectcard></Selectcard>,
        loader:()=>fetch('http://localhost:8990/products2')
       
      }
    ]
  },
  {
    path:"/Layout2",
    element:<Layout2></Layout2>,
    children:[
      {
        path:"/Layout2/AddItem",
        element:<Createcard></Createcard>
        
      },{
        path:"/Layout2/Admin",
        element:<Admin></Admin>
      }
    ]
  },{
    path:"/resisterlayout",
    element:<Resisterlayout></Resisterlayout>,
    children:[
      {
        path:"/resisterlayout/resister",
        element:<Resister></Resister>,
      },{
        path:"/resisterlayout/login",
        element:<Login></Login>
      }
    ]

  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
<AuthProvider>
    <RouterProvider router={router} /></AuthProvider>
 
);