import { useContext, useState } from "react";
import { Link, NavLink} from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";





const Header = () => {

  const {user,logOut} = useContext(AuthContext);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleDropdownClick = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const handleLogOut =()=>{
    logOut();
  }
  

    const links = <>
       
       <div className="flex gap-5 text-md">
       <NavLink to='/'>Home</NavLink>
        <NavLink to='/appliedJobs'>Applied Jobs</NavLink>
        <NavLink to='/statistics'>Statistics</NavLink>
        <NavLink to='/blog'>Blog</NavLink>
       </div>
    
    </>

    return (
        <div className="navbar bg-base-100 gap-2 p-5">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
            links
        }
      </ul>
    </div>
    <Link className="btn btn-ghost normal-case text-xl" to={'/'}>CareerHub</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}
    </ul>
  </div>
  <div className="navbar-end">
  {user?.email ? (
  <div style={{ position: 'relative' }}>
    <img
      onClick={() => {
        handleDropdownClick();
      }}
      className="w-12 h-12 mb-3 rounded-full shadow-lg"
      src={user.photoURL}
      alt=""
    />
    <div
      id="dropdownInformation"
      className={`absolute z-10 ${isDropdownVisible ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
      style={{ top: '100%', left: '-120px' }}
    >
      <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
        <div>{user.displayName}</div>
        <div className="font-medium truncate">{user.email}</div>
      </div>
      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
        <li>
          <Link to={'/appliedJobs'} href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Applied jobs</Link>
        </li>
        <li>
          <Link to={'/statistics'} href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Statistics</Link>
        </li>
        
      </ul>
      <div className="py-2">
        <a onClick={handleLogOut} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
      </div>
    </div>
  </div>
) : (
  <Link to="/login">
    <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
      Login
    </button>
  </Link>
)}

 
  </div>
</div>
    );
};

export default Header;

/**
<button id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown header <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg>
</button>

<!-- Dropdown menu -->
<div id="dropdownInformation" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
    <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
      <div>Bonnie Green</div>
      <div className="font-medium truncate">name@flowbite.com</div>
    </div>
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
    </ul>
    <div className="py-2">
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
    </div>
</div>
 */


