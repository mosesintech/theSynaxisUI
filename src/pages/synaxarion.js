import Head from 'next/head'

import Edges from '../components/layout/Edges'

export default function Synaxarion() {
  return (
    <>
    <Head>
      <title>The Synaxis | Synaxarion</title>
    </Head>
    <Edges size="lg">
      <div className="container mx-auto max-w-7xl px-4 py-6">
        <h1 className="font-headingStyled">The Synaxis Lives of the Saints</h1>
      </div>
    </Edges>
    </>    
  )
}
