import Button from '@atoms/button'
import Input from '@atoms/input'
import { ContainerLogin } from '@organisms/forms/login/styles'
import axios from 'axios'
import { Container } from 'layouts/home'
import Head from 'next/head'
import React from 'react'
import { useForm } from 'react-hook-form'
import { BiLogIn } from 'react-icons/bi'
import { MdMail } from 'react-icons/md'
import { RiLockPasswordFill, RiUser2Fill } from 'react-icons/ri'
// import GoonLogo from '../assets/goonlogolight.svg'

function CreateUser() {
  const { handleSubmit, register } = useForm()

  async function handleCreateUser(payload) {
    try {
      const { data } = await axios.post('/api/user/create', payload)
      alert('Usuario criado com sucesso!')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <img src="../assets/goonlogolight.svg" />
      <ContainerLogin onSubmit={handleSubmit(handleCreateUser)}>
        <Input
          register={{ ...register('name') }}
          id="name"
          name="name"
          type="name"
          required
          placeholder="Name"
          icon={<RiUser2Fill />}
        />
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

export default CreateUser
