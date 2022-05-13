import React, { useEffect, useRef } from 'react'
import LateralMenu from '@molecules/lateral_menu'
import { ProjectCards } from '@molecules/cards/ProjectCards'
import { projects } from 'utils/data/FakeProjects'
import { GridRow } from 'styles/grids'
import { Layout, Content, TitlePage } from 'layouts/layout_dashboard'
import axios from 'axios'

const Projects: React.FC = () => {
  const [projects, setProjects] = React.useState([])

  useEffect(() => {
    ;(async () => {
      const { data } = await axios.get('/api/projects/list_all')
      setProjects(data)
    })()
  }, [])
  return (
    <Layout>
      <LateralMenu active="home" />
      <Content>
        <TitlePage>Projetos</TitlePage>

        <GridRow justify="space-around" style={{ marginTop: 80 }}>
          {projects.map((project, index) => (
            <ProjectCards
              key={index}
              goTo={`project/${project.id}`}
              name={project.name}
              imgUrl={project.logo}
              category={project.category}
            />
          ))}
        </GridRow>
      </Content>
    </Layout>
  )
}

export default Projects
