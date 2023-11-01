import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
    const [downForm, setDownForm] = useState(true)
    const [showPassword, setShowPassword] = useState(false);
    const { loggedInUser, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const loginHandle = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;


        loggedInUser(email, password)
            .then(response => {
                const loggedInUser = response.user;
                console.log(loggedInUser)

                toast("Login Successfully")
                navigate(location.state ? location?.state : '/');

            })
            .catch(error => {
                console.log(error)
            })
    }

    const googleLoginHandle = () => {
        googleLogin()
            .then(response => {
                toast("Login Successfully")
                navigate(location.state ? location?.state : '/');
                console.log(response.user)
            })
            .catch(error => {
                console.log(error)
            })
        }
    return (
        <div>
            <Helmet>
                <title>B.Baria Blood Donate | Login</title>
            </Helmet>
            <div className="px-5 lg:px-0">
                {downForm ? <h2 className="text-xl lg:text-4xl font-bold text-center my-3 italic bg-gradient-to-r from-orange-400 to-yellow-700 text-transparent bg-clip-text">Please Click the Button and Log In</h2>
                    :
                    <h2 className="text-xl lg:text-4xl font-bold text-center my-3 italic bg-gradient-to-r from-orange-400 to-yellow-700 text-transparent bg-clip-text ">Now You Can Log In</h2>  
            }
            <hr className="lg:mx-96 md:mx-56 mx-10 pb-1"/>
            <hr className="lg:mx-96 md:mx-56 mx-10 pb-1"/>
                <div className="flex justify-center">
                    {
                        downForm ? <button onClick={() => setDownForm(!downForm)} className="btn btn-outline btn-success">Click Me</button>
                            :
                            ''
                    }
                </div>
                <div className="grid md:grid-cols-2 items-center gap-4 my-5">
                    <div>
                        <img src="https://i.ibb.co/VQPVtxj/Screenshot-2023-10-31-113214-removebg-preview.png" className="hover:scale-110 transition-all" alt="" />
                    </div>
                    <div className={`${downForm ? 'md:absolute md:right-10 lg:right-56 md:-top-[999px] duration-1000' : 'md:absolute md:right-10 lg:right-56 duration-1000 md:top-80 lg:top-52'}`}>
                        <form onSubmit={loginHandle} className="card-body lg:w-[450px] rounded-lg bg-gradient-to-r from-gray-700 from-10% via-gray-600 via-30% to-gray-400 to-90% text-white">
                            <h3 className="text-2xl font-bold text-center italic border-b-2 border-black pb-2">Login Here</h3>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-lg font-semibold">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control text-black">
                                <label className="label">
                                    <span className="text-lg font-semibold text-white">Password</span>
                                </label>
                                <input type={showPassword ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered relative" required />
                                    <h2 className="absolute mt-14 ml-56 md:ml-52 lg:ml-[340px] cursor-pointer" onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'hide' : 'show'}</h2>
                                <label className="label">
                                    <a href="#" className="link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <p className="text-gray-300">Are you new here?please <Link to={'/register'}><span className="text-xl font-semibold text-white">Register</span></Link></p>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn text-green-100 px-3 py-2 rounded-lg  bg-gradient-to-r from-blue-400 from-10% via-blue-500 via-30% to-blue-700 to-90% text-xl font-bold italic">Login</button>
                                <p className="py-3 text-center font-medium">Or</p>
                                <button onClick={googleLoginHandle} className="btn text-gray-500 bg-[#fff] text-2xl font-bold italic"><FcGoogle></FcGoogle><span className="-ml-2">oogle</span></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;