import { Prisma } from 'backend/client'
import { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export default async function UserLogin(
  Request: NextApiRequest,
  Response: NextApiResponse
) {
  try {
    const { email, password } = Request.body

    const user = await Prisma.user.findFirst({
      where: {
        email: email
      }
    })

    const validPassword = await bcrypt.compare(password, user.password)

    if (!validPassword) {
      return Response.status(401).json({ error: 'Invalid credentials' })
    }

    const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1d' })

    console.log(token)

    return Response.status(200).json(token)
  } catch (error) {
    console.error(error)
    Response.status(500).json({ error: error.message })
  }
}
