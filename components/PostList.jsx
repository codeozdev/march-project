import Image from 'next/image'
import PostContent from './PostContent'
import PostForm from '@/components/PostForm'

const URL = process.env.NEXTAUTH_URL

async function getPosts() {
  try {
    const res = await fetch(`${URL}/api/posts`, { cache: 'no-store' })

    return res.json()
  } catch (error) {
    console.log('Error loading topics', error)
    throw error
  }
}

export default async function PostList() {
  const data = await getPosts()

  console.log(data)
  console.log(typeof data)

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
