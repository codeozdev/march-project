import EditPostForm from '@/components/EditPostForm'

const NEXTAUTH_URL = process.env.NEXTAUTH_URL

async function getPost(id) {
  const res = await fetch(`${NEXTAUTH_URL}/api/posts/${id}`, {
    cache: 'no-cache',
  })
  return res.json()
}

export default async function EditPage({ params }) {
  const { id } = params

  const data = await getPost(id)

  console.log(data)

  const { post, updatedAt } = data

  return (
    <div>
      <EditPostForm post={post} updatedAt={updatedAt} id={id} />
    </div>
  )
}
