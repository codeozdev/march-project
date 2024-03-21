'use client'

import { HiOutlineTrash } from 'react-icons/hi'
import { useRouter } from 'next/navigation'

const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL

export default function RemoveBtn({ id }) {
  const router = useRouter()

  const handleRemove = async () => {
    try {
      const confirmed = confirm('Are you sure you want to delete this topic?')
      if (confirmed) {
        const res = await fetch(`${NEXT_PUBLIC_URL}/api/posts/${id}`, {
          method: 'DELETE',
        })
        if (res.ok) {
          router.refresh()
          console.log('Post Deleted')
        }
      }
    } catch (e) {
      console.log('RemoveBtn Error', e)
    }
  }

  return (
    <button onClick={handleRemove}>
      <HiOutlineTrash className='text-red-600' />
    </button>
  )
}
