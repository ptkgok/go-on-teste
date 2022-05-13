import React, { createContext, useState } from 'react'
import { setCookie } from 'nookies'
import Router from 'next/router'

import { recoverUserInformation, signInRequest } from 'services/auth'
import { api } from 'services/api'
import { AuthContextType, SignInData } from './props'

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const isAuthenticated = !!user

  async function signIn({ email, password }: SignInData) {
    try {
      const { token, user } = await signInRequest({
        email,
        password
      })

      setCookie(undefined, '@gok/token', token, {
        maxAge: 60 * 60 * 1 // 1 hour
      })
      setCookie(undefined, '@gok/user', JSON.stringify(user), {
        maxAge: 60 * 60 * 1 // 1 hour
      })

      api.defaults.headers.Authorization = `Bearer ${token}`

      setUser(user)

      Router.push('/dashboard')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
