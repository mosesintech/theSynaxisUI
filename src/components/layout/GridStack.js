import React, { useLayoutEffect, useState } from 'react';
import { Layout, Item } from 'react-masonry-list'

import Edges from './Edges';

export default function GridStack({ children }) {
    const getColCount = (size) => {
        if ( size > 1324 ) {
            return 4
        }
        if ( size <= 1324 && size > 1000 ) {
            return 3
        }
        if ( size <= 1000 && size > 660) {
            return 2
        } 
        if ( size <= 660) {
            return 1
        }    
        return 4
    }
    
    const [colCount, setColCount] = useState(getColCount(window.innerWidth));
    
    useLayoutEffect(() => {
        const onResize = () => {
            setColCount(getColCount(window.innerWidth))
        }
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])
    
    return (
        <Edges size='lg'>
            <Layout gap={0} colCount={colCount} minWidth={100}>
                {children.map(child => (
                    <Item>
                        {child}
                    </Item>
                ))}
            </Layout>
        </Edges>
    )
}