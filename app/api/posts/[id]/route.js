import prisma from '@/prisma/prismadb'
import { NextResponse } from 'next/server'

export async function PATCH(request, { params }) {
  try {
    const { newPost: post } = await request.json()

    const { id } = params

    const updatedPost = await prisma.post.update({
      where: {
        id,
      },
      data: {
        post: post,
      },
    })

    return NextResponse.json(updatedPost, { message: 'Post Updated' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Post Update Error', error }, { status: 500 })
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params

    const deletedPost = await prisma.post.delete({
      where: {
        id,
      },
    })

    return NextResponse.json(deletedPost, { message: 'Post Deleted' }, { status: 200 })
  } catch (error) {
    console.error('GET Error:', error) // Loglama ekle
    return NextResponse.json({ message: 'Post Delete Error', error }, { status: 500 })
  }
}
// export async function GET(request, { params }) {
//   try {
//     const { id } = params
//     const posts = await prisma.post.findUnique({
//       where: {
//         id,
//       },
//     })
//
//     if (!posts) {
//       return NextResponse.json({ message: 'Post not found' }, { status: 404 })
//     }
//
//     return NextResponse.json(posts, { status: 200 })
//   } catch (e) {
//     return NextResponse.json({ message: 'One Get Post Error', e }, { status: 500 })
//   }
// }
