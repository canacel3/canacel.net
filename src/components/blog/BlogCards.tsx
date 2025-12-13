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
            className='bg-secondary border rounded-s border-slate-400'
          >
            <div className='flex'>
              <div className='w-48 h-32'>
                {blog.eyecatch && (
                  <Image
                    src={blog.eyecatch.url}
                    alt='alt'
                    width={100}
                    height={100}
                    style={{ objectPosition: 'center' }}
                  />
                )}
              </div>
              <div>
                <time className='text-lg tracking-widest font-mono'>
                  {format(parseISO(blog.publishedAt), 'yyyy.MM.dd')}
                </time>
                <div className='text-2xl font-bold'>{blog.title}</div>
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  )
}
