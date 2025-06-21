// import './App.css'
// import {} from '/component'

const Cell = () => {
  return (
      <td>test</td>
  )
}

const Row = ({data}) => {
  return (
      <tr>
        <Cell />
        <Cell/>
        <Cell/>
      </tr>
  )
}

function App() {

  const columns = ['id', 'name', 'age']
  const rows = [
    {id: 1, name: 'viet', age: 23},
    {id: 2, name: 'viet nam', age: 23},
    {id: 3, name: 'nam viet', age: 23},
  ]

  return (
      <>
        <table border={1} cellSpacing={0}>
          <thead>
          <tr>
            {
              columns.map(column =>{
                return <th>{column}</th>
              })
            }
          </tr>
          </thead>
          <tbody>
              {
                rows.map(row =>{
                  return <Row data={row}/>
                })
              }
          </tbody>
        </table>
      </>
  )
}

export default App