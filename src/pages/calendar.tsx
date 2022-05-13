import React, { useState } from 'react'
import LateralMenu from '@molecules/lateral_menu'
import { Layout, Content, TitlePage } from 'layouts/layout_dashboard'
import theme from 'styles/theme'
import Calendar from 'react-calendar'
import { GridColumn } from 'styles/grids'

const CalendarPage: React.FC = () => {
  const days = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado'
  ]
  const day = new Date().getDay()

  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]
  const month = new Date().getMonth()

  const [value, onChange] = useState(new Date())

  console.log(new Date(value).toISOString())

  return (
    <Layout>
      <LateralMenu active="home" />
      <Content>
        <TitlePage>Calendário</TitlePage>
        <h1 style={{ color: theme.colors.text }}>
          Hoje é: {day} de {months[month]}
        </h1>
        <h2 style={{ color: theme.colors.text }}>{days[day]}</h2>
        <GridColumn>
          <Calendar onChange={onChange} value={value} />
        </GridColumn>
      </Content>
    </Layout>
  )
}

export default CalendarPage
