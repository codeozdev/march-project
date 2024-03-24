import Image from 'next/image'
import PostForm from '@/components/PostForm'
import PostContent from '@/components/PostContent'

const URL = process.env.NEXTAUTH_URL

async function getPosts() {
  const res = await fetch(`${URL}/api/posts`, { cache: 'no-store' })
  return await res.json()
}

export default async function PostList() {
  const { posts, message, error } = await getPosts()
  const data = posts
  console.log(message || error)
  console.log(data)

  return (
    <div className='flex items-center justify-center flex-col h-[calc(100vh-94px)]'>
      <Image src='/1.png' width={100} height={100} alt='logo' />
      <PostForm data={posts} />
      {/*POSTS*/}
      {/*<div className='mt-10 flex gap-5 flex-col lg:w-1/3 lg:mx-auto w-full'>*/}
      {/*  {posts.map((post) => (*/}
      {/*    <div className='bg-slate-800 lg:rounded-t-lg' key={post.id}>*/}
      {/*      <PostContent post={post.post} created={post.createdAt} id={post.id} />*/}
      {/*    </div>*/}
      {/*  ))}*/}
      {/*</div>*/}
    </div>
  )
}
