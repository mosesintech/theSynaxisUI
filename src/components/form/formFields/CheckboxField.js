import React from 'react';

export default function CheckboxField() {
    return (
        <>
            <fieldset>
                <legend className="sr-only">Checkbox variants</legend>
                <div className="flex items-center mb-4">
                    <input id="checkbox-2" aria-describedby="checkbox-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="checkbox-2" className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">I want to get promotional offers</label>
                </div>

                <div className="flex items-center mb-4">
                    <input id="checkbox-3" aria-describedby="checkbox-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="checkbox-3" className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">I am 18 years or older</label>
                </div>
                
                <div className="flex mb-4">
                    <div className="flex items-center h-5">
                    <input id="shipping-2" aria-describedby="shipping-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    </div>
                    <div className="ml-3 text-sm">
                    <label htmlFor="shipping-2" className="font-medium text-gray-900 dark:text-gray-300">Free shipping via Flowbite</label>
                    <div className="text-gray-500 dark:text-gray-300"><span className="text-xs font-normal">htmlFor orders shipped from Flowbite from <span className="font-medium">€ 25</span> in books or <span>€ 29</span> on other categories</span></div>
                    </div>
                </div>

                <div className="flex items-center">
                    <input id="international-shipping-disabled" aria-describedby="international-shipping-disabled" type="checkbox" className="w-4 h-4 bg-gray-50 rounded border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" disabled />
                    <label htmlFor="international-shipping-disabled" className="ml-3 text-sm font-medium text-gray-300 dark:text-gray-500">Eligible for international shipping (disabled)</label>
                </div>
            </fieldset>
        </>
    )
}