import React from 'react';

export function SocialmediaSection() {
    return (
        <div>
            <div className='border-double border-t-8 border-[#21282e]  px-6 pb-4   ' />
            <div className="py-20 pb-0 bg-[#21282e]   ">

                <div className="container mx-auto px-6 md:px-12 text-center ">

                    <div className="py-20 grid gap-28 md:gap-12 md:grid-cols-4">

                        <div className="border-t-4 space-y-8 group">
                            <div className="w-32 h-32 -mt-16 mx-auto rounded-[2rem] rotate-45 overflow-hidden">
                                <img className="w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale-[1.4]"
                                    src="/images/features1.webp" alt="All in one" loading="lazy" width="640" height="805" />
                            </div>
                            <div className="space-y-4 text-center">
                                <div>
                                    <h4 className="text-2xl nasaFont text-white">All IN one</h4>
                                    <span className="block text-sm text-gray-400 UbuntoFont">Everything you need to shine in the financial markets </span>
                                </div>
                                {/* <a href="#" className="block w-max mx-auto text-blue-600">View Bio</a> */}
                            </div>
                        </div>

                        <div className="border-t-4 space-y-8 group">
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

                        <div className="border-t-4 space-y-8 group">
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

                        <div className="border-t-4 space-y-8 group">
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
            <div className='border-dotted border-t-4 border-[#21282e]  px-6 pb-4  mt-1' />
        </div>
    )
}