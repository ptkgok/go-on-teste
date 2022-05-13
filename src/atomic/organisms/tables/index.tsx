import React, { useContext, useEffect, useState } from 'react'
import { DataTable } from './data'
import { AllTable } from './styles'
import { api2 } from '@services/api'
import Input from '@atoms/input'
import { MdSearch } from 'react-icons/md'
import { FilterDataInTable } from 'utils/functions/filter_data_in_table'

const Tables = () => {
  const [data, setData]: any = useState([])
  const [query, setQuery]: any = useState('')

  useEffect(() => {
    ;(async () => {
      const { data } = await api2.get('/users')

      // data = data.map((object: any) => {
      //   delete object.company
      //   delete object.address
      //   return object
      // })

      return setData(data)
    })()
  }, [])
  return (
    <AllTable>
      <Input
        icon={<MdSearch />}
        type="text"
        placeholder="Pesquisar por registro"
        onChange={event => setQuery(event.target.value)}
      />
      <DataTable data={FilterDataInTable(data, query)} />
    </AllTable>
  )
}

export { Tables }
