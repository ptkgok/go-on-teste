import React from 'react'
import { BiCalendarAlt, BiRocket, BiUserCircle } from 'react-icons/bi'
import { MdQuestionAnswer, MdViewDay } from 'react-icons/md'
import LateralMenu from '@molecules/lateral_menu'
import HeaderCard from '@molecules/cards/HeaderCards'
import MediumCard from '@molecules/cards/MediumCards'
import { Column, GridRow, Row } from 'styles/grids'
import { Layout, Content, TitlePage } from 'layouts/layout_dashboard'
import Notification from '@atoms/notification'
import TopMenu from '@molecules/top_menu'
import Button from '@atoms/button'
import TextArea from '@atoms/textarea'

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <LateralMenu active="home" />
      <TopMenu />
      <Content>
        <TitlePage>Dashboard</TitlePage>
        <Row>
          <HeaderCard
            day="10"
            month="JAN"
            hour="17:30"
            title="[GO-TALK] Sinuca para campeões"
            description="Palestrante Rafael Bellarmino"
          />
        </Row>
        <GridRow justify="space-around">
          <MediumCard title="Projetos" url="/projects">
            <BiRocket />
          </MediumCard>
          <MediumCard title="Gokers" url="/gokers">
            <BiUserCircle />
          </MediumCard>
          <MediumCard title="Férias" url="/vacations">
            <MdViewDay />
          </MediumCard>
          <MediumCard title="Calendário" url="/calendar">
            <BiCalendarAlt />
          </MediumCard>
          <MediumCard title="FAQ" url="/faq">
            <MdQuestionAnswer />
          </MediumCard>
        </GridRow>
      </Content>
    </Layout>
  )
}

// export const getServerSideProps: GetServerSideProps = async ctx => {
//   const apiClient = getAPIClient(ctx)
//   const { '@gok/token': token, '@gok/user': user } = parseCookies(ctx)

//   if (!token) {
//     ctx.res.setHeader('location', '/')
//     ctx.res.statusCode = 302
//     ctx.res.end()
//     return {
//       props: {}
//     }
//   }

//   // await apiClient.get('/sessions/users')

//   return {
//     props: {}
//   }
// }

export default Dashboard
