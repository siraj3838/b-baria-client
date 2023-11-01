/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";


const SecondBanner = () => {
    const [donerCard, setDonerCard] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5039/doners', {
            credentials: 'include'
        })
        .then(res => res.json())
            .then(data => setDonerCard(data))
    }, [])
    return (
        <div>
            <div>
                    <h4 className="text-3xl text-center border border-black py-2 w-96 shadow-2xl mb-10 mx-auto font-bold">Our Generous Doners</h4>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-2xl font-semibold bg-yellow-200 text-center">
                            <th>Name</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Blood Group</th>
                        </tr>
                    </thead>
                    {donerCard.length ? <tbody>

                            {
                                donerCard.map(doner => <tr key={doner._id} className="hover text-xl font-semibold text-center">
                                <td>{doner?.name}</td>
                                <td>{doner?.city}</td>
                                <td>{doner?.state}</td>
                                <td>{doner?.bloodGroup}</td>
                              </tr>)
                            }

                    </tbody>
                    :
                    <tr className="hover text-xl italic font-semibold text-center">
                                <td>Empty Info</td>
                                <td>Empty Info</td>
                                <td>Empty Info</td>
                                <td>Empty Info</td>
                              </tr>
                    }
                </table>

            </div>

        </div>
    );
};

export default SecondBanner;