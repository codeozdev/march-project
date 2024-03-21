'use client'

import { useState } from 'react'
import { FaRegCheckCircle } from 'react-icons/fa'
import Link from 'next/link'
import EditPostForm from '@/components/EditPostForm'
import RemoveBtn from '@/components/RemoveBtn'
import { FaEdit } from 'react-icons/fa'

export default function PostContent({ post, created, id }) {
  const [posts, setPosts] = useState(post)
  const [color, setColor] = useState(false)

  const handleAdd = () => {
    setColor(!color)
    console.log('clicked')
  }

  const dateObject = new Date(created)

  const timeZoneOffset = 3 * 60 * 60 * 1000 // GMT+3
  const localDate = new Date(dateObject.getTime() + timeZoneOffset)

  const hours = String(localDate.getUTCHours()).padStart(2, '0')
  const minutes = String(localDate.getUTCMinutes()).padStart(2, '0')
  const seconds = String(localDate.getUTCSeconds()).padStart(2, '0')

  return (
    <>
      <div className='flex items-center justify-between px-1 font-comic sm:text-2xl text-white select-none'>
        <div className='flex items-center justify-center gap-2 '>
          <FaRegCheckCircle
            className={`cursor-pointer mr-4 z-50 ${color ? 'text-yellow-400' : ''}`}
            onClick={handleAdd}
          />
          <h1 className={`w-[300px] sm:w-[380px] ${color ? 'line-through' : ''}`}>{posts}</h1>
        </div>
        <div className='flex items-center gap-2'>
          <Link href={`/editPost/${id}`}>
            <FaEdit />
          </Link>
          <RemoveBtn id={id} />
        </div>
      </div>
      <div className='text-[10px] text-center bg-slate-900 '>{`${hours}: ${minutes}: ${seconds}`}</div>
    </>
  )
}

// MOBIL input boyutu uzat
