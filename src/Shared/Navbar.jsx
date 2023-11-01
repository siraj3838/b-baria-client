import { NavLink } from "react-router-dom";
import { BiSolidMessage } from 'react-icons/bi';
import { MdBloodtype } from 'react-icons/md';
import { FaUserPen } from 'react-icons/fa6';
import { FaHome } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext);

    const navList = <>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-gray-100 px-3 py-2 rounded-lg hover:text-gray-300 bg-gradient-to-r from-blue-500 from-10% via-blue-500 via-30% to-blue-700 to-90% " : " text-gray-100 px-3 py-2 rounded-lg hover:text-gray-300 bg-gradient-to-r from-gray-700 from-10% via-gray-600 via-30% to-gray-400 to-90%"
            }
        >
            <div className="flex gap-2 items-center justify-center">
                <p>Home</p>
                <p className="text-2xl"><FaHome></FaHome></p>
            </div>
        </NavLink>
        <NavLink
            to="/doner"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-gray-100 px-3 py-2 rounded-lg hover:text-gray-300 bg-gradient-to-r from-blue-500 from-10% via-blue-500 via-30% to-blue-700 to-90% " : " text-gray-100 px-3 py-2 rounded-lg hover:text-gray-300 bg-gradient-to-r from-gray-700 from-10% via-gray-600 via-30% to-gray-400 to-90%"
            }
        >
            <div className="flex gap-2 items-center justify-center">
                <p>Doner</p>
                <p className="text-2xl"><MdBloodtype></MdBloodtype></p>
            </div>
        </NavLink>
        <NavLink
            to="/profile"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-gray-100 px-3 py-2 rounded-lg hover:text-gray-300 bg-gradient-to-r from-blue-500 from-10% via-blue-500 via-30% to-blue-700 to-90% " : " text-gray-100 px-3 py-2 rounded-lg hover:text-gray-300 bg-gradient-to-r from-gray-700 from-10% via-gray-600 via-30% to-gray-400 to-90%"
            }
        >
            <div className="flex gap-2 items-center justify-center">
                <p>Profile</p>
                <p className="text-2xl "><FaUserPen></FaUserPen></p>
            </div>
        </NavLink>
        <NavLink
            to="/message"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-white px-3 py-2 rounded-lg hover:text-green-300 bg-gradient-to-r from-blue-500 from-10% via-blue-500 via-30% to-blue-700 to-90% " : " text-green-400 px-3 py-2 rounded-lg hover:text-green-300 bg-gradient-to-r from-gray-700 from-10% via-gray-600 via-30% to-gray-400 to-90%"
            }
        >
            <div className="flex gap-2 items-center justify-center">
                <p>Chat</p>
                <p className="text-2xl"><BiSolidMessage></BiSolidMessage></p>
            </div>
        </NavLink>


    </>
    const handleLoggedOut = () => {
        logoutUser()
        .then(()=>{
            toast("Logout Successfully");
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    return (
        <div className="bg-gradient-to-r from-gray-700 from-10% via-gray-600 via-30% to-gray-400 to-90% pb-4 lg:pb-0">
            <div className="grid lg:grid-cols-3 max-w-screen-xl mx-auto space-y-5 lg:space-y-0 lg:mt-7 md:px-10 lg:px-0 text-center">
                <div className="flex justify-center items-center lg:justify-start">
                    <img className="w-[95px]" src="https://i.ibb.co/fGCZHTW/images-4-removebg-preview-1.png" alt="" />
                    <img className="w-28 lg:left-[188px] rotate-45 lg:top-2 lg:absolute" src="https://i.ibb.co/9447P3Y/78982199-removebg-preview.png" alt="" />
                </div>

                <div className="gap-6 grid grid-cols-3 justify-center md:grid-cols-4 items-center text-sm font-semibold px-5 md:px-0">
                    {navList}
                </div>

                <div className="flex items-center justify-center lg:justify-end">
                    {
                        user ? <button onClick={handleLoggedOut} className="btn btn-accent">LogOut</button> 
                        :
                        <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? " hover:text-green-300 text-green-100 px-3 py-2 rounded-lg  bg-gradient-to-r from-blue-400 from-10% via-blue-500 via-30% to-blue-700 to-90% text-2xl font-bold" : "text-white px-3 py-2 rounded-lg bg-gradient-to-r from-gray-500 from-10% via-gray-600 via-30% to-gray-700 to-90% hover:text-green-300 lg:text-2xl font-bold"
                        }
                    >
                        Login
                    </NavLink> 
                    }
                </div>

            </div>

        </div>
    );
};

export default Navbar;