import Image from 'next/image'
import Link from 'next/link'
import ProductCart from './components/ProductCart'

export default function Home() {
  return (
    <main>
      <h1>Hi hello</h1>
      <Link href='/timeline'>Time line</Link>
      <br />
      <Link href='/timeline/apptable'>App Table</Link>
      <br />
      <ProductCart></ProductCart>
    </main>
  )
}
