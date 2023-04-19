import React from 'react';
import { AcmeLogo } from './navbar/AcmeLogo'



export function HeroSection() {
    return (
        <div id="platform" className=" grid overflow-hidden grid-cols-1 grid-rows-1 md:grid-rows-1 lg:grid-cols-3 lg:grid-rows-1 gap-x-3.5 mb-0   lg:mb-1 lg:px-20 md:px-10 lg:pb-6 -mb-72 -mt-8 lg:mt-0  ">

            <div className="box lg:row-start-1 row-start-2 lg:mb-10 -mt-64 md:-mt-56 lg:mt-0   ">

                <div className='flex items-center justify-start  '>

                </div>

                <div>

                    <div className='lg:mt-36  ml-8 lg:ml-20 mr-2 lg:mr-0 text-left item-center  '>
                        <h5 className="text-[3rem] lg:text-7xl md:text-[1.8rem] font-bold arkhip text-white item-center ">

                            <span className='hidden md:block lg:hidden'>TOOLS 4 Transaction of Blockchain</span>

                            <span className='lg:text-[3rem] text-3xl tracking-widest border-dotted border-2 border-[#5239fe] rounded-full lg:-p-4  arkhip md:hidden lg:inline 	' >TOOLS 4</span>

                            <br />
                            <div className='flex md:hidden lg:flex'>
                                <span className='lg:text-[3rem] text-3xl lg:mt-4 arkhip md:hidden lg:block	' >Transactions  </span> <br />
                                <svg className='-ml-5 hidden lg:block' width="52" height="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg"><path data-name="arrow-right-Regular" d="M46.648 27.151 31.481 42.318a1.625 1.625 0 0 1-2.297-2.299l12.391-12.393H6.5a1.625 1.625 0 0 1 0-3.25h35.076L29.185 11.984a1.625 1.625 0 1 1 2.297-2.299l15.167 15.167a1.625 1.625 0 0 1-.001 2.299Z" fill="#3417ff" /></svg>
                            </div>
                            <div className='flex -mt-8 lg:mt-0 md:hidden lg:flex'>
                                <span className='arkhip lg:text-[3rem]  text-[1.8rem]' > of Blockchain </span> <br />
                                <div>
                                    <AcmeLogo />
                                </div>
                            </div>

                        </h5>
                    </div>

                    <div className=" mt-1 lg:mt-5 ml-8 lg:ml-20 sm:pr-8 hidden ">
                        <p className=" text-2xl lg:text-5xl text-white arkip ">
                            #1.DTD
                        </p>
                    </div>

                    <div className=" mt-0 lg:mt-8 ml-8  lg:ml-20 sm:pr-8  lg:block md:-mt-4 lg:mt-0">
                        <p className="text-lg text-gray-400 ikaros font-medium ">
                            Tools for a new revolution in <br /> the blockchain industry are coming ...
                        </p>
                    </div>


                    <div className='mt-8   lg:block  items-center pb-12'>
                        <div className='flex  items-center md:space-evently justify-center lg:justify-evently  ' >
                            <a className="inline-flex items-center px-8 py-3 text-white bg-transparent border border-[#0f0f0f] rounded-full hover:bg-transparent  active:text-indigo-500 focus:outline-none focus:ring text-2xl arkhip shadow-2xl" href="/whitepaper.pdf" target="_blank">
                                <span className="text-xl font-medium shadow-xl">
                                    Whitepaper
                                </span>

                                <div className='bg-[#3417ff] p-4 rounded-full ml-4 shadow-xl' >
                                    {/* <BsArrowUpRight /> */}
                                </div>

                            </a>

                            <a href="#footerSection" >
                                <svg className=' shadow lg:ml-24 hidden lg:block  md:block ' width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path fill='#3417ff' d="M21.351 4.117a.571.571 0 0 1-.291-.079c-2.427-1.299-4.525-1.85-7.041-1.85-2.503 0-4.88.617-7.042 1.851-.305.172-.682.052-.859-.266a.678.678 0 0 1 .253-.893A15.411 15.411 0 0 1 14.019.875c2.692 0 5.044.617 7.623 1.995a.656.656 0 0 1 .265.879.618.618 0 0 1-.556.368Zm-18.09 6.891a.641.641 0 0 1-.366-.118.67.67 0 0 1-.152-.919C3.995 8.133 5.587 6.69 7.484 5.679c3.969-2.124 9.051-2.14 13.033-.013 1.897 1.011 3.489 2.441 4.741 4.266a.672.672 0 0 1-.152.919.616.616 0 0 1-.885-.158c-1.137-1.654-2.579-2.953-4.285-3.859-3.628-1.929-8.268-1.929-11.883.013-1.719.919-3.16 2.231-4.298 3.883a.547.547 0 0 1-.494.278Zm7.901 15.844a.583.583 0 0 1-.442-.197c-1.1-1.144-1.697-1.882-2.541-3.467-.875-1.614-1.327-3.583-1.327-5.696 0-3.898 3.211-7.074 7.155-7.074s7.157 3.175 7.157 7.073a.632.632 0 1 1-1.264 0c0-3.176-2.643-5.762-5.891-5.762s-5.893 2.586-5.893 5.762c0 1.89.404 3.636 1.175 5.053.809 1.509 1.367 2.152 2.339 3.176a.693.693 0 0 1 0 .93.68.68 0 0 1-.468.202Zm9.064-2.428c-1.504 0-2.832-.394-3.919-1.168a7.06 7.06 0 0 1-3.008-5.762.633.633 0 1 1 1.264 0 5.703 5.703 0 0 0 2.452 4.672c.897.63 1.947.93 3.211.93a8.061 8.061 0 0 0 1.313-.131c.341-.066.67.171.733.538a.652.652 0 0 1-.518.761 8.328 8.328 0 0 1-1.528.157Zm-2.541 2.701a.711.711 0 0 1-.164-.026c-2.01-.578-3.325-1.352-4.703-2.756-1.77-1.824-2.743-4.253-2.743-6.851 0-2.126 1.745-3.859 3.893-3.859s3.894 1.732 3.894 3.859c0 1.404 1.176 2.546 2.629 2.546s2.629-1.142 2.629-2.546c0-4.948-4.109-8.964-9.165-8.964-3.59 0-6.877 2.074-8.356 5.289-.492 1.063-.746 2.31-.746 3.675 0 1.024.088 2.638.847 4.738.127.341-.038.722-.366.84a.62.62 0 0 1-.809-.383 15.115 15.115 0 0 1-.923-5.195c0-1.575.291-3.008.86-4.253 1.682-3.664 5.411-6.038 9.494-6.038 5.752 0 10.429 4.607 10.429 10.277 0 2.126-1.745 3.859-3.894 3.859s-3.894-1.732-3.894-3.859c.001-1.404-1.175-2.548-2.629-2.548s-2.629 1.142-2.629 2.546c0 2.242.835 4.344 2.364 5.919 1.203 1.234 2.352 1.914 4.134 2.428.341.092.531.459.442.801a.623.623 0 0 1-.594.501Z" /></svg>
                            </a>

                        </div>
                    </div>

                </div>


            </div>

            <div className="box      row-start-1 ">
                <a className="relative block   group rounded-[6rem] lg:py-2  mx-6   " href="">
                    <img
                        src="https://i.postimg.cc/6q8gvrP0/animated-medium20190824-16761-165s0ag.gif"
                        alt='montiStar Gif '
                        className="    absolute inset-0 object-cover w-full h-[50%] transition-opacity opacity-90 lg:h-[100%] rounded-t-full rounded-tl-full rounded-tr-full  "
                    />




                    <div className="relative p-8 ">
                        <img
                            src="/images/logo.png "
                            className='opacity-0	'
                            width={40}
                            alt="Starli alt Logo"
                        />

                        <p className=" tracking-widest	 text-black opacity-0	 nasaFont font-bold text-xl 	">Starli</p>

                        <div className="mt-64">
                            <div
                                className=" transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0 "
                            >
                                <p className="text-lg text-white RighteousFont opacity-0 	">
                                    Social networks are currently very crowded and chaotic <br />
                                    Start your business comprehensively with Starli <br />
                                    Fly to Starli . . .
                                </p>
                            </div>
                        </div>
                    </div>
                </a>



            </div>

            <div className="box   lg:mt-36 -mt-[22rem] md:-mt-[28rem]    lg:pl-6 row-star-3 lg:block hidden  ">
                <div>

                    <div className='mt-0 ml-8 hidden lg:block md:hidden  '>
                        <div className='flex  items-center' >
                            <svg className="w-5 h-5 mr-3 " width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path data-name="arrow-left-Regular" d="M21.75 12a.75.75 0 0 1-.75.75H4.811l5.719 5.72a.75.75 0 0 1-1.06 1.061l-7-7a.75.75 0 0 1 0-1.061l7-7a.75.75 0 0 1 1.06 1.061L4.811 11.25H21a.75.75 0 0 1 .75.75Z" fill='#fefefe' /></svg>

                            <svg className="w-5 h-5 ml-3" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path data-name="arrow-right-Regular" d="m21.53 12.531-7 7a.75.75 0 0 1-1.06-1.061l5.719-5.72H3a.75.75 0 0 1 0-1.5h16.189L13.47 5.531a.75.75 0 1 1 1.06-1.061l7 7a.75.75 0 0 1 0 1.061Z" fill='#fefefe' /></svg>

                        </div>

                    </div>



                    <div className="shadow-lg rounded-full w-80 p-4 bg-[#d6d7db] relative overflow-hidden mt-12 -ml-32 hidden lg:block">
                        <img alt="moto" src="/images/devices.png" className="absolute -right-0 -bottom-12 h-28 w-32 mb-9" />
                        <div className="w-4/6">
                            <p className="text-gray-800 ml-2  mb-2 ikaros font-bold ">
                                Decentralized Transaction Devices.
                            </p>

                        </div>
                    </div>

                    <div className=' mt-8 lg:mt-10  md:-mt-2 mx-8 -mt-8  md:mx-8    ' >
                        {/* <FaqSection /> */}
                        <a
                            href=""
                            class="relative block rounded-sm border-t-4 border-[#0f0f0f] p-8 py-3 shadow-xl" >
                            <p class=" text-sm lg:text-lg md:text-xl font-medium text-gray-500 ikaros font-black text-center">
                                All daily financial transactions on the blockchain
                            </p>
                        </a>


                        <a
                            href=""
                            class="relative block rounded-sm border-t-4 border-[#0f0f0f] p-8 py-3 shadow-xl mt-4" >
                            <p class=" text-sm lg:text-lg md:text-lg font-medium text-gray-500 ikaros font-black text-center">
                                Removal of all old and traditional means of payment and transaction services
                            </p>
                        </a>

                        <a
                            href=""
                            class="relative block rounded-sm border-t-4 border-[#0f0f0f] p-8 py-3 shadow-xl mt-4" >
                            <p class=" text-sm lg:text-lg md:text-xl font-medium text-gray-500 ikaros font-black text-center">
                                Your finger scanner , Your account
                            </p>
                        </a>

                    </div>



                </div>

            </div>

        </div>
    )
}