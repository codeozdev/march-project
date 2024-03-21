import RemoveBtn from '@/components/RemoveBtn'
import Image from 'next/image'
import EditPostForm from './EditPostForm'
import Link from 'next/link'
import PostContent from './PostContent'
import PostForm from '@/components/PostForm'

const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL

async function getAllPosts() {
  const res = await fetch(`${NEXT_PUBLIC_URL}/api/posts/`)
  return await res.text()
}

export default async function PostList() {
  const data = await getAllPosts()

  return (
    <div className='flex items-center justify-center flex-col h-[calc(100vh-94px)]'>
      <Image src='/1.png' width={100} height={100} alt='logo' />
      <PostForm data={data} />
      {/* POSTS */}
      <div className='mt-10 flex gap-5 flex-col lg:w-1/2 lg:mx-auto w-full'>
        {data.map((post) => (
          <div className='last:bg-red-400 bg-slate-800 lg:rounded-t-lg' key={post.id}>
            <PostContent post={post.post} created={post.createdAt} id={post.id} />
          </div>
        ))}
      </div>
    </div>
  )
}
