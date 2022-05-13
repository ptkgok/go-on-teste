import { Prisma } from 'backend/client'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function ListAllProjects(
  Request: NextApiRequest,
  Response: NextApiResponse
) {
  try {
    const projects = await Prisma.project.findMany()
    return Response.status(200).json(projects)
  } catch (error) {
    console.error(error)
    Response.status(500).json({ error: error.message })
  }
}
