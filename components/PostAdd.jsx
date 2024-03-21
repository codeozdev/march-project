'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast, ToastContainer } from 'react-toastify'
import ToastifyComponent from '@/components/ToastifyComponent'

export default function PostAdd() {
  const [post, setPost] = useState('')

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

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

      const data = await res.json()
      console.log(data, 'DATA')
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
          className='text-2xl p-2 rounded-l-2xl outline-none text-black lg:text-4xl'
          placeholder='What do you need to do?'
        />
        <button className='bg-red-500 text-2xl p-2 rounded-r-2xl cursor-pointer lg:text-4xl'>
          ADD
        </button>
      </form>
      <ToastifyComponent />
    </div>
  )
}
