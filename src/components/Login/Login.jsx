import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const {handleGoogleLogin,handleLogin} = useContext(AuthContext)
    const [error, setError] = useState('')
    const location = useLocation()
    // console.log(location);
    const navigate = useNavigate()
    

    const handleSubmit = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
       
        // console.log( 'email :', email, 'password', password );
        handleLogin(email,password)
        .then(()=>{
          navigate(location.state?.from || '/')
        })
        .catch((error)=>{
          setError(error.message )
        })
    }
    const handleGoogle = ()=>{
      handleGoogleLogin()
      .then(()=>{
        navigate(location.state?.from || '/')
      })
      .catch((error)=>{
        setError(error.message)
      })

    }



    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold">Login now!</h1>
           
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
             
              </div>
             
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                {error && <p className="text-red-600">{error}</p>}
              </div>
              
              <p className="text-center">or</p>
              
              <button onClick={handleGoogle} className="btn btn-primary block items-center">Login with google</button>
            </form>
            <p className="ml-4 mb-4">New to this website  ? please <Link className="underline" to='/register'>Register</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Login;