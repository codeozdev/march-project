import Image from 'next/image'
import _PostContent from './_PostContent'
import _PostForm from '@/components/_PostForm'

const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'

// async function getAllTopics() {
//   try {
//     const res = await fetch(`${URL}/api/posts/`, {
//       cache: 'no-store',
//     })
//
//     if (!res.ok) {
//       throw new Error('Frontend Error: Fetching Topics')
//     }
//
//     return res.json()
//   } catch (error) {
//     console.log('Error loading topics', error)
//   }
// }

async function getPosts() {
  const res = await fetch(`${URL}/api/posts`, { cache: 'no-store' })

  if (!res.ok) throw new Error('Veri alınamadı')

  return await res.json()
}

export default async function PostList() {
  const data = await getPosts()

  console.log(data)

  return (
    <div className='flex items-center justify-center flex-col h-[calc(100vh-94px)]'>
      <Image src='/1.png' width={100} height={100} alt='logo' />
      <h1 className='bg-red-400'>1</h1>
      <h1>{data[0].post}</h1>

      <p>{URL}</p>

      {/*<_PostForm data={data} />*/}
      {/*/!* POSTS *!/*/}
      {/*<div className='mt-10 flex gap-5 flex-col lg:w-1/3 lg:mx-auto w-full'>*/}
      {/*  {data.map((post) => (*/}
      {/*    <div className='bg-slate-800 lg:rounded-t-lg' key={post.id}>*/}
      {/*      <_PostContent post={post.post} created={post.createdAt} id={post.id} />*/}
      {/*    </div>*/}
      {/*  ))}*/}
      {/*</div>*/}
    </div>
  )
}
