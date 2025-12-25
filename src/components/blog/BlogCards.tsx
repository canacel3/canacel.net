import Link from 'next/link'
import Image from 'next/image'
import { parseISO, format } from 'date-fns'
import Line from '../../components/Line'
import type { Blog } from '../../../types/blog'

type Props = {
  blogs: Array<Blog>
}

export default function BlogCards(props: Props) {
  return (
    <div className='space-y-6 max-w-4xl mx-auto'>
      {props.blogs.map((blog) => (
        <Link href={`/${blog.id}`} key={blog.id}>
          <article className='group flex flex-col bg-stone-800/40 rounded-lg overflow-hidden border border-stone-700/30 hover:border-stone-600/50 transition-all duration-300'>
            {/* Image */}
            <div className='relative w-full h-64 overflow-hidden bg-stone-950'>
              {blog.eyecatch && (
                <Image
                  src={blog.eyecatch.url}
                  alt={blog.title}
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-500'
                />
              )}
            </div>

            {/* Content */}
            <div className='p-6 flex flex-col'>
              <time className='text-sm font-mono text-stone-400 mb-3 tracking-wider'>
                {format(parseISO(blog.publishedAt), 'yyyy.MM.dd')}
              </time>
              <h2 className='text-xl font-mono font-medium text-white leading-snug group-hover:text-stone-200 transition-colors'>
                {blog.title}
              </h2>
            </div>
          </article>
        </Link>
      ))}
    </div>
  )
}
