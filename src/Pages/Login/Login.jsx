import { NavLink } from "react-router-dom";
import Navbar from "../../Homepage/Navbar/Navbar";


const Login = () => {
    const handleSignin = e =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const loginUser = {email, password}
        console.log(loginUser);
    }


    return (
        <div>
            <div className='bg-cover bg-center min-h-screen '>
        <Navbar></Navbar>


{/* Form */}
<div className="hero min-h-screen ">
    <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignin} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" 
                    name='email'
                    className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" 
                    name='password' 
                    className="input input-bordered" required />

                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
                <label className="label">
                <NavLink to='/register' >Don't have an account? Please <span className='text-blue-800 font-semibold'> Register</span> </NavLink>
                </label>
            </form>
        </div>
    </div>
</div>





</div>
        </div>
    );
};

export default Login;