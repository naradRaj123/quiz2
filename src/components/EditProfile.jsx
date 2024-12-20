import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function EditProfile() {

    const pathData = useParams();
    const studentId=pathData.user_id;

    const [allData,setData]=useState([''])

    const getUserData = async () => {
        await axios.post(`https://quiz-app-x6vq.onrender.com/studentbyid`,{
            studentId
        })
        .then((resp) => {
            setData(resp.data.userData);
            console.log(resp)
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    useEffect(() => {
        getUserData();
    }, [studentId])

    console.log(allData)


    return (
        <>
            <section className="py-4">
                <form className="customContainer bg-white p-5 rounded-lg mx-auto shadow-sm">
                    <h2 className="text-2xl font-semibold border-b border-neutral-200 pb-3">Edit Profile</h2>
                    <div className='space-y-3 my-4'>
                        <div className="w-full flex flex-col gap-2">
                            <label className="font-semibold text-xs text-gray-500 ">Full Name</label>
                            <input type="text" value={allData.name} className="border rounded-lg px-3 py-2 text-sm w-full outline-none dark:border-gray-200 dark:bg-gray-100" placeholder="John Doe" />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label className="font-semibold text-xs text-gray-500 ">Mobile</label>
                            <input type="number" value={allData.mobileNo} className="border rounded-lg px-3 py-2 text-sm w-full outline-none dark:border-gray-200 dark:bg-gray-100" placeholder="9876543210" />
                        </div>
                    </div>
                    <hr />
                    <div className='space-y-3 my-4'>
                        <div className="w-full flex flex-col gap-2">
                            <label className="font-semibold text-xs text-gray-500 ">Firm Name</label>
                            <input type="text" value={allData.email} className="border rounded-lg px-3 py-2 text-sm w-full outline-none dark:border-gray-200 dark:bg-gray-100" placeholder="Company name" />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label className="font-semibold text-xs text-gray-500 ">Qualification</label>
                            <input type="text" value={allData.qualification} className="border rounded-lg px-3 py-2 text-sm w-full outline-none dark:border-gray-200 dark:bg-gray-100" placeholder="Qualification" />
                        </div>
                        {/* <div className="w-full flex flex-col gap-2">
                            <label className="font-semibold text-xs text-gray-500 ">PAN Card No.</label>
                            <input type="text" className="border rounded-lg px-3 py-2 text-sm w-full outline-none dark:border-gray-200 dark:bg-gray-100" placeholder="DSKPA123456" />
                        </div> */}
                    </div>
                    <div className='mt-4'>
                        <button className='bg-blue text-white p-2 px-5 rounded-lg font-semibold text-sm'>SUBMIT</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default EditProfile
