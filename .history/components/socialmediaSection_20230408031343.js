import React from 'react';

export function SocialmediaSection() {
    return (
        <div>
            <div className='  px-6 pb-4   ' />
            <div className="py-20 pb-0 bg-[#000]   ">

                <div className="container mx-auto px-6 md:px-12 text-center ">

                    <div className="py-10 grid gap-28 md:gap-12 md:grid-cols-4">

                        <div className=" space-y-8 group">
                            <div className="max-w-xs p-6 rounded-md bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]">
                                <img src="https://i.postimg.cc/RFgwZv99/Untitled.png" alt="" className="object-cover object-center w-full rounded-md h-48 dark:bg-gray-500" />
                                <div className="mt-6 mb-2">
                                    <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
                                </div>
                            </div>
                        </div>

                        <div className=" space-y-8 group">
                            <div className="w-32 h-32 -mt-16 mx-auto rounded-[2rem] rotate-45 overflow-hidden">
                                <img className="w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale-[1.4]"
                                    src="/images/features2.webp" alt="nativeBlockchain" loading="lazy" width="1000" height="667" />
                            </div>
                            <div className="space-y-4 text-center">
                                <div>
                                    <h4 className="text-2xl text-white nasaFont">Native blockchain</h4>
                                    <span className="block text-sm text-gray-400 UbuntoFont">Decentralized and works on the native blockchain</span>
                                </div>
                            </div>
                        </div>

                        <div className=" space-y-8 group">
                            <div className="w-32 h-32 -mt-16 mx-auto rounded-[2rem] rotate-45 overflow-hidden">
                                <img className="w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale-[1.4]"
                                    src="/images/features3.webp" alt="web3" loading="lazy" width="1000" height="667" />
                            </div>
                            <div className="space-y-4 text-center">
                                <div>
                                    <h4 className="text-2xl nasaFont text-white">Web3</h4>
                                    <span className="block text-sm text-gray-400 UbuntoFont">Using the new web version and features</span>
                                </div>
                            </div>
                        </div>

                        <div className=" space-y-8 group">
                            <div className="w-32 h-32 -mt-16 mx-auto rounded-[2rem] rotate-45 overflow-hidden">
                                <img className="w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale-[1.4]"
                                    src="/images/features4.webp" alt="CrossPlatform" loading="lazy" width="1000" height="667" />
                            </div>
                            <div className="space-y-4 text-center">
                                <div>
                                    <h4 className="text-2xl nasaFont text-white">Cross Platform</h4>
                                    <span className="block text-sm text-gray-400 UbuntoFont">Can be used on all hardware devices</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}