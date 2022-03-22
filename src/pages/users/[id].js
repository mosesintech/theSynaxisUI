import Head from 'next/head'

import Edges from '../../components/layout/Edges'

export default function UserProfile() {
  return (
    <>
    <Head>
      <title>The Synaxis | {id}</title>
    </Head>
    <Edges size="lg">
      <div className="container mx-auto max-w-7xl px-4 py-6">
        <h1 className="font-headingStyled">The Synaxis Components</h1>
        <a href="/theme">Theme Components & Typography</a>
      </div>
    </Edges>
    </>    
  )
}
