import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './View/Home/Home.js'
import Donation from './Component/donation/donation.js';
import Vision from './View/Mission/mission.js';
import Login from './View/Login/Login.js';
import DonateList from './View/Donationlist/Donationlist.js';
import Sign from './View/Signup/Sign.js';
import Feedback from './View/Feedback/Feedback.js';
import { User } from './View/Admin/Userdata/Userdata.js';
import {Feed }from './View/Admin/FeedbackAdmin/feedback.js';
import Donate from './View/Admin/donatelist/donatelist.js';
const routes =createBrowserRouter([


  {
    path:'/',
    element:<Home/>
},
{
    path:'/Vision',
    element:<Vision/>
},
{
    path:'/DonateCode',
    element:<Donation/>
},
{
    path:'/DonateList',
    element:<Donate/>
},
{
    path:'/Feedback',
    element:<Feedback/>
},
{
    path:'/login',
    element:<Login/>
},
{
    path:'/sign',
    element:<Sign/>
},
{
    path:'/User',
    element:<User/>
},
{
    path:'/Feed',
    element:<Feed/>
},
{
    path:'/Donate',
    element:<DonateList/>
}



])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <RouterProvider router={routes}/>
   </>
);


