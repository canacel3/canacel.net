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
    <div className='min-h-screen flex flex-col bg-stone-900 px-12 md:px-12'>
      <Header />
      <main className='grow text-stone-100 py-12'>
        <article className='max-w-3xl mx-auto'>
          <div className='mb-8 pb-4 border-b border-stone-800'>
            <time className='text-s font-mono text-stone-500 tracking-wider block mb-8'>
              {format(parseISO(props.blog.publishedAt), 'yyyy.MM.dd')}
            </time>
            <div className='flex gap-4 mb-4'>
              <div className='text-5xl'>{props.blog.emoji}</div>
              <div className='flex-1'>
                <h1 className='text-3xl md:text-4xl font-mono font-bold text-stone-100 leading-tight'>
                  {props.blog.title}
                </h1>
              </div>
            </div>
          </div>
          <div
            className='prose prose-invert prose-stone max-w-none prose-headings:font-bold prose-p:text-stone-100 prose-li:text-stone-100 prose-a:text-sky-400 prose-a:underline [&_h1_a]:text-sky-400 [&_h1_a]:underline [&_h1_a]:font-bold [&_h2_a]:text-sky-400 [&_h2_a]:underline [&_h2_a]:font-bold [&_h3_a]:text-sky-400 [&_h3_a]:underline [&_h3_a]:font-bold'
            dangerouslySetInnerHTML={{
              __html: `${props.blog.content}`,
            }}
          />
        </article>
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
