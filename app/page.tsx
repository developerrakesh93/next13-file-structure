'use client'
import Image from 'next/image'
import Link from 'next/link'
import ProductCart from './components/ProductCart'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import { Metadata } from 'next'
// import HeavyComponents from './components/HeavyComponents'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import _ from 'lodash'

const HeavyComponents = dynamic(() => import('./components/HeavyComponents'), {
  ssr: false,
  loading: () => <p>Loading...</p>
})
export default async function Home() {
  const session = await getServerSession(authOptions);
  const [isVisible, setVisible] = useState(false);

  return (
    <main>
      <h1>Hi {session && <span>{session.user!.name}</span>}</h1>
      <Link href='/timeline'>Time line</Link>
      <br />
      <Link href='/timeline/apptable'>App Table</Link>
      <br />
      <ProductCart></ProductCart>
      <button onClick={() => {
        const users = [
          { name: 'c' },
          { name: 'b' },
          { name: 'a' },
        ];
        const sorted = _.orderBy(users, ['name']);
        console.log(sorted);
        setVisible(true)
      }}></button>
      {isVisible && <HeavyComponents></HeavyComponents>}
    </main>
  )
}

export async function generatemetadata(): Promise<Metadata> {
  const product = await fetch('');
  return {
    title: 'product.title',
    description: '...'
  }
}
// import Image from 'next/image'
// import React from 'react'
// import coffee from '@/public/Images/coffee.jpg'

// const Home = () => {
//   return (
//     <main className='relative'>
//       <Image src={coffee} alt="coffee" fill className='object-cover'
//         sizes='(max-width: 480px) 100vw (max-width: 768px) 50vw, 33vw' quality={100} priority></Image>
//     </main>
//   )
// }

// export default Home
