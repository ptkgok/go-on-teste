import React from 'react'
import LateralMenu from '@molecules/lateral_menu'
import Accordion from '@molecules/accordion'
import { FAQS } from 'utils/data/FakeFAQs'
import { Layout, Content, TitlePage } from 'layouts/layout_dashboard'

const Faq: React.FC = () => {
  return (
    <Layout>
      <LateralMenu active="home" />
      <Content>
        <TitlePage>Faq</TitlePage>
        {FAQS.map((data, key) => (
          <Accordion
            key={key}
            title={data.name}
            description={data.description}
          />
        ))}
      </Content>
    </Layout>
  )
}

export default Faq
