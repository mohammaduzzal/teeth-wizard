import  { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    // console.log(location);


    if(loading){
        return <div className='flex justify-center  min-h-screen'><span className="loading loading-bars loading-lg"></span></div>
    }
    if(!user){
        return <Navigate state={{ from: location.pathname }} to='/login'></Navigate>
    }
    return children
};

export default PrivateRoute;