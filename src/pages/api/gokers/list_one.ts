import { Prisma } from 'backend/client'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function ListOneGoker(
  Request: NextApiRequest,
  Response: NextApiResponse
) {
  try {
    const goker = await Prisma.goker.findUnique({
      where: {
        id: Request.query.id as string
      }
    })
    console.log(goker)
    return Response.status(200).json(goker)
  } catch (error) {
    console.error(error)
    Response.status(500).json({ error: error.message })
  }
}
