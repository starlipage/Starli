import React from 'react';

function AllQuestionSection() {
    return (
        <>
            <section className="py-14 mt-8">
                <div className="max-w-screen-full mx-auto px-4  gap-x-12 justify-between md:flex md:px-28 lg:items-center" >
                    <div className="max-w-full">
                        <h3 className="text-gray-200  text-3xl font-semibold md:text-6xl arkhip lg:ml-8">
                            <span className='font-outline-1 text-transparent'>HAVE</span> YOUR OWN <span className=' text-transparent font-outline-1'>STAR</span>
                        </h3>
                        <h3 className="text-gray-200  text-3xl font-semibold md:text-6xl arkhip lg:ml-8 mt-5">
                            ANSWER  <span className=' text-transparent font-outline-1'>TO MANY </span> QUESTIONS
                        </h3>

                    </div>
                    <div className="flex-none mt-4 md:mt-0">

                        <a
                            class="inline-flex items-center gap-2 rounded border border-indigo-600 px-8 py-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                            href="/download"
                        >

                            <svg width="24" height="24" viewBox="0 0 0.72 0.72" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M.538.349a.03.03 0 0 0-.006-.01l-.15-.15a.03.03 0 0 0-.043.043l.099.099H.21a.03.03 0 0 0 0 .06h.228L.339.49a.03.03 0 0 0 0 .043.03.03 0 0 0 .043 0l.15-.15a.03.03 0 0 0 .006-.01.03.03 0 0 0 0-.023Z" /></svg>

                            <div>
                                <span class="text-sm font-black ikaros "> SID </span><br />
                                <span class="text-sm font-black ikaros"> PLATFORM </span>
                            </div>


                            <svg
                                class="h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </a>

                    </div>
                </div>
            </section>

        </>
    )
}


export default AllQuestionSection; 