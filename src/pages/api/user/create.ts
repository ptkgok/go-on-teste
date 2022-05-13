import { Prisma } from 'backend/client'
import { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'

export default async function CreateUser(
  Request: NextApiRequest,
  Response: NextApiResponse
) {
  try {
    console.log(Request.body)
    const user = await Prisma.user.create({
      data: {
        ...Request.body,
        password: bcrypt.hashSync(Request.body.password, 10)
      }
    })
    return Response.status(200).json(user)
  } catch (error) {
    console.error(error)
    Response.status(500).json({ error: error.message })
  }
}
