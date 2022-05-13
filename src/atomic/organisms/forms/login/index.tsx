import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { BiLogIn } from 'react-icons/bi'
import { AuthContext } from 'contexts/authentication/auth_context'

import { ContainerLogin } from './styles'
import Button from '@atoms/button'
import Input from '@atoms/input'
import { MdMail } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm()
  const { signIn } = useContext(AuthContext)

  async function handleSignIn(data) {
    console.log(data)
    await signIn(data)
  }

  return (
    <ContainerLogin onSubmit={handleSubmit(handleSignIn)}>
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
      <Button primary text="Avançar" icon={<BiLogIn />} />
    </ContainerLogin>
  )
}

export default Login
