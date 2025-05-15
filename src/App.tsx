/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import './App.css'
import DataTable from './ui/DataTable/DataTable'

function App() {
  const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: any }>({});
  console.log('selectedFilters', selectedFilters);

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
      country: 'United Kingdom',
    },
  ]

  const thead = ["ID", "Name", "Status", "Age", "Country"]

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
  // Les clés pour lesquelles tu veux générer un filtre
  const filterKeys = ['status', 'country'];
  
  return (
    <>
      <div className='box'>
        <DataTable
          filters={{
            data:[
              {
                label:{
                  title:"Status",
                  name:"status"
                },
                options:[
                  { label: 'tout', value: 'Tout', count: 5 },
                  { label: 'Option 1', value: 'option1', statusColor: 'red', count: 5 },
                  { label: 'Option 2', value: 'option2', statusColor: 'green', count: 10},
                  { label: 'Option 3', value: 'option3', statusColor: 'yellow', count: 18 },
                ]
              },
              {
                label:{
                  title:"Nom",
                  name:"nom"
                },
                options:[
                  { label: 'tout', value: 'Tout', count: 5 },
                  { label: 'Option 1', value: 'option1', statusColor: 'red', count: 5 },
                  { label: 'Option 2', value: 'option2', statusColor: 'green', count: 10},
                  { label: 'Option 3', value: 'option3', statusColor: 'yellow', count: 18 },
                ]
              }
            ]
          }}
          data={data}
          thead={thead}
          renderRow={renderRow}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
      </div>
      <pre>{JSON.stringify(selectedFilters, null, 2)}</pre>
    </>
  )
}

export default App
