import React from 'react';
import { useState } from 'react';


export function FooterSection() {




    return (
        <footer id="footerSection" className="bg-transparent   mb-4 lg:-mb-3 lg:mt-28">
            <div className="px-4 mx-auto max-w-screen-full sm:px-6 lg:px-32">
                <div className="lg:grid lg:grid-cols-2">
                    <div
                        className="py-16 border-b border-[#0f0f0f] lg:border-b-0 lg:border-l lg:order-last lg:py-24 lg:pb-10 lg:pl-12"
                    >
                        <div className="flex items-center justify-center text-teal-300 lg:hidden">
                            <img
                                src="https://i.postimg.cc/sf4vMSWm/Untitled-1-hero-image-copy.png"
                                className='h-10'

                                alt="Starli alt Logo"
                            />
                            <p className="text-white text-xl marsFont ml-6 " >Starli Platform</p>
                        </div>

                        <div className="mt-12 space-y-4 lg:mt-0">
                            <span className="bg-[#3417ff] rounded lg:h-1 lg:w-10 lg:block"></span>

                            <div className="text-center lg:text-left">
                                <h5 className="text-2xl font-medium text-white marsFont">join us</h5>

                                <p
                                    className="max-w-md mx-auto mt-4 text-xl leading-relaxed text-gray-100 lg:mx-0 UbuntoFont font-bold"
                                >
                                    Be aware of the news <br /> and programs of Starli
                                </p>
                            </div>

                            <form className="mt-6" >
                                <div className="relative max-w-lg mx-auto lg:mx-0">
                                    <label className="sr-only" htmlFor="email"> Email </label>

                                    <input
                                        className="w-full py-4 pl-3 pr-16 text-sm text-white bg-gray-800 border-none rounded-md UbuntoFont "
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        name='message'

                                    />

                                    <button
                                        className="absolute p-3 transition -translate-y-1/2 bg-indigo-600 hover:bg-indigo-700 text-white rounded top-1/2 right-1.5"
                                        type="submit"
                                    >
                                        <svg
                                            className="w-4 h-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="pt-2 md:pt-0 pb-0 lg:pt-24 lg:pr-12">
                        <div className="hidden text-gray-300 lg:flex items-center">

                            <img
                                src="https://i.postimg.cc/sf4vMSWm/Untitled-1-hero-image-copy.png"
                                className='h-10'

                                alt="Starli alt Logo"
                            />
                            <p className="text-white text-xl marsFont ml-6 " >Starli Platform</p>
                        </div>



                        <div
                            className="pt-8 mt-8 text-sm text-white border-t border-[#0f0f0f] lg:mt-12 md:mt-0"
                        >
                            <p className="text-center lg:text-left AlataFont">
                                <a
                                    className="inline-block text-white underline transition hover:text-white/75"
                                    href="/"
                                >
                                    Privacy Policy
                                </a>

                                <span>&middot;</span>

                                <a
                                    className="inline-block text-white underline transition hover:text-white/75"
                                    href="/"
                                >
                                    Terms & Conditions
                                </a>

                                <span>&middot;</span>

                                <a
                                    className="inline-block text-white underline transition hover:text-white/75"
                                    href="/"
                                >
                                    Cookies
                                </a>
                            </p>

                            <p className="mt-4 text-center lg:text-left AlataFont">
                                &copy; 2022 Starli web. All rights reserved.
                            </p>
                        </div>
                    </div>


                </div>
            </div>
        </footer>



    )
}