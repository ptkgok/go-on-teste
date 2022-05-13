import { parseCookies } from 'nookies'

export function VerifyLogin(context) {
  const { '@gok/token': token } = parseCookies(context)

  if (token) {
    context.res.setHeader('location', '/dashboard')
    context.res.statusCode = 302
    context.res.end()
    return { props: {} }
  }
  return { props: {} }
}
