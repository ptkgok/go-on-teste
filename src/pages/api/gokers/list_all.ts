import { Prisma } from 'backend/client'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function ListAllGokers(
  Request: NextApiRequest,
  Response: NextApiResponse
) {
  try {
    const gokers = await Prisma.goker.findMany()
    return Response.status(200).json(gokers)
  } catch (error) {
    console.error(error)
    Response.status(500).json({ error: error.message })
  }
}
