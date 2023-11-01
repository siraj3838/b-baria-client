import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
    const [downForm, setDownForm] = useState(true)
    const [showPassword, setShowPassword] = useState(false);
    const { createUser, googleLogin } = useContext(AuthContext)
    const registerHandle = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const userDetails = { name, photo, email, password }
        console.log(userDetails)

        createUser(email, password)
            .then(res => {
                console.log(res.user)
                // setCreateSuccess('Registration SuccessFully');
                updateProfile(res.user, {
                    displayName: name,
                    photoURL: photo,
                })
                    .then(() => {
                        toast("Register Successfully")
                        form.reset()
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
            .catch(error => {
                console.log(error)
            })
    }
    const googleLoginHandle = () => {
        googleLogin()
            .then(response => {
                Navigate(location.state ? location?.state : '/')
                console.log(response.user)
            })
            .catch(error => {
                console.log(error)
                // setPasswordError(error.message)
            })

    }



    return (
        <div>
            <Helmet>
                <title>B.Baria Blood Donate | Register</title>
            </Helmet>
            <div className="px-5 lg:px-0">

                {downForm ? <h2 className="text-xl lg:text-4xl font-bold text-center my-3 italic bg-gradient-to-r from-orange-400 to-yellow-700 text-transparent bg-clip-text">Please Click the Button and Register</h2>
                    :
                    <h2 className="text-xl lg:text-4xl font-bold text-center my-3 italic bg-gradient-to-r from-orange-400 to-yellow-700 text-transparent bg-clip-text ">Now You Can Create Account</h2>
                }
                <hr className="lg:mx-96 md:mx-56 mx-10 pb-1" />
                <hr className="lg:mx-96 md:mx-56 mx-10 pb-1" />
                <div className="flex justify-center">
                    {
                        downForm ? <button onClick={() => setDownForm(!downForm)} className="btn btn-outline btn-success">Click Me</button>
                            :
                            ''
                    }
                </div>

                <div className="grid md:grid-cols-2 items-center my-5">
                    <div className="hidden lg:block">
                        <img src="https://i.ibb.co/JcvjzgK/Screenshot-2023-10-31-130606-removebg-preview.png" className="hover:scale-110 transition-all md:w-44 lg:w-[250px]" alt="" />
                    </div>
                    <div className={`${downForm ? 'md:absolute md:right-10 lg:right-56 md:-top-[999px] duration-1000' : 'md:absolute md:right-10 lg:right-56 duration-1000 md:top-80 lg:top-52'}`}>
                        <form onSubmit={registerHandle} className="card-body lg:w-[900px] rounded-lg bg-gradient-to-r from-gray-700 from-10% via-gray-600 via-30% to-gray-400 to-90% text-white">
                            <h3 className="text-2xl font-bold text-center italic border-b-2 border-black pb-2">Register Here</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-lg font-semibold">Full Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-lg font-semibold">Photo</span>
                                    </label>
                                    <input type='file' name="photo"  />
                                </div>
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
                                    <h2 className="absolute mt-14 ml-60 md:ml-60 lg:ml-[350px] cursor-pointer text-black" onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'hide' : 'show'}</h2>
                                    <label className="label">
                                        <a href="#" className="link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                            </div>
                            <p className="lg:text-center text-gray-300">Already have an account?please <Link to={'/login'}><span className="text-xl font-semibold text-white">Login</span></Link></p>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn text-green-100 px-3 py-2 rounded-lg  bg-gradient-to-r from-blue-400 from-10% via-blue-500 via-30% to-blue-700 to-90% text-xl font-bold italic">Register</button>
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

export default Register;