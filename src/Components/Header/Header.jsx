import { Link, NavLink} from "react-router-dom";





const Header = () => {

  

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
    <a className="btn btn-ghost normal-case text-xl">CareerHub</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}
    </ul>
  </div>
  <div className="navbar-end">
  <Link to={'/register'}><button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Register or Login</button></Link>
  </div>
</div>
    );
};

export default Header;