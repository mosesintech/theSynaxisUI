import React from 'react';
import Link from 'next/link';

import Button from './Button';

function Card({ link, heading, content, imgSrc, size, buttonText }) {
    return (
        <>
        <div
            className={`w-${size === 'sm' ? '64' : size === 'lg' ? '96' : '80'} bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3`}
        >
            {imgSrc && (
                <Link href={`${link}`}>
                    <a>
                        <img 
                            className="rounded-t-lg" 
                            src={imgSrc} 
                            alt="" 
                        />
                    </a>
                </Link>
            )}
            <div className="p-5">
                {heading && (
                    <Link href={`${link}`}>
                        <a>
                            <h5 
                                className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                            >
                                {heading}
                            </h5>
                        </a>
                    </Link>
                )}
                {content && (
                    <p
                        className="mb-3 font-normal text-gray-700 dark:text-gray-400" 
                        children={content}
                    />
                )}
                {buttonText && (
                    <Button children={buttonText} arrow={true} link={link} />
                )}
            </div>
        </div>
        </>
    )
}

export default Card