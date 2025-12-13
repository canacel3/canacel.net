import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='text-center text-white text-sm'>
      <div className='mx-10 md:mx-20 border-b-2' />
      <div className='py-8 flex flex-col gap-4'>
        {/* <div className='flex flex-row justify-center gap-4'>
          <Link href='/author'>
            <div className='hover:underline'>筆者情報</div>
          </Link>
          <Link href='/privacy'>
            <div className='hover:underline'>プライバシーポリシー</div>
          </Link>
          <Link href='/contacts'>
            <div className='hover:underline'>お問い合わせ</div>
          </Link>
        </div> */}
        <p className='font-mono'>&copy;2024 canacel.net</p>
      </div>
    </footer>
  )
}
