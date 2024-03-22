import Image from 'next/image'
import PostContent from './PostContent'
import PostForm from '@/components/PostForm'

const URL = process.env.NEXT_PUBLIC_URL

async function getAllPosts() {
  const res = await fetch(`${URL}/api/posts/`, {
    cache: 'no-cache',
  })
  try {
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

export default async function PostList() {
  const data = await getAllPosts()

  return (
    <div className='flex items-center justify-center flex-col h-[calc(100vh-94px)]'>
      <Image src='/1.png' width={100} height={100} alt='logo' />
      <PostForm data={data} />
      {/* POSTS */}
      <div className='mt-10 flex gap-5 flex-col lg:w-1/3 lg:mx-auto w-full'>
        {data.map((post) => (
          <div className='bg-slate-800 lg:rounded-t-lg' key={post.id}>
            <PostContent post={post.post} created={post.createdAt} id={post.id} />
          </div>
        ))}
      </div>
    </div>
  )
}
