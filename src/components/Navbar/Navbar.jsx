import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="min-h-20 bg-blue-900 text-white flex justify-between items-center">
            <div>
               <h2 className="text-xl font-extrabold ml-4">TEETH WIZARD</h2> 
            </div>

            <div>
                <NavLink className='ml-1 md:ml-3' to='/'>Home</NavLink>
                <NavLink className='ml-1 md:ml-3' to='/treatment'>All Treatments</NavLink>
                <NavLink className='ml-1 md:ml-3' to='/appointment'>My appointment</NavLink>
                <NavLink className='ml-1 md:ml-3' to='/profile'>Profile</NavLink>
            </div>
            <div className="mr-4">
                <NavLink to='/login'>
                <button className="btn btn-primary">Login</button>
                </NavLink>
            </div>
            
        </div>
    );
};

export default Navbar;