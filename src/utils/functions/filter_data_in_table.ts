export function FilterDataInTable(rows, query) {
  const columns = rows[0] && Object.keys(rows[0])
  const searchQuery = query.toLowerCase()
  return rows.filter(row =>
    columns.some(
      column => row[column].toString().toLowerCase().indexOf(searchQuery) > -1
    )
  )
}
