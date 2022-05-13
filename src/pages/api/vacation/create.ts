import { Prisma } from 'backend/client'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function CreateVacation(
  Request: NextApiRequest,
  Response: NextApiResponse
) {
  try {
    const vacation = await Prisma.vacation.create({
      data: {
        ...Request.body,
        goker: {
          connect: {
            id: Request.body.gokerId
          }
        }
      }
    })
    return Response.status(200).json(vacation)
  } catch (error) {
    console.error(error)
    Response.status(500).json({ error: error.message })
  }
}
