import RemoveBtn from '@/components/RemoveBtn'
import Image from 'next/image'
import EditPostForm from './EditPostForm'
import Link from 'next/link'
import PostForm from './PostForm'
import PostAdd from '@/components/PostAdd'

async function getAllPosts() {
  const res = await fetch('http://localhost:3000/api/posts/', {
    cache: 'no-cache',
  })
  return res.json()
}

export default async function PostList() {
  const data = await getAllPosts()

  return (
    <div className='flex items-center justify-center flex-col h-[calc(100vh-94px)]'>
      <Image src='/1.png' width={100} height={100} alt='logo' />
      <PostAdd />
      {/* POSTS */}
      <div className='mt-10 flex gap-5 flex-col lg:w-1/2 lg:mx-auto w-full'>
        {data.map((post) => (
          <div className='bg-slate-800 lg:rounded-lg' key={post.id}>
            <PostForm post={post.post} created={post.createdAt} />
          </div>
        ))}
      </div>
    </div>
  )
}

//first:bg-slate-800 last:bg-yellow-500
