export default function IdSection() {
    return (
        <div className="px-4 my-10   sm:max-w-full md:max-w-full lg:max-w-screen-full md:px-24 lg:px-8   bg-[url('https://i.postimg.cc/J41L1C2P/Asset-16-8.png')] bg-no-repeat lg:bg-contain bg-center bg-[#000] lg:mx-32 rounded-2xl">
            <div className="flex flex-col max-w-screen-full overflow-hidden k  rounded-2xl shadow-sm lg:flex-row sm:mx-auto lg:py-10 ">
                <div className="relative lg:w-1/2">
                    <img
                        src="https://i.postimg.cc/XJpW6f13/Asset-19-8.png"
                        alt=""
                        className="object-cover w-full lg:absolute h-100 lg:h-90 "
                    />

                </div>
                <div className="flex flex-col justify-center p-8 bg-transparent lg:p-16 lg:pl-10 lg:w-1/2 lg:pt-6">
                    <div>
                        <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.014 32" width="29.014" height="32" fill="#ececec">
                            <g id="Layer_1-2" data-name="Layer 1">
                                <path class="cls-1" d="m22.499 31.986 4.237-1.991a.139.139 0 0 0 .064-.19l-2.832-5.502a.09.09 0 0 0-.086-.05l-4.837.183a.093.093 0 0 0-.083.133l3.349 7.352a.139.139 0 0 0 .187.068Z" /><path class="cls-1" d="M21.208 18.187 13.627.022c-.011-.029-.053-.029-.068 0L.022 29.621a.249.249 0 0 0 .104.32l3.518 1.977a.245.245 0 0 0 .345-.108c.895-1.883 7.378-14.062 23.096-7.827.072.029.155 0 .187-.075.266-.636 1.452-3.45 1.729-4.104a.141.141 0 0 0-.083-.19c-.787-.287-4.75-1.671-7.711-1.426ZM9.457 20.192l4.144-9.217 2.817 7.054s-4.277.244-6.957 2.167Z" /></g>
                        </svg>
                    </div>
                    <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-5xl text-white arkhip">
                        The star <br />
                        we needed <br />
                        for a long <br />
                        time
                    </h5>

                    <div className="flex items-center">
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        >
                            Get started
                        </button>
                        <a
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Learn More
                            <svg
                                className="inline-block w-3 ml-2"
                                fill="currentColor"
                                viewBox="0 0 12 12"
                            >
                                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div >
    );
}