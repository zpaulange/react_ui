/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import './App.css'
import DataTable from './ui/DataTable/DataTable'

function App() {
  //selected data
  const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: any }>({});
  console.log('selectedFilters', selectedFilters);

  //status labels
  const statusLabels = {
    0: { label: "Locked", count: 2, color: "#bdbdbd" },
    1: { label: "Pending", count: 6, color: "#fbc02d" },
    2: { label: "Active", count: 7, color: "#43a047" },
    3: { label: "Blocked", count: 10, color: "#e53935" },
  }

  //data
  const data = [
    {
      id: 1,
      name: 'John Doe',
      status: 2,
      age: 25,
      country: 'Benin',
    },
    {
      id: 2,
      name: 'Jane Doe',
      status: 1,
      age: 30,
      country: 'France',
    },
    {
      id: 3,
      name: 'Bob Smith',
      status: 2,
      age: 35,
      country: 'United States',
    },
    {
      id: 4,
      name: 'Alice Johnson',
      status: 1,
      age: 40,
      country: 'Canada',
    },
    {
      id: 5,
      name: 'Charlie Brown',
      status: 2,
      age: 45,
      country: 'Canada',
    },
  ]

  // head table
  const thead = ["ID", "Name", "Status", "Age", "Country"]

  //filter configurations
  const filterConfig = [
    { key: "status", isLabel: true, statusColors: true, count: true },
    { key: "country", isLabel: true },
  ]

  //render row
  const renderRow = (item:any) => {
    return (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.status}</td>
        <td>{item.age}</td>
        <td>{item.country}</td>
      </tr>
    );
  }
  
  return (
    <>
      <div className='box'>
        <DataTable
          data={data}
          thead={thead}
          renderRow={renderRow}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          filterConfig={filterConfig}
          statusLabels={statusLabels}
        />
      </div>
      <pre>{JSON.stringify(selectedFilters, null, 2)}</pre>
    </>
  )
}

export default App
