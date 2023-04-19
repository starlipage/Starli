export default function IdSection() {
    return (
        <div className="px-4 py-16  sm:max-w-full md:max-w-full lg:max-w-screen-full md:px-24 lg:px-8 lg:py-10  bg-[url('https://i.postimg.cc/J41L1C2P/Asset-16-8.png')] bg-no-repeat lg:bg-contain bg-center">
            <div className="flex flex-col max-w-screen-full overflow-hidden k  rounded-2xl shadow-sm lg:flex-row sm:mx-auto lg:mx-28 ">
                <div className="relative lg:w-1/2">
                    <img
                        src="https://i.postimg.cc/XJpW6f13/Asset-19-8.png"
                        alt=""
                        className="object-cover w-full lg:absolute h-80 lg:h-full"
                    />

                </div>
                <div className="flex flex-col justify-center p-8 bg-transparent lg:p-16 lg:pl-10 lg:w-1/2">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                            Brand new
                        </p>
                    </div>
                    <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
                        Your new ideal style
                    </h5>
                    <p className="mb-5 text-gray-800">
                        <span className="font-bold">Lorem ipsum</span> dolor sit amet,
                        consectetur adipiscing elit. Etiam sem neque, molestie sit amet
                        venenatis et, dignissim ut erat. Sed aliquet velit id dui eleifend,
                        sed consequat odio sollicitudin.
                    </p>
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