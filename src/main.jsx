import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Root from './Components/Root/Root.jsx';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';
import ErrorElement from './Components/ErrorElement/ErrorElement';
import JobDetails from './Components/JobDetails/JobDetails';
import Register from './Register/Register';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/appliedJobs',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path:'/job/:id',
        element: <JobDetails></JobDetails>,
        loader: ()=>fetch('../public/jobs.json')
      },
      {
        path: '/appliedJobs',
        
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
    
     
    ]
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
