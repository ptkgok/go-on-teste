import Select from '@atoms/select'
import Table from '@organisms/table'
import { api2 } from '@services/api'
import Accordion from '@molecules/accordion'
import React, { useEffect, useState } from 'react'
import LateralMenu from '@molecules/lateral_menu'
import { Tables } from '@organisms/tables'
import { Content, Layout, TitlePage } from 'layouts/layout_dashboard'
import { VacationsModel } from 'backend/models/vacations'
import axios from 'axios'
const Vacations: React.FC = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    ;(async () => {
      const { data } = await axios.get('/api/vacation/list_all')

      // data = data.map((object: any) => {
      //   delete object.company
      //   delete object.address
      //   return object
      // })

      return setData(data)
    })()
  }, [])

  return (
    <Layout>
      <LateralMenu active="item1" />

      <Content>
        <TitlePage>Férias</TitlePage>
        <h1 style={{ color: '#38D430' }}>Ultimos pedidos de férias</h1>
        {/* <Tables /> */}
        <Table data={data} contents={['name', 'email']} url="/dashboard" />
      </Content>
    </Layout>
  )
}

export default Vacations
