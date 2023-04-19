export const TitleSection = () => {
    return (
        <div className=" mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-full  lg:px-20 lg:py-4 lg:pb-0">
            <div className="p-8 rounded  sm:p-16">
                <div className="flex flex-col md:flex-row lg:flex-row justify-between ">
                    <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                        <a href="javascript:void(0)" className="inline-flex text-sm ikaros lg:text-md tracking-widest	 font-semibold py-3 px-2  lg:py-4 lg:px-3 text-[#efeff0] bg-[#3417ff] rounded-md ">
                            <span className="mr-4 ml-2 tracking-widest items-center  -mt-1">
                                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#fff" stroke-width="2" d="m12 1.5-9 5v11l9 5 9-5v-11l-9-5Zm0 21v-11m9-5-9 5m0 0-9-5m18 11V12l-4.5 2.5V20l4.5-2.5Zm-18 0V12l4.5 2.5V20L3 17.5Zm9-16L7.5 4 12 6.5 16.5 4 12 1.5Z" /></svg>
                            </span>Sid WEB
                        </a>
                        <h2 className="mt-6 lg:mt-10 arkhip lg:text-6xl font-bold tracking-wide text-white  leading-loose text-2xl">
                            FOCUS ON MORE
                        </h2>
                        <h2 className="lg:mt-6 arkhip lg:text-6xl font-bold tracking-wide text-white   text-2xl ">
                            INTERACTION
                        </h2>
                    </div>


                    <div className="lg:w-2/6 ml-0 md:pl-10 lg:pl-0  ">



                        <div className="grid  row-gap-8 hidden lg:grid md:grid lg:pt-4 ">
                            <div className="flex flex-col justify-center">

                                <div className="grid gap-3 row-gap-8 sm:grid-cols-2 hidden lg:grid   ">
                                    <div>
                                        <div className="flex items-center justify-center w-12 h-12 mb-2 ">
                                            <p className="ikaros text-white font-black lg:text-4xl text-2xl">100K+</p>
                                        </div>
                                        <h6 className="mb-2 font-thin leading-5 text-gray-200 arkhip">
                                            Transaction Per Second
                                        </h6>

                                    </div>
                                    <div>
                                        <div className="flex items-center justify-center w-12 h-12 mb-2 ">
                                            <p className="ikaros text-white font-black lg:text-4xl text-2xl">40K+</p>
                                        </div>
                                        <h6 className="mb-2 font-thin leading-5 text-gray-200 arkhip">
                                            Validator Nodes
                                        </h6>

                                    </div>
                                </div>

                                <div className="max-w-full mb-6 lg:mt-14 md:mt-10  ">
                                    <p className="text-sm text-gray-500 lg:text-lg ikaros font-bold lg:font-thin">
                                        Digital page of your information and resume <br />
                                        Sid for better communication and more interaction <br />
                                        Everything about you in one frame
                                    </p>
                                </div>


                            </div>
                        </div>





                    </div>
                </div>
            </div>
        </div>
    );
};