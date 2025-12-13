import { client } from '../libs/client'
import BlogCards from '../components/blog/BlogCards'
import Footer from '../components/blog/Footer'
import Header from '../components/blog/Header'
import type { Blog } from '../../types/blog'

type Props = {
  blogs: Array<Blog>
}

export default function Blog({ blogs }: Props) {
  return (
    <div className='min-h-screen flex flex-col bg-primary px-20'>
      <Header />
      <main className='md:m-20 grow text-white'>
        <BlogCards blogs={blogs} />
      </main>
      <Footer />
    </div>
  )
}

export const getStaticProps = async () => {
  const blogsData = await client.get({
    endpoint: 'blogs',
  })
  return {
    props: {
      blogs: blogsData.contents,
    },
  }
}
