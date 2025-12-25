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
    <div className='space-y-3 max-w-3xl mx-auto'>
      {props.blogs.map((blog) => (
        <Link href={`/${blog.id}`} key={blog.id}>
          <article className='group flex items-center gap-4 p-4 rounded-lg border border-stone-800/50 hover:border-stone-700 hover:bg-stone-800/30 transition-all duration-200'>
            <div className='text-4xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200'>
              {blog.emoji}
            </div>
            <div className='flex-1 min-w-0'>
              <h2 className='text-xl font-mono font-medium text-stone-100 leading-snug group-hover:text-stone-200 transition-colors'>
                {blog.title}
              </h2>
              <time className='text-xs font-mono text-stone-500 tracking-wider mt-1 block'>
                {format(parseISO(blog.publishedAt), 'yyyy.MM.dd')}
              </time>
            </div>
          </article>
        </Link>
      ))}
    </div>
  )
}
