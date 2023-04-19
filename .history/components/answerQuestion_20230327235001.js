import React from 'react';

function AllQuestionSection() {
    return (
        <>
            <section className="md:py-10 md:mt-8 md:ml-0 ml-4 ">
                <div className="max-w-screen-full mx-auto px-4  gap-x-12 justify-between md:flex md:px-28 lg:items-center py-8" >
                    <div className="max-w-full">
                        <h3 className="text-gray-200  text-2xl md:text-4xl font-semibold lg:text-6xl arkhip lg:ml-8">
                            <span className='font-outline-1 text-transparent'>HAVE</span> YOUR OWN <span className=' text-transparent font-outline-1'>STAR</span>
                        </h3>
                        <h3 className="text-gray-200   text-xl md:text-xl font-semibold lg:text-6xl arkhip lg:ml-8 mt-2 md:mt-5">
                            ANSWER  <span className=' text-transparent font-outline-1'>TO MANY </span> QUESTIONS
                        </h3>

                    </div>
                    <div className="flex-none mt-4 md:mt-0">

                        <a
                            class="inline-flex items-center gap-2 rounded-full border border-[#3417ff] px-4 py-8 text-[#3417ff] "
                            href="/download"
                        >

                            <div className="text-center ">
                                <div className='flex ' >
                                    <svg className='ml-2' fill='#3417ff' width="28" height="28" viewBox="0 0 0.84 0.84" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M.628.407A.035.035 0 0 0 .621.395L.446.22a.035.035 0 0 0-.051.051l.116.116H.245a.035.035 0 0 0 0 .07h.266L.396.572a.035.035 0 0 0 0 .051.035.035 0 0 0 .051 0L.621.447A.035.035 0 0 0 .628.436a.035.035 0 0 0 0-.027Z" /></svg>
                                    <span class="text-md font-black ikaros text-center ">  SID </span>
                                    <svg className='mr-2' fill='#3417ff' width="28" height="28" viewBox="0 0 0.84 0.84" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M.595.385H.329L.444.27A.035.035 0 1 0 .395.22L.219.395a.035.035 0 0 0-.007.012.035.035 0 0 0 0 .026.035.035 0 0 0 .007.012L.394.62a.035.035 0 0 0 .049 0 .035.035 0 0 0 0-.049L.329.455h.266a.035.035 0 0 0 0-.07Z" /></svg>

                                </div>

                                <span class="text-md font-black ikaros text-center"> PLATFORM </span>
                            </div>


                        </a>

                    </div>
                </div>
            </section>

        </>
    )
}


export default AllQuestionSection; 