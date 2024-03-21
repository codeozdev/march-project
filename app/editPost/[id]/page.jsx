import EditPostForm from '@/components/EditPostForm'

const NEXT_PUBLIC_URL = process.env.NEXTAUTH_URL

async function getPost(id) {
  const res = await fetch(`${NEXT_PUBLIC_URL}/api/posts/${id}`)
  return await res.json()
}

export default async function EditPage({ params }) {
  const { id } = params

  const data = await getPost(id)

  const { post, updatedAt } = data

  return (
    <div>
      <EditPostForm post={post} updatedAt={updatedAt} id={id} />
    </div>
  )
}
