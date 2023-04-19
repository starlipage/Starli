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
                            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.014 32" width="29.014" height="32" fill="#ececec" className="mr-4">
                                <g id="Layer_1-2" data-name="Layer 1">
                                    <path class="cls-1" d="m22.499 31.986 4.237-1.991a.139.139 0 0 0 .064-.19l-2.832-5.502a.09.09 0 0 0-.086-.05l-4.837.183a.093.093 0 0 0-.083.133l3.349 7.352a.139.139 0 0 0 .187.068Z" /><path class="cls-1" d="M21.208 18.187 13.627.022c-.011-.029-.053-.029-.068 0L.022 29.621a.249.249 0 0 0 .104.32l3.518 1.977a.245.245 0 0 0 .345-.108c.895-1.883 7.378-14.062 23.096-7.827.072.029.155 0 .187-.075.266-.636 1.452-3.45 1.729-4.104a.141.141 0 0 0-.083-.19c-.787-.287-4.75-1.671-7.711-1.426ZM9.457 20.192l4.144-9.217 2.817 7.054s-4.277.244-6.957 2.167Z" /></g>
                            </svg>
                            <p className="text-white text-2xl arkhip ml-6 " >STARLI</p>
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

                            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.014 32" width="29.014" height="32" fill="#ececec" className="mr-4">
                                <g id="Layer_1-2" data-name="Layer 1">
                                    <path class="cls-1" d="m22.499 31.986 4.237-1.991a.139.139 0 0 0 .064-.19l-2.832-5.502a.09.09 0 0 0-.086-.05l-4.837.183a.093.093 0 0 0-.083.133l3.349 7.352a.139.139 0 0 0 .187.068Z" /><path class="cls-1" d="M21.208 18.187 13.627.022c-.011-.029-.053-.029-.068 0L.022 29.621a.249.249 0 0 0 .104.32l3.518 1.977a.245.245 0 0 0 .345-.108c.895-1.883 7.378-14.062 23.096-7.827.072.029.155 0 .187-.075.266-.636 1.452-3.45 1.729-4.104a.141.141 0 0 0-.083-.19c-.787-.287-4.75-1.671-7.711-1.426ZM9.457 20.192l4.144-9.217 2.817 7.054s-4.277.244-6.957 2.167Z" /></g>
                            </svg>
                            <p className="text-white text-2xl arkhip ml-6 " >STARLI</p>
                        </div>



                        <div
                            className="pt-8 mt-8 text-sm text-white border-t border-[#0f0f0f] lg:mt-12 md:mt-0"
                        >
                            <p className="text-center lg:text-left ikaros">
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