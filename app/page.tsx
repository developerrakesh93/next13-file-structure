// import Image from 'next/image'
// import Link from 'next/link'
// import ProductCart from './components/ProductCart'
// import { getServerSession } from 'next-auth'
// import { authOptions } from './api/auth/[...nextauth]/route'

// export default async function Home() {
//   const session = await getServerSession(authOptions);
//   return (
//     <main>
//       <h1>Hi {session && <span>{session.user!.name}</span>}</h1>
//       <Link href='/timeline'>Time line</Link>
//       <br />
//       <Link href='/timeline/apptable'>App Table</Link>
//       <br />
//       <ProductCart></ProductCart>
//     </main>
//   )
// }
import Image from 'next/image'
import React from 'react'
import coffee from '@/public/Images/coffee.jpg'

const Home = () => {
  return (
    <main className='relative'>
      <Image src={coffee} alt="coffee" fill className='object-cover'
        sizes='(max-width: 480px) 100vw (max-width: 768px) 50vw, 33vw' quality={100} priority></Image>
    </main>
  )
}

export default Home
