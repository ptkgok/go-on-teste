import { Prisma } from 'backend/client'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function CreateProject(
  Request: NextApiRequest,
  Response: NextApiResponse
) {
  try {
    const project = await Prisma.project.create({
      data: {
        ...Request.body
      }
    })
    return Response.status(200).json(project)
  } catch (error) {
    console.error(error)
    Response.status(500).json({ error: error.message })
  }
}
