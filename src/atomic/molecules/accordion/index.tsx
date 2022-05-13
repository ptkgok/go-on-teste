import React, { useState } from 'react'
import { AccordionProps } from './props'
import { Container, Title, Panel } from './style'

function Accordion({
  title,
  description,
  alignPanel,
  alignText,
  justifyPanel,
  justifyText
}: AccordionProps) {
  const [openAccordion, setOpenAccordion]: any = useState('none')

  return (
    <Container>
      <Title
        alignText={alignText}
        justifyText={justifyText}
        onClick={() =>
          openAccordion === 'none'
            ? setOpenAccordion('block')
            : setOpenAccordion('none')
        }
      >
        <h4>{title}</h4>
      </Title>
      <Panel
        justifyPanel={justifyPanel}
        alignPanel={alignPanel}
        style={{ display: openAccordion }}
      >
        <p>{description}</p>
      </Panel>
    </Container>
  )
}

export default Accordion
