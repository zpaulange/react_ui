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
    {
      id: 6,
      name: 'Eve Green',
      status: 1,
      age: 50,
      country: 'United States',
    },
    {
      id: 7,
      name: 'Frank White',
      status: 2,
      age: 55,
      country: 'France',
    },
    {
      id: 8,
      name: 'Grace Black',
      status: 1,
      age: 60,
      country: 'Benin',
    },
    {
      id: 9,
      name: 'Hank Red',
      status: 2,
      age: 65,
      country: 'United States',
    },
    {
      id: 10,
      name: 'Ivy Blue',
      status: 1,
      age: 70,
      country: 'Canada',
    },
    {
      id: 11,
      name: 'Jack Brown',
      status: 2,
      age: 75,
      country: 'France',
    },
    {
      id: 12,
      name: 'Kate Green',
      status: 1,
      age: 80,
      country: 'Benin',
    },
    {
      id: 13,
      name: 'Liam White',
      status: 2,
      age: 85,
      country: 'United States',
    },
    {
      id: 14,
      name: 'Mia Black',
      status: 1,
      age: 90,
      country: 'Canada',
    },
    {
      id: 15,
      name: 'Noah Red',
      status: 2,
      age: 95,
      country: 'France',
    },
    {
      id: 16,
      name: 'Olivia Blue',
      status: 1,
      age: 100,
      country: 'Benin',
    },
    {
      id: 17,
      name: 'Parker Brown',
      status: 2,
      age: 105,
      country: 'United States',
    },
    {
      id: 18,
      name: 'Quinn Green',
      status: 1,
      age: 110,
      country: 'Canada',
    },
    {
      id: 19,
      name: 'Riley White',
      status: 2,
      age: 115,
      country: 'France',
    },
    {
      id: 20,
      name: 'Sofia Black',
      status: 1,
      age: 120,
      country: 'Benin',
    },
    {
      id: 21,
      name: 'Tayla Red',
      status: 2,
      age: 125,
      country: 'United States',
    },
    {
      id: 22,
      name: 'Uma Blue',
      status: 1,
      age: 130,
      country: 'Canada',
    },
    {
      id: 23,
      name: 'Vivian Brown',
      status: 2,
      age: 135,
      country: 'France',
    },
    {
      id: 24,
      name: 'Walter Green',
      status: 1,
      age: 140,
      country: 'Benin',
    },
    {
      id: 25,
      name: 'Xavier White',
      status: 2,
      age: 145,
      country: 'United States',
    },
    {
      id: 26,
      name: 'Yvette Black',
      status: 1,
      age: 150,
      country: 'Canada',
    },
    {
      id: 27,
      name: 'Zack Red',
      status: 2,
      age: 155,
      country: 'France',
    },
    {
      id: 28,
      name: 'Ava Blue',
      status: 1,
      age: 160,
      country: 'Benin',
    },
    {
      id: 29,
      name: 'Bella Brown',
      status: 2,
      age: 165,
      country: 'United States',
    },
    {
      id: 30,
      name: 'Caleb Green',
      status: 1,
      age: 170,
      country: 'Canada',
    },
    {
      id: 31,
      name: 'Daisy White',
      status: 2,
      age: 175,
      country: 'France',
    },
    {
      id: 32,
      name: 'Ethan Black',
      status: 1,
      age: 180,
      country: 'Benin',
    },
    {
      id: 33,
      name: 'Finn Red',
      status: 2,
      age: 185,
      country: 'United States',
    },
    {
      id: 34,
      name: 'Gemma Blue',
      status: 1,
      age: 190,
      country: 'Canada',
    },
    {
      id: 35,
      name: 'Harper Brown',
      status: 2,
      age: 195,
      country: 'France',
    },
    {
      id: 36,
      name: 'Isaac Green',
      status: 1,
      age: 200,
      country: 'Benin',
    },
    {
      id: 37,
      name: 'Jasmine White',
      status: 2,
      age: 205,
      country: 'United States',
    },
    {
      id: 38,
      name: 'Kai Black',
      status: 1,
      age: 210,
      country: 'Canada',
    },
    {
      id: 39,
      name: 'Luna Red',
      status: 2,
      age: 215,
      country: 'France',
    },
    {
      id: 40,
      name: 'Mason Blue',
      status: 1,
      age: 220,
      country: 'Benin',
    }
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
