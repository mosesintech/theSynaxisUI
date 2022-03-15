import React from 'react';

function Toggle() {
    return (
        <>
        <label htmlFor="toggle-example" className="flex relative items-center mb-4 cursor-pointer">
            <input type="checkbox" id="toggle-example" className="sr-only" />
            <div className="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
        </label>

        <label htmlFor="toggle-example-checked" className="flex relative items-center mb-4 cursor-pointer">
            <input type="checkbox" id="toggle-example-checked" className="sr-only" checked />
            <div className="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me (checked)</span>
        </label>

        <label htmlFor="toggle-example-disabled" className="flex relative items-center mb-4 cursor-not-allowed">
            <input type="checkbox" id="toggle-example-disabled" className="sr-only" disabled />
            <div className="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-600">Toggle me (disabled)</span>
        </label>
        </>
    )
}

export default Toggle