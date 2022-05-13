import { Prisma } from 'backend/client'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function CreateGoker(
  Request: NextApiRequest,
  Response: NextApiResponse
) {
  try {
    const goker = await Prisma.goker.create({
      data: {
        ...Request.body
      }
    })
    return Response.status(200).json(goker)
  } catch (error) {
    console.error(error)
    Response.status(500).json({ error: error.message })
  }
}
