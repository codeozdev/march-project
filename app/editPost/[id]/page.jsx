import EditPostForm from '@/components/EditPostForm'

async function getPost(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: 'no-cache',
  })
  return res.json()
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
