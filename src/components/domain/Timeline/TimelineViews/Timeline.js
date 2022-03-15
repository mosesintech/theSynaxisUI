import React from 'react';

function Timeline() {
    return (
        <>
        <h1>Timeline One</h1>
        <div className="container">
          <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
            <div className="flex flex-row-reverse md:contents">
              <div
                className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
                <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
                <p className="leading-tight text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                  quaerat?
                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                ></div>
              </div>
            </div>

            <div className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                ></div>
              </div>
              <div
                className="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
              >
                <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
                <p className="leading-tight text-justify">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Vitae, facilis.
                </p>
              </div>
            </div>

            <div className="flex flex-row-reverse md:contents">
              <div
                className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
                <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
                <p className="leading-tight text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                  quaerat?
                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                ></div>
              </div>
            </div>

            <div className="flex flex-row-reverse md:contents">
              <div
                className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
                <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
                <p className="leading-tight text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                  quaerat?
                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                ></div>
              </div>
            </div>

            <div className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                ></div>
              </div>
              <div
                className="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
              >
                <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
                <p className="leading-tight text-justify">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Vitae, facilis.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h1>Timeline Two</h1>
        <div className="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-20">
            <div className="border-l-2 mt-10">
                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                <div className="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                <div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

                <div className="flex-auto">
                    <h1 className="text-lg">Day 1</h1>
                    <h1 className="text-xl font-bold">Orientation and Briefing on Uniliver basics</h1>
                    <h3>classNameroom</h3>
                </div>
                <a href="#" className="text-center text-white hover:text-gray-300">Download materials</a>
                </div>

                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-pink-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                <div className="w-5 h-5 bg-pink-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                <div className="w-10 h-1 bg-pink-300 absolute -left-10 z-0"></div>

                <div className="flex-auto">
                    <h1 className="text-lg">Day 1</h1>
                    <h1 className="text-xl font-bold">Orientation and Briefing on Uniliver basics</h1>
                    <h3>classNameroom</h3>
                </div>
                <a href="#" className="text-center text-white hover:text-gray-300">Download materials</a>
                </div>

                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-green-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                <div className="w-5 h-5 bg-green-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                <div className="w-10 h-1 bg-green-300 absolute -left-10 z-0"></div>

                <div className="flex-auto">
                    <h1 className="text-lg">Day 1</h1>
                    <h1 className="text-xl font-bold">Orientation and Briefing on Uniliver basics</h1>
                    <h3>classNameroom</h3>
                </div>
                <a href="#" className="text-center text-white hover:text-gray-300">Download materials</a>
                </div>

                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-purple-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                <div className="w-5 h-5 bg-purple-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                <div className="w-10 h-1 bg-purple-300 absolute -left-10 z-0"></div>

                <div className="flex-auto">
                    <h1 className="text-lg">Day 1</h1>
                    <h1 className="text-xl font-bold">Orientation and Briefing on Uniliver basics</h1>
                    <h3>classNameroom</h3>
                </div>
                <a href="#" className="text-center text-white hover:text-gray-300">Download materials</a>
                </div>

                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-yellow-600 text-white rounded mb-10 flex-col md:flex-row">
                <div className="w-5 h-5 bg-yellow-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 -mt-2 md:mt-0"></div>

                <div className="w-10 h-1 bg-yellow-300 absolute -left-10 z-0"></div>

                <div className="flex-auto">
                    <h1 className="text-lg">Day 1</h1>
                    <h1 className="text-xl font-bold">Orientation and Briefing on Uniliver basics</h1>
                    <h3>classNameroom</h3>
                </div>
                <a href="#" className="text-center text-white hover:text-gray-300">Download materials</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Timeline