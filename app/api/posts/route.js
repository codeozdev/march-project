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

    return NextResponse.json(new_post, { status: 201 })
  } catch (error) {
    return NextResponse.json({ message: 'New PostForm Error', error }, { status: 500 })
  }
}

export async function GET() {
  try {
    const posts = await prisma.post.findMany()

    return NextResponse.json(
      { message: 'STATIC GET FUNCTION WORKED SUCCESSFULLY', posts },
      { status: 200 },
    )
  } catch (error) {
    return NextResponse.json({ error: 'STATIC GET FUNCTION ERROR' }, { status: 500 })
  }
}
