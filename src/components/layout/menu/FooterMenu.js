import React from 'react';
import Link from 'next/link'

export default function FooterMenu() {
    return (
        <>
            <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <Link href="https://synaxisweb.netlify.app" className="flex items-center">
                        <a>
                            <h3 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white font-headingStyled">The Synaxis</h3>
                        </a>
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">The Synaxis</h3>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4">
                                <a 
                                    href="https://synaxisweb.netlify.app/about" 
                                    className="hover:underline "
                                >
                                    About
                                </a>
                            </li>
                            <li className="mb-4">
                                <a 
                                    href="https://synaxisweb.netlify.app/news" 
                                    className="hover:underline"
                                >
                                    News
                                </a>
                            </li>
                            <li className="mb-4">
                                <Link href="/tour">
                                    <a className="hover:underline">Tour</a>
                                </Link> 
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Apps</h3>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4">
                                <Link href="/scripture">
                                    <a className="hover:underline">Scripture</a>
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link href="/sayings">
                                    <a className="hover:underline">The Sayings</a>
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link href="/synaxis">
                                    <a className="hover:underline">The Synaxis</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h3>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4">
                                <a 
                                    href="https://synaxisweb.netlify.app/privacy" 
                                    className="hover:underline"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="https://synaxisweb.netlify.app/terms" 
                                    className="hover:underline"
                                >
                                    Terms &amp; Conditions
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}