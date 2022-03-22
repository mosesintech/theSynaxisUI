import Head from 'next/head'

import Edges from '../components/layout/Edges'

export default function Sayings() {
  return (
    <>
    <Head>
      <title>The Synaxis | Sayings of the Fathers</title>
    </Head>
    <Edges size="lg">
      <div className="container mx-auto max-w-7xl px-4 py-6">
        <h1 className="font-headingStyled">The Synaxis Sayings of the Fathers</h1>
      </div>
    </Edges>
    </>    
  )
}
