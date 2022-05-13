import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import LateralMenu from '@molecules/lateral_menu'
import { ProfileImage } from '@molecules/top_menu/styles'
import { findProjects } from 'utils/data/FakeProjects'
import { GridRow } from 'styles/grids'
import { Layout, Content } from 'layouts/layout_dashboard'
import { ProfileResume } from 'layouts/goker_layout'
import axios from 'axios'

const Project: React.FC = () => {
  const router = useRouter()
  const { id } = router.query
  const [Project, setProject]: any = useState()

  useEffect(() => {
    ;(async () => {
      if (id) {
        const { data } = await axios.get(`/api/projects/list_one?id=${id}`)
        setProject(data)
      }
    })()
  }, [id])
  return (
    <Layout>
      <LateralMenu active="home" />
      <Content>
        {Project ? (
          <React.Fragment>
            <ProfileResume>
              <ProfileImage
                src={Project.logo}
                alt=""
                style={{ margin: '0 auto' }}
              />
              <h2>{Project.name}</h2>
              <h3>{Project.category}</h3>
            </ProfileResume>
            <GridRow>
              <ProfileResume>
                <h3>Descrição:</h3>
                <p>{Project.description}</p>
              </ProfileResume>

              <ProfileResume>
                <h3>
                  Tempo de empresa: <br />
                  {Project.createdAt}
                </h3>
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

export default Project
