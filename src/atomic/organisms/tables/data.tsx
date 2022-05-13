import React from 'react'
import {
  Container,
  Column,
  Row,
  NotFound,
  TableContent,
  ColumnHead,
  RowHead
} from './styles'
import { BiBlock, BiLike } from 'react-icons/bi'
import Button from '@atoms/button'

const DataTable = ({ data }: any) => {
  const columns = data && data[0] && Object.keys(data[0])

  return data.length > 0 ? (
    <Container>
      <RowHead>
        {data[0] &&
          columns.map((heading, i) => (
            <>
              {(columns[0] = null)}
              {heading === 'id' ? null : (
                <ColumnHead key={i}> {heading} </ColumnHead>
              )}
            </>
          ))}
        <ColumnHead>Permitir</ColumnHead>
        <ColumnHead>Negar</ColumnHead>
      </RowHead>
      <TableContent>
        {data.map((row, index) => (
          <Row key={index}>
            {columns.map((column, index) =>
              column === null ? null : (
                <Column key={index}>{row[column]}</Column>
              )
            )}
            <Column>
              <Button
                onClick={() => {}}
                primary
                outline
                icon={<BiLike color="white" />}
              />
            </Column>
            <Column>
              <Button
                onClick={() => {}}
                primary
                outline
                icon={<BiBlock color="white" />}
              />
            </Column>
          </Row>
        ))}
      </TableContent>
    </Container>
  ) : (
    <NotFound>
      <h2>Sem resultados, revise as informações...</h2>
    </NotFound>
  )
}

export { DataTable }
