import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function AllUsers() {

    const [userData, setuserData] = useState([]);
    const getUserData = async () => {
        await axios.get(`https://quiz-app-x6vq.onrender.com/studentlist`)
            .then((resp) => {
                setuserData(resp.data.userdata);
            })
    }
    useEffect(() => {
        getUserData();
    }, [])


    // change status of student
    const [actStatus,setStatus]=useState(false)

    const changestatus= async (user_id,status)=>{
        const formData={student_id:user_id,status} 
        setStatus(!actStatus)
        console.log(status);
        await axios.post(`https://quiz-app-x6vq.onrender.com/studentStatusUpdate`,formData)
        .then((res)=>{
            console.log(res.data)
        })
        .catch((error)=>{
            console.log(error);
        })
        getUserData()
    }

    return (
        <>
            <main>
                <div className="customContainer bg-white p-5 rounded-lg mx-auto shadow-sm">
                    <h1 className="text-lg font-semibold col-span-2 border-neutral-200 pb-2">All Register User</h1>
                    
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
                                                        <td className="border  border-gray-300 px-4 py-2 text-blue-600 font-bold cursor-pointer">
                                                            <input type="hidden" value={actStatus} />
                                                            <button onClick={()=>changestatus(v._id,actStatus)} >
                                                            Update
                                                            </button>
                                                        </td>
                                                        <td className="border border-gray-300 px-4 py-2">
                                                            {v.active_status  ? (<span class="p-2 bg-[green] text-white ">Active</span>) : ( <span class="p-2 bg-[red] text-white ">Deactive</span> )}
                                                        </td>
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
