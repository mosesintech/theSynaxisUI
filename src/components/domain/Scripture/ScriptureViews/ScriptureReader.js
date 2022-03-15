import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';

export default function ScriptureReader({ children }) {
    function loadFunc() {
        return <><p>Loaded</p></>
    }
    return (
        <>
        <InfiniteScroll
            pageStart={0}
            loadMore={loadFunc}
            hasMore={true || false}
            loader={<div className="loader" key={0}>Loading ...</div>}
        >
            {children}
        </InfiniteScroll>
        </>
    )
}