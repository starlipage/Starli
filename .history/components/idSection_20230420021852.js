import Image from "next/image";



export default function IdSection() {
    return (
        <div className="px-4 lg:my-10 md:mb-8   sm:max-w-full md:max-w-full lg:max-w-screen-full md:px-24 lg:px-8   bg-[url('https://i.postimg.cc/J41L1C2P/Asset-16-8.png')] bg-no-repeat lg:bg-contain bg-center bg-[#000] lg:mx-32 md:mx-20 rounded-2xl">
            <div className="flex flex-col max-w-screen-full overflow-hidden k  rounded-2xl shadow-sm lg:flex-row sm:mx-auto lg:py-5 lg:pb-0 md:py-0 ">
                <div className="relative lg:w-1/2">
                    <Image
                        width={1000}
                        height={1000}
                        src="/images/starli-card.png"
                        alt="IdSection"
                        className="object-cover w-full lg:absolute h-100 lg:h-85 md:hidden lg:block hidden"
                    />

                </div>
                <div className="flex flex-col justify-center p-8 bg-transparent lg:p-16 lg:pl-20 lg:w-1/2 lg:pt-6 md:px-0 ">
                    <div>
                        <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.014 32" width="29.014" height="32" fill="#ececec" className="mr-4">
                            <g id="Layer_1-2" data-name="Layer 1">
                                <path class="cls-1" d="m22.499 31.986 4.237-1.991a.139.139 0 0 0 .064-.19l-2.832-5.502a.09.09 0 0 0-.086-.05l-4.837.183a.093.093 0 0 0-.083.133l3.349 7.352a.139.139 0 0 0 .187.068Z" /><path class="cls-1" d="M21.208 18.187 13.627.022c-.011-.029-.053-.029-.068 0L.022 29.621a.249.249 0 0 0 .104.32l3.518 1.977a.245.245 0 0 0 .345-.108c.895-1.883 7.378-14.062 23.096-7.827.072.029.155 0 .187-.075.266-.636 1.452-3.45 1.729-4.104a.141.141 0 0 0-.083-.19c-.787-.287-4.75-1.671-7.711-1.426ZM9.457 20.192l4.144-9.217 2.817 7.054s-4.277.244-6.957 2.167Z" /></g>
                        </svg>
                    </div>
                    <h5 className="mt-3 text-3xl font-extrabold leading-none lg:text-4xl text-white arkhip md:text-3xl md:hidden lg:block hidden">
                        The star <br />
                        we needed <br />
                        for a long <br />
                        time
                    </h5>

                    <h5 className="mt-3 text-3xl font-extrabold leading-none lg:text-4xl text-white arkhip md:text-3xl md:block lg:hidden ">
                        The star <br />
                        we needed
                        for a long
                        time
                    </h5>

                    <h5 className="mt-3 text-3xl font-extrabold leading-none sm:text-sm text-gray-400 ikaros hidden lg:block">
                        In social networks, there is no place to regularly and accurately <br />
                        introduce personal information. <br />
                        And there are websites and tools for personal profiles  <br />
                        or resumes that do not meet our main needs

                    </h5>

                    <div className="flex items-center">

                    </div>
                </div>
            </div>
        </div >
    );
}