import { Link } from "react-router-dom"
import Widget, { Graph } from "./Widget"

function Home() {
    return (
        <>
            <main>
                <section className="my-4">
                    <div className="customContainer bg-white p-5 rounded-lg mx-auto shadow-sm">
                        <h2 className="text-2xl font-bold">Welcome,</h2>
                        <p>Admin</p>
                    </div>
                </section>
                <section className="my-4">
                   
                    <div className="customContainer bg-white p-5 rounded-lg mx-auto shadow-sm">
                        <p className="text-lg font-semibold mb-3 col-span-2 border-neutral-200">All Question</p>
                        <div className="grid gap-2">
                            <Link to={'#'} className="relative text-sm border rounded-lg shadow-md p-4 grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 gap-1 hover:translate-x-2 duration-200">
                                <div className="space-y-1">
                                    <p><span className="font-medium text-neutral-400 me-2">Question: </span>What is Question ?</p>
                                    <p><span className="font-medium text-neutral-400 me-2">Answer: </span>Lorem ipsum</p>
                                </div>
                            </Link>

                            <Link to={'#'} className="relative text-sm border rounded-lg shadow-md p-4 grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 gap-1 hover:translate-x-2 duration-200">
                                <div className="space-y-1">
                                    <p><span className="font-medium text-neutral-400 me-2">Question: </span>What is Question ?</p>
                                    <p><span className="font-medium text-neutral-400 me-2">Answer: </span>Lorem ipsum</p>
                                </div>
                            </Link>

                        </div>

                        <div className="mt-5 flex gap-2 justify-end items-center text-xs">
                            <span className="block font-medium">Page 1 of 1</span>
                            <div className="space-x-1">
                                <button title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow">
                                    <i className="fa-solid fa-angle-left"></i>
                                </button>
                                <button title="next" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow">
                                    <i className="fa-solid fa-angle-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}

export default Home