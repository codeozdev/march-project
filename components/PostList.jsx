'use client'

import { FaRegCheckCircle } from 'react-icons/fa'
import RemoveBtn from '@/components/RemoveBtn'
import { useState } from 'react'
import Image from 'next/image'

export default function PostList() {
  const [posts, setPosts] = useState('Personal Work No 1')
  const [color, setColor] = useState(false)

  const handleAdd = () => {
    setColor(!color)
  }

  return (
    <div className='flex items-center justify-center flex-col h-[calc(100vh-94px)]'>
      <Image src='/1.png' width={100} height={100} alt='logo' />
      <form className='text-center font-bold font-comic my-10'>
        <input
          type='text'
          className='text-2xl p-2 rounded-l-2xl outline-none text-black sm:text-4xl'
          placeholder='What do you need to do?'
        />
        <button className='bg-red-500 text-2xl p-2 rounded-r-2xl cursor-pointer sm:text-4xl'>
          ADD
        </button>
      </form>
      {/* POSTS */}
      <div className='mt-20 sm:mt-10 flex gap-5 flex-col sm:w-1/3 sm:mx-auto w-full'>
        <div className='bg-slate-800 sm:rounded-lg'>
          <div className='flex items-center justify-between px-3 font-comic text-2xl text-white'>
            <div className='flex items-center gap-2'>
              <FaRegCheckCircle
                className={`cursor-pointer ${color ? 'text-yellow-400' : ''}`}
                onClick={handleAdd}
              />
              <h1 className={color ? 'line-through' : ''}>{posts}</h1>
            </div>
            <RemoveBtn />
          </div>
        </div>
        <div className='bg-slate-800 sm:rounded-lg'>
          <div className='flex items-center justify-between px-3 font-comic text-2xl text-white'>
            <div className='flex items-center gap-2'>
              <FaRegCheckCircle
                className={`cursor-pointer ${color ? 'text-yellow-400' : ''}`}
                onClick={handleAdd}
              />
              <h1 className={color ? 'line-through' : ''}>{posts}</h1>
            </div>
            <RemoveBtn />
          </div>
        </div>
      </div>
    </div>
  )
}
