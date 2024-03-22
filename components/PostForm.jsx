'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import ToastifyComponent from '@/components/ToastifyComponent'

export default function PostForm({ data }) {
  const [post, setPost] = useState('')

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (data.length >= 5) return toast.error('You can only add 5 posts') // Limit the number of posts to 5

    if (!post) return toast.error('PostForm cannot be empty')

    try {
      const res = await fetch('/api/posts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ post }),
      })

      if (res.ok) {
        setPost('')
        router.refresh()
      }
    } catch (error) {
      console.log(error, 'EROR')
    }
  }

  return (
    <div>
      <form className='text-center font-bold font-comic my-10' onSubmit={handleSubmit}>
        <input
          type='text'
          value={post}
          onChange={(e) => setPost(e.target.value)}
          maxLength={19}
          className='p-2 rounded-l-2xl outline-none text-black lg:text-3xl '
          placeholder='What do you need to do?'
        />
        <button className='bg-red-500 p-2 rounded-r-2xl cursor-pointer lg:text-3xl'>ADD</button>
      </form>
      <ToastifyComponent />
    </div>
  )
}
