import { useContext } from "react";
import SocialLogIn from "../Components/SocialLogIn/SocialLogIn";
import './Register.css'
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import '../Components/Home/Home.css'






const Register = () => {




  const {emailPassSignIn, logOut} = useContext(AuthContext);



  const handleSubmit = (e) => {

    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    

      emailPassSignIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        toast.success('User Created Successfully!')
        logOut();

        
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        toast.error("please try again")
      })



  }

  return (
    <div >
      <div className="max-w-md mx-auto mt-5 shadow-2xl p-10 rounded custom-gradient " >

<form onSubmit={handleSubmit}>
<div className="mb-6">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
    <input type="text" name="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name" required />
  </div>
  <div className="mb-6">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" name="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="email" required />
  </div>
  <div className="mb-6">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" name="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="password" required />
  </div>
  
  <div className="flex items-start mb-6">
    <div className="flex items-center h-5">
      <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
  </div>
  <div>
    <h1 className="mb-12 orStyle">or</h1>
    <SocialLogIn></SocialLogIn>

  </div>
  <div className="text-center mt-10">
    <button type="submit" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
  </div>
  <h1 className="text-center mt-5 text-sm">Already have an acoount? <Link className="underline text-blue-500" to={'/login'}>LogIn</Link></h1>
</form>


</div>
    </div>
  );
};

export default Register;