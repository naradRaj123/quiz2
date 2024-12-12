import { Link } from "react-router-dom"

function AllUsers() {
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
                    <div className="grid gap-2">
                            <Link to={'#'} className="relative text-sm border rounded-lg shadow-md p-4 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-1 hover:translate-x-2 duration-200">
                                <div className="space-y-1">
                                    <p><span className="font-medium text-neutral-400 me-2">Name: </span>Lorem Ipsum</p>
                                    <p><span className="font-medium text-neutral-400 me-2">Mobile: </span>1234567890</p>
                                </div>
                                <div className="space-y-1">
                                    <p><span className="font-medium text-neutral-400 me-2">Email: </span>user@gmail.com</p>
                                    <p><span className="font-medium text-neutral-400 me-2">Gender: </span>Male </p>
                                </div>
                                
                                <div className="space-y-1">
                                    <p><span className="font-medium text-neutral-400 me-2">Qualification: </span>12th</p>
                                    <p className="flex items-center " ><span className="font-medium  text-neutral-400 me-2">Image: </span><img src="/img/fraud.png" alt="" className="w-24" /></p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-blue text-bold "><span className="font-medium text-neutral-400 me-2">Action: </span>Edit</p>
                                    <p><span className="font-medium text-neutral-400 me-2">Status: </span>Active </p>
                                </div>
                            </Link>


                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default AllUsers
