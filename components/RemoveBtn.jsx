'use client'

import { HiOutlineTrash } from 'react-icons/hi'
import { useRouter } from 'next/navigation'

export default function RemoveBtn({ id }) {
  const router = useRouter()

  const handleRemove = async () => {
    try {
      const confirmed = confirm('Are you sure you want to delete this topic?')
      if (confirmed) {
        const res = await fetch(`/api/posts/${id}`, {
          method: 'DELETE',
        })
        if (res.ok) {
          router.refresh()
          console.log('Post Deleted')
        }
      }
    } catch (e) {
      console.log('removeBtn Error', e)
    }
  }

  return (
    <button onClick={handleRemove}>
      <HiOutlineTrash className='text-red-600' />
    </button>
  )
}
