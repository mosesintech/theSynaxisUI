import React from'react';

export default function Grid({ children, smColumns, mdColumns, lgColumns, gap }) {
    return (
        <div 
            className={`grid sm:grid-cols-${smColumns || 2} md:grid-cols-${mdColumns || 3} lg:grid-cols-${lgColumns || 4} gap-${gap}`}
        >
            {children}
        </div>
    )
}