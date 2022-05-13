import { Prisma } from 'backend/client'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function ListAllVacations(
  Request: NextApiRequest,
  Response: NextApiResponse
) {
  try {
    const vacations = await Prisma.vacation.findMany()
    return Response.status(200).json(vacations)
  } catch (error) {
    console.error(error)
    Response.status(500).json({ error: error.message })
  }
}
