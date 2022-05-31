import React from 'react';
import { useRouter } from 'next/router'

import SingleSaint from '../../components/domain/Saints/SaintsViews/SingleSaint'

export default function SingleSaintPage() {
    const router = useRouter()
    const { id } = router.query
  
    return (
        <>
            <SingleSaint id={id} />
        </>
    )
}