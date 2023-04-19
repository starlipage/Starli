import { useState } from 'react'
import { AcmeLogo } from './AcmeLogo'

function NavbarSection() {

    const [state, setState] = useState(false)

    // Replace javascript:void(0) path with your path
    const navigation = [
        { title: "ABOUT STARLI", path: "#platform" },
        { title: "TOKENOMICS", path: "#token" },
        { title: "COMMUNITY", path: "#commiunity" }
    ]

    return (
        <nav className="transparent w-full md:static lg:py-2 border-b-[1px] border-[#2e2e2e]  ">
            <div className="items-center px-4 max-w-screen-full mx-auto md:flex md:px-12 lg:px-32">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <a href="javascript:void(0)" className='flex items-center justify-between' >
                        <div className="hidden lg:block">
                            <AcmeLogo />
                        </div>
                        <p className='lg:text-2xl text-white arkhip font-bold ml-2 text-xl md:text-2xl' >STARLI </p>
                    </a>
                    <div className="md:hidden">
                        <button className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                    <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className="text-[#e2e2e2] hover:text-[#3417ff] ikaros font-semibold tracking-wide">
                                        <a href={item.path}>
                                            {item.title}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="hidden md:inline-block">
                    <a href="javascript:void(0)" className=" ikaros tracking-widest	 font-semibold  lg:py-4 lg:px-8 text-[#efeff0] bg-[#3417ff] rounded-xl md:py-3 md:px-6 ">
                        PLATFORM
                    </a>
                </div>
            </div>
        </nav>

    )
}


export default NavbarSection; 