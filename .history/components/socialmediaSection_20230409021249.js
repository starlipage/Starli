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

                            <div class="grid grid-cols-2 row-gap-8 md:grid-cols-4">
                                <div class="text-center md:border-r">
                                    <img src="./images/instagram.svg" className="w-[50%] mx-auto" />
                                </div>
                                <div class="text-center md:border-r">
                                    <img src="./images/twitter.svg" className="w-[50%] mx-auto" />
                                </div>
                                <div class="text-center md:border-r">
                                    <img src="./images/discord.svg" className="w-[50%] mx-auto mt-7" />
                                </div>
                                <div class="text-center flex">
                                    <svg width="36" height="36" viewBox="0 0 1.08 1.08" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M1.08 0v1.08H0V0h1.08ZM.567 1.047H.566l-.003.001H.562l-.003-.001H.557v.001l-.001.019v.001l.001.001.005.003h.001l.005-.003.001-.001v-.001l-.001-.019-.001-.001Zm.012-.005-.008.005-.001.001v.001l.001.019v.001h.001l.009.005.001-.001v-.001l-.001-.028-.001-.001Zm-.032 0a.001.001 0 0 0-.001 0v.001l-.001.028.001.001h.001l.009-.005.001-.001v-.001l.001-.019v-.001l-.001-.001-.008-.004Z" /><path d="M.89.199a.068.068 0 0 1 .093.073L.881.891A.089.089 0 0 1 .75.955 2.526 2.526 0 0 1 .575.851C.544.831.451.767.462.721.472.682.629.535.719.448.754.414.738.394.696.425.592.503.426.622.371.656.323.686.297.691.267.686A.674.674 0 0 1 .119.645C.064.624.066.546.12.524L.89.2Z" fill="#09244B" /></g></svg>
                                    <h6 class="text-4xl font-bold lg:text-3xl text-[#0088CC] ">Telegram</h6>

                                </div>
                            </div>

                        </div>
                    </div>




                </div>
            </section>

        </>

    );
};