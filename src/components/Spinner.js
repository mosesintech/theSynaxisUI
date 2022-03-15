import React from 'react';

function Spinner() {
    return (
        <>
        <div className="flex flex-row space-x-16">
            <div className="flex">
                    <div className="w-12 h-12 rounded-full absolute
                border border-solid border-gray-200"></div>

                    <div className="w-12 h-12 rounded-full animate-spin absolute
                border border-solid border-yellow-500 border-t-transparent shadow-md"></div>
            </div>

            <div className="flex">
                    <div className="w-12 h-12 rounded-full absolute
                border-2 border-solid border-gray-200"></div>

                    <div className="w-12 h-12 rounded-full animate-spin absolute
                border-2 border-solid border-blue-500 border-t-transparent shadow-md"></div>
            </div>

            <div className="flex">
                    <div className="w-12 h-12 rounded-full absolute
                border-4 border-solid border-gray-200"></div>

                    <div className="w-12 h-12 rounded-full animate-spin absolute
                border-4 border-solid border-green-500 border-t-transparent shadow-md"></div>
            </div>

            <div className="flex">
                    <div className="w-12 h-12 rounded-full absolute
                border-8 border-solid border-gray-200"></div>

                    <div className="w-12 h-12 rounded-full animate-spin absolute
                border-8 border-solid border-purple-500 border-t-transparent shadow-md"></div>
            </div>
        </div>
        <br /><br /><br />
        </>
    )
}

export default Spinner