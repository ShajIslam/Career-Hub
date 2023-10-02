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
import AuthProvider from './AuthProvider/AuthProvider';
import LogIn from './Components/LogIn/LogIn';
import PrivateRoute from './PrivateRoute/PrivateRoute';


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
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path:'/job/:id',
        element:<PrivateRoute>
           <JobDetails></JobDetails>
        </PrivateRoute>,
        loader: ()=>fetch('../public/jobs.json')
      },
      {
        path: '/appliedJobs',
        element: <PrivateRoute>
        <AppliedJobs></AppliedJobs>
        </PrivateRoute>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      }
      
     
    ]
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>,
)
