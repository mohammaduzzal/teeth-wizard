import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Register = () => {
    const {handleRegister,manageProfile} = useContext(AuthContext)
    const [error, setError] = useState('')


    const handleSubmit = e =>{
        e.preventDefault()
        setError('')
        const email = e.target.email.value;
        const password = e.target.password.value;
        const cPassword = e.target.cPassword.value;
        if(password.length < 6 ){
          setError('password must contain six character')
          return
        }
        if(password !== cPassword){
          setError('password did not match')
          return
        }
        if(!/[a-z]/.test(password)){
          setError('password must contain one lowercase letter')
          return
        }
        if(!/[A-Z]/.test(password)){
          setError('password must contain one uppercase letter')
          return
        }
        const name = e.target.name.value;
        const image = e.target.photo.value;
        // console.log('name :', name, 'email :', email, 'password', password, 'cPassword', cPassword, 'photo', photo );
        handleRegister(email,password)
        .then(()=>{
          manageProfile(name,image)
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
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="text" name="photo" placeholder="url" className="input input-bordered" required />
              </div>
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Confirm Password</span>
                </label>
                <input type="password" name="cPassword" placeholder="confirm password" className="input input-bordered" required />
             
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            {error && <p className="text-red-600">{error}</p> }
            <p className="ml-4 mb-4">Already have an account ? <Link className="underline" to='/login'>Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Register;