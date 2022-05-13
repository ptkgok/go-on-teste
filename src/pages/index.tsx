import Button from '@atoms/button'
import Input from '@atoms/input'
import { ContainerLogin } from '@organisms/forms/login/styles'
import axios from 'axios'
import { Container } from 'layouts/home'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { setCookie } from 'nookies'
import React from 'react'
import { useForm } from 'react-hook-form'
import { BiLogIn } from 'react-icons/bi'
import { MdMail } from 'react-icons/md'
import { RiLockPasswordFill, RiUser2Fill } from 'react-icons/ri'
import { VerifyLogin } from 'utils/functions/verify_login'
import GoonLogo from '../assets/goonlogolight.svg'

function LoginUser() {
  const { handleSubmit, register } = useForm()
  const router = useRouter()

  async function handleLogin(payload) {
    try {
      const { data } = await axios.post('/api/user/login', payload)

      setCookie(undefined, '@gok/token', data.token, {
        maxAge: 60 * 60 * 1 // 1 hour
      })
      return router.push('/dashboard')
    } catch (error) {
      return console.error(error)
    }
  }
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <GoonLogo />
      <ContainerLogin onSubmit={handleSubmit(handleLogin)}>
        <Input
          register={{ ...register('email') }}
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="Email address"
          icon={<MdMail />}
        />
        <Input
          register={{ ...register('password') }}
          id="password"
          name="password"
          type="password"
          required
          placeholder="Password"
          icon={<RiLockPasswordFill />}
        />
        <Button primary text="Criar" icon={<BiLogIn />} />
      </ContainerLogin>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx =>
  VerifyLogin(ctx)

export default LoginUser
