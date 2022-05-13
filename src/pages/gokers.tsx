import React, { useEffect } from 'react'
import LateralMenu from '@molecules/lateral_menu'
import { UserCard } from '@molecules/cards/UserCards'
// import { gokers } from 'utils/data/FakeGokers'
import { GridColumn } from 'styles/grids'
import { Layout, Content, TitlePage } from 'layouts/layout_dashboard'
import axios from 'axios'
import LoaderGokers from '@molecules/loader/gokers'
import { useContainerDimensions } from 'hooks/use_resize'

const Gokers: React.FC = () => {
  const [gokers, setGokers] = React.useState([])

  const refLoad = React.useRef()
  const { width, height } = useContainerDimensions(refLoad)

  useEffect(() => {
    ;(async () => {
      const { data } = await axios.get('/api/gokers/list_all')
      setGokers(data)
    })()
  }, [])
  return (
    <Layout>
      <LateralMenu active="home" />
      <Content>
        <TitlePage>Gokers</TitlePage>
        <GridColumn ref={refLoad}>
          {gokers.length > 0 ? (
            gokers.map((goker, index) => (
              <UserCard
                key={index}
                goTo={`goker/${goker.id}`}
                imgUrl={goker.picture}
                name={goker.name}
                category={goker.office}
              />
            ))
          ) : (
            <GridColumn>
              <LoaderGokers width={width} />
            </GridColumn>
          )}
        </GridColumn>
      </Content>
    </Layout>
  )
}

export default Gokers
