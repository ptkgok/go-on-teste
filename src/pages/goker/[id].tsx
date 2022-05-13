import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import LateralMenu from '@molecules/lateral_menu'
import { FindGoker } from 'utils/data/FakeGokers'
import { Content, Layout } from 'layouts/layout_dashboard'
import { ProfileResume, ProfileImage, Conquests } from 'layouts/goker_layout'

// Icons
import { BiCopy } from 'react-icons/bi'
import { GridRow } from 'styles/grids'
import { Conqueror } from '@molecules/conquest_insignias'
import axios from 'axios'
import { Goker as GokerType } from 'backend/models/gokers'

interface GokerProps {
  goker: GokerType
  setGoker: (goker: GokerType) => void
}

const Goker: React.FC = () => {
  const router = useRouter()
  const { id } = router.query
  const [goker, setGoker]: GokerProps<unknown> = React.useState([])

  useEffect(() => {
    ;(async () => {
      if (id) {
        const { data } = await axios.get(`/api/gokers/list_one?id=${id}`)
        setGoker(data)
      }
    })()
  }, [id])

  return (
    <Layout>
      <LateralMenu active="home" />
      <Content>
        {goker ? (
          <React.Fragment>
            <ProfileResume>
              <ProfileImage src={goker.picture} alt="" />
              <h2>{goker.name}</h2>
              <h3>{goker.office}</h3>
              <h3>
                {goker.email}
                <BiCopy />
              </h3>
            </ProfileResume>
            <GridRow>
              <ProfileResume>
                <h3>Descrição:</h3>
                <p>{goker.description}</p>
              </ProfileResume>

              <ProfileResume>
                <h3>
                  Tempo de empresa: <br />
                  {goker.createdAt}
                </h3>
              </ProfileResume>

              <ProfileResume>
                <h3>Conquistas:</h3>
                <Conquests>
                  {goker.conquests
                    ? goker.conquests.map(data => (
                        <Conqueror
                          key={data.stamp}
                          img={data.stamp}
                          title={data.title}
                        />
                      ))
                    : 'Nenhuma conquista ainda'}
                </Conquests>
              </ProfileResume>
            </GridRow>
          </React.Fragment>
        ) : (
          <h1>Loading...</h1>
        )}
      </Content>
    </Layout>
  )
}

export default Goker
