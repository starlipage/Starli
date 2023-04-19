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

                            <svg width="36" height="36" viewBox="0 0 1.08 1.08" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M.807.523A.045.045 0 0 0 .798.508L.573.283a.045.045 0 0 0-.065.065l.149.149H.315a.045.045 0 0 0 0 .09h.342L.509.735a.045.045 0 0 0 0 .065.045.045 0 0 0 .065 0L.799.575A.045.045 0 0 0 .808.56a.045.045 0 0 0 0-.035Z" /></svg>

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