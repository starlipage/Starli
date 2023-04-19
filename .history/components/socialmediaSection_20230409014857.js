export const SocialmediaSection = () => {
    return (
        <>
            <div className='border-solid border-t-2 border-[#21282e]  px-6 pb-4  mt-1 mx-36' />

            <div className="max-w-3xl mb-4 md:mx-auto sm:text-center lg:max-w-full md:mb-4 mt-8 lg:mt-14 ">
                <h2 className="max-w-full  font-sans text-4xl font-bold leading-none tracking-tight text-[#e2e2e2] sm:text-full md:mx-auto">
                    <span className="relative inline-block  ">

                        <span className="   text-2xl  lg:text-6xl md:text-4xl arkhip font-thin"> Our Information <span className="text-[#e2e2e2]">Media</span></span>
                    </span>{' '}
                </h2>

            </div>


            <section id="commiunity" >

                <div className="px-4 py-16 mx-auto sm:px-6 lg:pl-8 lg:pr-0 lg:mr-0 sm:py-12 max-w-full">

                    <div className="grid grid-cols-1 lg:grid-cols-3  gap-y-8 lg:items-center ml-4">
                        <div className="max-w-xl text-left sm:text-left lg:ml-20">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl ikaros font-black text-white">
                                Starli in the
                                <br className="hidden sm:block lg:block" />
                                <a className="inline-block px-10 py-4 ml-2 lg:mr-2 mt-1 text-sm font-medium text-white bg-gradient-to-tr from-yellow-200 via-green-200 to-green-500 rounded-full transition hover:scale-110 hover:rotate-2 active:bg-indigo-500 focus:outline-none focus:ring" href="/download">
                                </a>
                                Social network for all {' '}
                                <br className="hidden sm:block lg:block" />
                                news and plans
                                <a className="inline-block px-10 py-4 mr-2 lg:ml-2 mt-1 text-sm font-medium text-white bg-gradient-to-tr from-green-300 to-purple-400 rounded-full transition hover:scale-110 hover:rotate-2 active:bg-indigo-500 focus:outline-none focus:ring" href="/download">
                                </a>
                            </h2>




                        </div>

                        <div className="-mx-6 lg:col-span-2 lg:mx-0 ">


                        </div>
                    </div>




                </div>
            </section>

        </>

    );
};