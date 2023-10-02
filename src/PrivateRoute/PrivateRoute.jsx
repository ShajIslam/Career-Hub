import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();
    //console.log(location);


    useEffect(()=>{
        if(!user){
            localStorage.setItem('location', location.pathname);
        }
    },[user])

    console.log(user);

    if(!user){
        return <Navigate to={'/login'}/>
    }
    


    return children;
};

export default PrivateRoute;