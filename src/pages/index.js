import Link from 'next/link'

import Edges from '../components/layout/Edges'

export default function Home() {
  return (
    <>
    <Edges size="lg">
      <div className="container mx-auto max-w-7xl px-4 py-6">
        <h1 className="font-headingStyled">The Synaxis Components</h1>
        <Link href="/theme">Theme Components & Typography</Link>
      </div>
    </Edges>
    </>    
  )
}
