import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <div>
            <ToastContainer></ToastContainer>
            <Navbar></Navbar>
            <div className="max-w-screen-xl mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;