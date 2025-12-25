import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <nav className='max-w-3xl mx-auto pt-10 pb-2.5 text-white fond-bold text-2xl font-mono'>
        <Link href='/'>canacel.net</Link>
      </nav>
    </header>
  )
}
