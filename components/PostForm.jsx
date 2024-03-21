'use client'

import { useState } from 'react'
import { FaRegCheckCircle } from 'react-icons/fa'
import Link from 'next/link'
import EditPostForm from '@/components/EditPostForm'
import RemoveBtn from '@/components/RemoveBtn'

export default function PostForm({ post, created }) {
  const [posts, setPosts] = useState(post)
  const [color, setColor] = useState(false)

  const handleAdd = () => {
    setColor(!color)
    console.log('clicked')
  }

  const dateObject = new Date(created)
  const hours = String(dateObject.getUTCHours()).padStart(2, '0')
  const minutes = String(dateObject.getUTCMinutes()).padStart(2, '0')
  const seconds = String(dateObject.getUTCSeconds()).padStart(2, '0')

  return (
    <div>
      <div className='flex items-center justify-between px-1 font-comic sm:text-2xl text-white select-none'>
        <div className='flex items-center justify-center gap-2 '>
          <FaRegCheckCircle
            className={`cursor-pointer mr-4 z-50 ${color ? 'text-yellow-400' : ''}`}
            onClick={handleAdd}
          />
          <h1 className={`w-[300px] sm:w-[380px] ${color ? 'line-through' : ''}`}>{posts}</h1>
        </div>
        <div className='flex items-center gap-2'>
          <Link href={`/editPost/${1}`}>
            <EditPostForm />
          </Link>
          <RemoveBtn />
        </div>
      </div>
      <div className='text-[10px] text-center bg-slate-900'>{`${hours}: ${minutes}: ${seconds}`}</div>
    </div>
  )
}
