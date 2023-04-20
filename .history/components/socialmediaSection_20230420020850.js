
import Image from "next/image";
import Link from "next/link";


export const SocialmediaSection = () => {
    return (
        <>
            <div id="commiunity" className='border-solid border-t-2 border-[#21282e]  px-6 pb-4  mt-1 mx-36' />

            <div className="max-w-full text-center mb-4 md:mx-auto sm:text-center lg:max-w-full md:mb-4 mt-8 lg:mt-14 ">
                <h2 className="max-w-full  font-sans text-4xl font-bold leading-none tracking-tight text-[#e2e2e2] sm:text-full mx-auto">
                    <span className="relative inline-block  ">
                        <span className="   text-2xl  lg:text-6xl md:text-4xl arkhip font-thin text-center"> Our Information <span className="text-[#e2e2e2]">Media</span></span>
                    </span>
                </h2>

            </div>


            <section id="commiunity" >

                <div className="px-4 py-16 pt-2 mx-auto sm:px-6 lg:pl-8 lg:pr-0 lg:mr-0 sm:py-12 max-w-full">

                    <div className="grid grid-cols-1 lg:grid-cols-3  gap-y-8 lg:items-center ml-4">
                        <div className="max-w-xl text-left sm:text-left lg:ml-20">
                            <h2 className=" text-xl md:text-3xl font-bold tracking-tight lg:text-2xl ikaros font-black text-white">
                                Starli in the
                                <br className="hidden sm:block lg:block" />
                                <a className="inline-block px-10 py-2 mr-2 md:mr-0 md:py-4 ml-2 lg:mr-2 mt-1 text-sm font-medium text-white bg-gradient-to-tr from-yellow-200 via-green-200 to-green-500 rounded-full transition hover:scale-110 hover:rotate-2 active:bg-indigo-500 focus:outline-none focus:ring" href="/download">
                                </a>
                                Social network for all {' '}
                                <br className="hidden sm:block lg:block" />
                                news and plans
                                <a className="inline-block px-10 py-2 md:py-4 mr-2 lg:ml-2 mt-1 text-sm font-medium text-white bg-gradient-to-tr from-green-300 to-purple-400 rounded-full transition hover:scale-110 hover:rotate-2 active:bg-indigo-500 focus:outline-none focus:ring" href="/download">
                                </a>
                            </h2>




                        </div>

                        <div className=" lg:col-span-2 lg:mx-16 ">

                            <div class="grid grid-cols-2 row-gap-2 md:grid-cols-4">
                                <Link href="https://instagram/starlipage">
                                    <div class="text-center md:border-r">
                                        <Image width={100} height={100} alt="instagram" src="./images/instagram.svg" className="w-[60%] ml-2 md:w-[50%] md:mx-auto" />
                                    </div>
                                </Link>
                                <Link href="https://twitter.com/starlipage">
                                    <div class="text-center md:border-r">
                                        <Image width={100} height={100} alt="twitter" src="./images/twitter.svg" className="w-[60%] -ml-1 md:w-[50%] md:mx-auto" />
                                    </div>
                                </Link>
                                <div class="text-center md:border-r">
                                    <Image width={100} height={100} alt="discord" src="./images/discord.svg" className="w-[60%] ml-2 md:w-[50%] md:mx-auto mt-7 lg:mt-5 md:mt-4" />
                                </div>
                                <Link href="https://t.me/starlipage">
                                    <div class="text-center flex items-center md:ml-8 mt-5 md:mt-0 -ml-1 ">
                                        <svg className="w-6" width="36" height="36" viewBox="0 0 1.08 1.08" xmlns="http://www.w3.org/2000/svg" fill="#0088CC"><path d="M.725.418C.75.393.775.335.671.406a17.811 17.811 0 0 1-.292.197.121.121 0 0 1-.095.002L.149.562S.099.531.184.498L.666.299.875.212S.95.183.943.253C.941.282.924.384.908.493L.856.818S.852.866.817.874A.17.17 0 0 1 .714.837C.706.831.559.738.505.692A.039.039 0 0 1 .507.626 7.619 7.619 0 0 0 .725.419Z" /></svg>
                                        <h6 class="text-md font-bold lg:text-2xl text-[#0088CC] ml-2 ">Telegram</h6>

                                    </div>
                                </Link>
                            </div>

                        </div>
                    </div>




                </div>
            </section>

        </>

    );
};