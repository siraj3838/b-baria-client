import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [userInformation, setUserInformation] = useState({})
    const createDonerHandle = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const number = form.number.value;
        const address = form.address.value;
        const city = form.city.value;
        const state = form.state.value;
        const zipCode = form.zipCode.value;
        const dateBirth = form.dateBirth.value;
        const bloodGroup = form.bloodGroup.value;
        const donerUser = { name, email, number, address, city, state, zipCode, dateBirth, bloodGroup }
        console.log(donerUser);

        axios.post('http://localhost:5039/doners', donerUser)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    toast("Doner Account Create Successfully")
                    window.location.reload()
                }
            })
            .catch(error => {
                console.log(error)
            })
    }
    const userEmail = user?.email;
    console.log(userEmail)
    useEffect(() => {
        axios.get('http://localhost:5039/doners')
            .then(res => {
                const realUser = res.data.find(userInfo => userInfo.email == userEmail)
                setUserInformation(realUser)
            })
    }, [userEmail])

    return (
        <div className="my-5 px-5 lg:px-0">
            <Helmet>
                <title>B.Baria Blood Donate | Profile</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                <div className="col-span-1 mt-12 flex justify-center">
                    <div className="space-y-3">
                        <div className="flex justify-center">
                            <img src={user?.photoURL} alt="" className="rounded-full w-60" />
                        </div>
                        <h3 className="text-2xl font-semibold text-center my-3">{user?.displayName}</h3>
                        {userInformation ? <button className="btn lowercase btn-sm w-full ">Edit Profile</button> : ''}
                        {userInformation ? <div className="bg-accent min-h-fit rounded-md text-gray-500 space-y-6 py-5 px-2">
                            <h5 className="text-lg font-semibold border-b-2 border-black">Email: {userInformation.email},</h5>
                            <h5 className="text-lg font-semibold border-b-2 border-black">Phone Number: {userInformation.number},</h5>
                            <h5 className="text-lg font-semibold border-b-2 border-black">Address: {userInformation.address},</h5>
                            <h5 className="text-lg font-semibold border-b-2 border-black">City: {userInformation.city},</h5>
                            <h5 className="text-lg font-semibold border-b-2 border-black">State: {userInformation.state},</h5>
                            <h5 className="text-lg font-semibold border-b-2 border-black">Date OF Birth: {userInformation.dateBirth}</h5>
                            <h5 className="text-lg font-semibold border-b-2 border-black">Blood Group: {userInformation.bloodGroup}</h5>
                        </div>
                    :
                    ''    
                    }
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="bg-orange-200 p-10 rounded-md shadow-2xl">
                        <h4 className="text-3xl mb-5 italic text-center font-bold">Create Doner Profile</h4>

                        <form onSubmit={createDonerHandle} className="px-10">
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-lg font-semibold">Doner Name *</span>
                                </label>
                                <input type="text" defaultValue={user?.displayName} name="name" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-lg font-semibold">Email Address *</span>
                                </label>
                                <input type="email" name="email" defaultValue={user?.email} placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-lg font-semibold">Phone Number</span>
                                </label>
                                <input type="text" name="number" placeholder="Enter your number" className="input input-bordered" required />
                            </div>
                            <div className="grid md:grid-cols-2 gap-5">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-lg font-semibold">Present Address *</span>
                                    </label>
                                    <input type="text" name="address" placeholder="Present Address" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-lg font-semibold">City</span>
                                    </label>
                                    <input type="text" name="city" placeholder="City" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-lg font-semibold">State *</span>
                                    </label>
                                    <input type="text" name="state" placeholder="Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-lg font-semibold">Zip Code</span>
                                    </label>
                                    <input type="text" name="zipCode" placeholder="Zip-Code" className="input input-bordered" required />
                                </div>

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-lg font-semibold">Date of Birth</span>
                                </label>
                                <input type="date" name="dateBirth" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-lg font-semibold">Blood Group</span>
                                </label>
                                <select name="bloodGroup" className="select select-secondary w-full max-w-xs">
                                    <option >Blood Group</option>
                                    <option>O-</option>
                                    <option>O+</option>
                                    <option>B+</option>
                                    <option>B-</option>
                                    <option>AB+</option>
                                    <option>AB-</option>
                                    <option>A+</option>
                                    <option>A-</option>
                                </select>
                            </div>
                            <div className="flex justify-center mt-6">
                                <button type="submit" className="btn text-green-100 px-20 py-2 rounded-lg  bg-gradient-to-r from-blue-400 from-10% via-blue-500 via-30% to-blue-700 to-90% text-xl font-bold italic ">Create Profile</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;