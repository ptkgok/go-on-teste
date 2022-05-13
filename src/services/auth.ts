import { parseCookies } from 'nookies'
import { api } from './api'

type SignInRequestData = {
  email: string
  password: string
}

export async function signInRequest(data: SignInRequestData) {
  try {
    const {
      data: { user, token }
    } = await api.post('/sessions', data)

    return {
      token: token,
      user: user
    }
  } catch (error) {
    console.log(error)
  }
}

export async function recoverUserInformation(user) {
  const parsedUser = JSON.parse(user)

  const { data } = await api.post('/sessions/users', {
    email: parsedUser.email
  })

  return {
    user: data.user.user
    // {
    //   // name: '',
    //   // email: '',
    //   // avatar_url: ''
    // }
  }
}
