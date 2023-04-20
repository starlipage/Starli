import React from 'react';
import { AcmeLogo } from './navbar/AcmeLogo'
import { BsArrowUpRight } from 'react-icons/bs';
import Image from 'next/image';



export function HeroSection() {
    return (
        <div id="platform" className=" grid overflow-hidden grid-cols-1 grid-rows-1 md:grid-rows-1 lg:grid-cols-3 lg:grid-rows-1 gap-x-3.5 mb-0   lg:mb-1 lg:px-20 md:px-10 lg:pb-6 -mb-72 -mt-8 lg:mt-0  ">

            <div className="box lg:row-start-1 row-start-2 lg:mb-10 -mt-64 md:-mt-56 lg:mt-0   ">

                <div className='flex items-center justify-start  '>

                </div>

                <div>

                    <div className='lg:mt-20  ml-8 lg:ml-20 mr-2 lg:mr-0 text-left item-center  '>
                        <h5 className="text-[2.8rem] lg:text-7xl md:text-[1.8rem] font-bold arkhip text-white item-center ">

                            <span className='hidden md:block lg:hidden'>TOOLS 4 Interaction  and   Communicate</span>

                            <span className='lg:text-[3rem] text-3xl tracking-widest border-dotted border-2 border-[#5239fe] rounded-full lg:-p-4  arkhip md:hidden lg:inline 	' >TOOLS 4</span>

                            <br />
                            <div className='flex md:hidden lg:flex'>
                                <span className='lg:text-[2.8rem] text-3xl lg:mt-4 arkhip md:hidden lg:block	' >Interaction ,  </span> <br />
                                <svg className='-ml-5 hidden lg:block' width="52" height="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg"><path data-name="arrow-right-Regular" d="M46.648 27.151 31.481 42.318a1.625 1.625 0 0 1-2.297-2.299l12.391-12.393H6.5a1.625 1.625 0 0 1 0-3.25h35.076L29.185 11.984a1.625 1.625 0 1 1 2.297-2.299l15.167 15.167a1.625 1.625 0 0 1-.001 2.299Z" fill="#3417ff" /></svg>
                            </div>
                            <div className='flex -mt-8 lg:mt-0 md:hidden lg:flex'>
                                <span className='arkhip lg:text-[2.8rem]  text-[1.8rem]' > Communicate </span> <br />
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
                        <p className="text-base text-gray-400 ikaros font-medium ">
                            With STARLI platform <br /> Join the stars and interact better ...
                        </p>
                    </div>


                    <div className='mt-8   lg:block  items-center pb-12'>
                        <div className='flex  items-center md:space-evently justify-center lg:justify-center  ' >
                            <a className="inline-flex items-center px-8 pr-4 py-2 text-white bg-transparent border border-[#0f0f0f] rounded-full hover:bg-transparent  active:text-indigo-500 focus:outline-none focus:ring text-2xl arkhip shadow-2xl" href="/whitepaper.pdf" target="_blank">
                                <span className="text-xl font-medium shadow-xl">
                                    ABOUT STARLI
                                </span>

                                <div className='bg-[#3417ff] p-4 rounded-full ml-6 shadow-xl' >
                                    <BsArrowUpRight />
                                </div>

                            </a>



                        </div>
                    </div>

                </div>


            </div>

            <div className="box      row-start-1 ">
                <a className="relative block   group rounded-[6rem] lg:py-2  mx-6   " href="">
                    <Image
                        width={500}
                        height={90}
                        unoptimized={true}
                        src="https://i.postimg.cc/6q8gvrP0/animated-medium20190824-16761-165s0ag.gif"
                        alt='montiStar Gif '
                        className="    absolute inset-0 object-cover w-full h-[50%] transition-opacity opacity-90 lg:h-[83%] rounded-t-full rounded-tl-full rounded-tr-full  "
                    />




                    <div className="relative p-8 ">
                        <Image

                            height={100}
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

            <div className="box   lg:mt-24 -mt-[22rem] md:-mt-[28rem]    lg:pl-6 row-star-3 lg:block hidden  ">
                <div>

                    <div className='mt-0 ml-8 hidden lg:block md:hidden  '>
                        <div className='flex  items-center' >
                            <svg className="w-5 h-5 mr-3 " width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path data-name="arrow-left-Regular" d="M21.75 12a.75.75 0 0 1-.75.75H4.811l5.719 5.72a.75.75 0 0 1-1.06 1.061l-7-7a.75.75 0 0 1 0-1.061l7-7a.75.75 0 0 1 1.06 1.061L4.811 11.25H21a.75.75 0 0 1 .75.75Z" fill='#fefefe' /></svg>

                            <svg className="w-5 h-5 ml-3" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path data-name="arrow-right-Regular" d="m21.53 12.531-7 7a.75.75 0 0 1-1.06-1.061l5.719-5.72H3a.75.75 0 0 1 0-1.5h16.189L13.47 5.531a.75.75 0 1 1 1.06-1.061l7 7a.75.75 0 0 1 0 1.061Z" fill='#fefefe' /></svg>

                        </div>

                    </div>



                    <div className="shadow-lg rounded-full w-80 p-4 bg-[#d6d7db] relative overflow-hidden mt-8 -ml-32 hidden lg:block">
                        <Image width={100} height={100} alt="moto" src="/images/devices.png" className="absolute -right-0 -bottom-12 h-28 w-32 mb-9" />
                        <div className="w-4/6">
                            <p className="text-gray-800 ml-2  mb-2 ikaros font-bold text-sm ">

                                A tool for better interaction
                            </p>

                        </div>
                    </div>

                    <div className=' mt-8 lg:mt-10  md:-mt-2 mx-8 -mt-8  md:mx-8 lg:mx-0    ' >
                        {/* <FaqSection /> */}
                        <a
                            href=""
                            class="relative block rounded-sm border-t-4 border-[#0f0f0f] p-8 px-0 py-3 shadow-xl" >
                            <p class=" text-sm lg:text-base md:text-xl font-medium text-gray-500 ikaros font-black text-center">
                                Using Sid in Social media to introduce yourself
                            </p>
                        </a>


                        <a
                            href=""
                            class="relative block rounded-sm border-t-4 border-[#0f0f0f] p-8 px-0 py-3 shadow-xl mt-4" >
                            <p class=" text-sm lg:text-base md:text-lg font-medium text-gray-500 ikaros font-black text-center">
                                Use Sid as a work and personal resume page
                            </p>
                        </a>

                        <a
                            href=""
                            class="relative block rounded-sm border-t-4 border-[#0f0f0f] p-8 lg:px-2 py-3 shadow-xl mt-4" >
                            <p class=" text-sm lg:text-base md:text-xl font-medium text-gray-500 ikaros font-black text-center">
                                Advanced tools to interact and communicate with others

                            </p>
                        </a>

                    </div>



                </div>

            </div>

        </div>
    )
}