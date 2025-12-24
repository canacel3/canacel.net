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
    <div>
      {props.blogs.map((blog) => (
        <Link href={`/${blog.id}`} key={blog.id}>
          <article
            key={blog.id}
            className='bg-zinc-700 rounded-s border-slate-400'
          >
            <div>
              <div>
                <div className='relative w-full h-[400px] overflow-hidden'>
                  {blog.eyecatch && (
                    <Image
                      src={blog.eyecatch.url}
                      alt='alt'
                      fill
                      className='object-cover'
                    />
                  )}
                </div>
                <time className='text-lg tracking-widest font-mono'>
                  {format(parseISO(blog.publishedAt), 'yyyy.MM.dd')}
                </time>
                <div className='text-2xl font-mono'>{blog.title}</div>
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  )
}
