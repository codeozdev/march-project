'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FaEdit, FaRegCheckCircle } from 'react-icons/fa'
import { toast } from 'react-toastify'

export default function _EditPostForm({ post, updatedAt, id }) {
  const [newPost, setNewPost] = useState(post)

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!post) return toast.error('_PostForm cannot be empty')

    try {
      const res = await fetch(`/api/posts/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newPost }),
      })

      if (res.ok) {
        router.push('/')
      }
    } catch (error) {
      console.log(error, 'EROR')
    }
  }

  const dateObject = new Date(updatedAt)

  const timeZoneOffset = 3 * 60 * 60 * 1000 // GMT+3
  const localDate = new Date(dateObject.getTime() + timeZoneOffset)

  const hours = String(localDate.getUTCHours()).padStart(2, '0')
  const minutes = String(localDate.getUTCMinutes()).padStart(2, '0')
  const seconds = String(localDate.getUTCSeconds()).padStart(2, '0')

  return (
    <div className='flex items-center justify-center flex-col h-screen w-screen md:w-1/2 md:mx-auto'>
      <Image src='/2.png' width={100} height={100} alt='logo' />
      <form className='md:w-1/2 w-full mt-7 md:mt-5 flex flex-col' onSubmit={handleSubmit}>
        <div className='flex flex-col'>
          <input
            type='text'
            value={newPost}
            className='bg-slate-800 text-center outline-none'
            onChange={(e) => setNewPost(e.target.value)}
          />
          <div className='w-full text-center  bg-slate-900 text-[10px]'>
            {`${hours}: ${minutes}: ${seconds}`}
          </div>
        </div>
        <button className='w-fit mt-5 bg-yellow-600 px-4 py-2 self-center'>Update</button>
      </form>
    </div>
  )
}
