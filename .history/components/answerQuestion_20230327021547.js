import React from 'react';

function AllQuestionSection() {
    return (
        <>
            <section className="py-14 mt-8">
                <div className="max-w-screen-full mx-auto px-4  gap-x-12 justify-between md:flex md:px-28">
                    <div className="max-w-full">
                        <h3 className="text-gray-800 text-3xl font-semibold md:text-6xl arkhip lg:ml-8">
                            HAVE YOUR OWN STARS
                        </h3>
                        <p className="mt-3 text-gray-600">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                    <div className="flex-none mt-4 md:mt-0">
                        <a href="javascript:void(0)" className="inline-block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-md hover:shadow-none">
                            Learn more
                        </a>
                    </div>
                </div>
            </section>

        </>
    )
}


export default AllQuestionSection; 