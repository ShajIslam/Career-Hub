import { Link } from "react-router-dom";
import SocialLogIn from "../SocialLogIn/SocialLogIn";
import '../Home/Home.css'
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const LogIn = () => {

    const {signUp}= useContext(AuthContext);

    const handleSubmit =(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signUp(email, password);
    }

    return (
        <div className="max-w-md mx-auto mt-5 shadow-2xl p-10 rounded custom-gradient ">

      <form onSubmit={handleSubmit}>
      
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input type="email" name="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="email" required />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
          <input type="password" name="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="password" required />
        </div>
        
        <div className="flex items-start mb-6">
          
          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"><a href="#" className="underline text-blue-600 hover:underline dark:text-blue-500">Forgot Password?</a></label>
        </div>
        <div>
          <h1 className="mb-12 orStyle">or</h1>
          <SocialLogIn></SocialLogIn>

        </div>
        <div className="text-center mt-12">
          <button type="submit" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">LogIn</button>
        </div>
        <h1 className="text-center mt-5 text-sm">New User? <Link className="underline text-blue-500" to={'/register'}>Register here</Link></h1>
      </form>
      

    </div>
    );
};

export default LogIn;