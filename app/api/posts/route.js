import prisma from '@/prisma/prismadb'
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { post } = body

    const new_post = await prisma.post.create({
      data: {
        post,
      },
    })

    return NextResponse.json(new_post, { message: 'New PostForm Created' }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ message: 'New PostForm Error', error }, { status: 500 })
  }
}

export async function GET() {
  const posts = await prisma.post.findMany()

  return NextResponse.json(posts, { status: 200 })
}
