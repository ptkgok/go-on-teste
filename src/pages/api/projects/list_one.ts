import { Prisma } from 'backend/client'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function ListOneProject(
  Request: NextApiRequest,
  Response: NextApiResponse
) {
  try {
    const project = await Prisma.project.findUnique({
      where: {
        id: Request.query.id as string
      }
    })
    console.log(project)
    return Response.status(200).json(project)
  } catch (error) {
    console.error(error)
    Response.status(500).json({ error: error.message })
  }
}
