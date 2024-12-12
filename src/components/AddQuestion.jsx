function AddQuiz() {
    return (
        <>
            <section className="customContainer bg-white p-5 rounded-lg mb-5 shadow-sm">
                <div className="rounded-xl">
                    <img src="/img/question-mark.png" alt="" className="w-24" />
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-800 md:text-2xl">
                        Add Quiz
                    </h1>
                    <form action="">
                        <div className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 gap-x-4 mt-5" >
                            <div>
                                <div className="flex flex-col gap-2">
                                    <label className="font-semibold text-xs text-gray-500 ">Question</label>
                                    <input className="border rounded-lg px-3 py-2 mb-4 text-black text-sm w-full outline-none dark:border-gray-300 dark:bg-gray-100" placeholder="What is question ?" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="font-semibold text-xs text-gray-500 ">Option A.</label>
                                    <input className="border rounded-lg px-3 py-2 mb-4 text-black text-sm w-full outline-none dark:border-gray-300 dark:bg-gray-100" placeholder="Option A" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="font-semibold text-xs text-gray-500 ">Option B.</label>
                                    <input className="border rounded-lg px-3 py-2 mb-4 text-black text-sm w-full outline-none dark:border-gray-300 dark:bg-gray-100" placeholder="Option B" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="font-semibold text-xs text-gray-500 ">Option C.</label>
                                    <input className="border rounded-lg px-3 py-2 mb-4 text-black text-sm w-full outline-none dark:border-gray-300 dark:bg-gray-100" placeholder="Option C" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="font-semibold text-xs text-gray-500 ">Option D.</label>
                                    <input className="border rounded-lg px-3 py-2 mb-4 text-black text-sm w-full outline-none dark:border-gray-300 dark:bg-gray-100" placeholder="Option D" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="font-semibold text-xs text-gray-500 ">Correct Option.</label>
                                    <input className="border rounded-lg px-3 py-2 mb-4 text-black text-sm w-full outline-none dark:border-gray-300 dark:bg-gray-100" placeholder="Correct Answer" />
                                </div>

                            </div>
                           
                        </div>
                        <div>
                            <button type="submit" className="w-full text-white bg-blue hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue dark:hover:bg-primary-700 dark:focus:ring-primary-800">ADD QUESTION</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default AddQuiz
