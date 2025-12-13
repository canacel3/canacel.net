import { GetStaticPropsContext } from 'next'
import { client } from '../libs/client'
import type { Blog } from '../../types/blog'
import { parseISO, format } from 'date-fns'
import Footer from '../components/blog/Footer'
import Header from '../components/blog/Header'
import Line from '../components/Line'

type Props = {
  blog: Blog
}

export default function BlogId(props: Props) {
  return (
    <div className='min-h-screen flex flex-col bg-primary'>
      <Header />
      <main className='m-10 md:m-20 grow text-white'>
        <div className='flex flex-col md:flex-row gap-10'>
          <article>
            <div className='mb-5'>
              <time className='text-lg tracking-widest font-mono'>
                {format(parseISO(props.blog.publishedAt), 'yyyy.MM.dd')}
              </time>
            </div>
            <div className='mb-5'>
              <div className='font-bold text-2xl leading-10 mb-4'>
                {props.blog.title}
              </div>
            </div>
            <Line />
            <div
              className='prose max-w-none'
              dangerouslySetInnerHTML={{
                __html: `${props.blog.content}`,
              }}
            />
          </article>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blogs' })
  const paths = data.contents.map((blog: Blog) => `/${blog.id}`)
  return { paths, fallback: false }
}

export const getStaticProps = async (
  context: GetStaticPropsContext<{ id: string }>
) => {
  const id = context.params?.id
  const blogData = await client.get({ endpoint: 'blogs', contentId: id })
  return {
    props: {
      blog: blogData,
    },
  }
}
