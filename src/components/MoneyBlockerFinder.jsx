import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function AllUsers() {

    const [userData, setuserData] = useState([]);
    const getUserData = async () => {
        await axios.get(`https://quiz-app-x6vq.onrender.com/studentlist`)
            .then((resp) => {
                console.log(resp.data.userdata);
                setuserData(resp.data.userdata);
            })
    }

    useEffect(() => {
        getUserData();
    }, [])

    return (
        <>
            <main>
                <div className="customContainer bg-white p-5 rounded-lg mx-auto shadow-sm">
                    <h1 className="text-lg font-semibold col-span-2 border-neutral-200 pb-2">All Register User</h1>
                    {/* <div className='grid grid-cols-6 gap-2'>
            <div className="w-full flex flex-col gap-1">
            <label className="font-semibold text-xs text-gray-500">Name</label>
            <input type="text" className="border rounded-lg px-3 py-2 text-sm w-full outline-none dark:border-gray-200 dark:bg-gray-100" placeholder="John Doe" />
            </div>
            <div className="w-full flex flex-col gap-1">
            <label className="font-semibold text-xs text-gray-500">PAN Card No.</label>
            <input type="text" className="border rounded-lg px-3 py-2 text-sm w-full outline-none dark:border-gray-200 dark:bg-gray-100" placeholder="DSKPA123456" />
            </div>
            <div className="w-full flex flex-col gap-1">
            <label className="font-semibold text-xs text-gray-500">Aadhar Card No.</label>
            <input type="text" className="border rounded-lg px-3 py-2 text-sm w-full outline-none dark:border-gray-200 dark:bg-gray-100" placeholder="12345678905454" />
            </div>
            <div className="w-full flex flex-col gap-1">
            <label className="font-semibold text-xs text-gray-500">GST No.</label>
            <input type="text" className="border rounded-lg px-3 py-2 text-sm w-full outline-none dark:border-gray-200 dark:bg-gray-100" placeholder="22AAAAA0000A1Z5" />
            </div>
            <div className="w-full flex flex-col gap-1">
            <label className="font-semibold text-xs text-gray-500">Mobile</label>
            <input type="text" className="border rounded-lg px-3 py-2 text-sm w-full outline-none dark:border-gray-200 dark:bg-gray-100" placeholder="9876543210" />
            </div>
            <div className="col-span-5">
            <button className="h-full border-2 text-gray-400 font-bold py-2 px-4 rounded-md"><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
            </div> */}
                </div>
                <div className="customContainer  flex items-center bg-white justify-center  p-5 rounded-lg mx-auto shadow-sm mt-5">

                    <div className=" w-full   ">
                        {/* <p className="text-sm">No data found</p> */}
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full border-collapse border border-gray-300 shadow-md">
                                <thead>
                                    <tr className="bg-gray-100 text-left">
                                        <th className="border border-gray-300 px-4 py-2">Name</th>
                                        <th className="border border-gray-300 px-4 py-2">Mobile</th>
                                        <th className="border border-gray-300 px-4 py-2">Email</th>
                                        <th className="border border-gray-300 px-4 py-2">Gender</th>
                                        <th className="border border-gray-300 px-4 py-2">Qualification</th>
                                        <th className="border border-gray-300 px-4 py-2">Image</th>
                                        <th className="border border-gray-300 px-4 py-2">Action</th>
                                        <th className="border border-gray-300 px-4 py-2">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userData.length ? (
                                        userData.map((v, i) => {
                                            return (
                                                <>
                                                    <tr className="hover:bg-gray-50 duration-200">
                                                        <td className="border border-gray-300 px-4 py-2">{v.name}</td>
                                                        <td className="border border-gray-300 px-4 py-2">{v.mobileNo}</td>
                                                        <td className="border border-gray-300 px-4 py-2">{v.email}</td>
                                                        <td className="border border-gray-300 px-4 py-2">{v.gender}</td>
                                                        <td className="border border-gray-300 px-4 py-2">{v.qualification}</td>
                                                        <td className="border border-gray-300 px-4 py-2">
                                                            <img src="/img/fraud.png" alt="User" className="w-24" />
                                                        </td>
                                                        <td className="border border-gray-300 px-4 py-2 text-blue-600 font-bold cursor-pointer">
                                                            Edit
                                                        </td>
                                                        <td className="border border-gray-300 px-4 py-2">Active</td>
                                                    </tr>
                                                </>
                                            )
                                        })

                                    ) : (
                                        <>
                                            <tr className="w-full">
                                                <td colSpan="8" className="border border-gray-300 px-4 py-2 text-center">
                                                    No data available
                                                </td>
                                            </tr>
                                        </>
                                    )}

                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </main>
        </>
    )
}

export default AllUsers
