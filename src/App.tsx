/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import './App.css'
import Select from './ui/Select/Select'
import DataTable from './ui/DataTable/DataTable'

function App() {
  const optionsList1 = [
    { label: 'tout', value: 'Tout', count: 5 },
    { label: 'Option 1', value: 'option1', statusColor: 'red', count: 5 },
    { label: 'Option 2', value: 'option2', statusColor: 'green', count: 10},
    { label: 'Option 3', value: 'option3', statusColor: 'yellow', count: 18 },
  ]
  const optionsList2 = [
    { label: 'BJ', value: 'Benin' },
    { label: 'NG', value: 'Nigeria' },
    { label: 'GH', value: 'Ghana' },
  ]
  const [value1, setValue1] = useState(null)
  console.log("value1", value1);

  const [value2, setValue2] = useState(null)
  console.log("value2", value2);
  
  return (
    <>
      <div className='app'>
        <Select
          options={optionsList1}
          onSelect={(option: any) => {
            //console.log("option", option)
            setValue1(option.value1)
          }}
          statusColors={true}
          count={true}
        />
        <Select
          options={optionsList2}
          onSelect={(option: any) => {
            //console.log("option", option)
            setValue2(option.value)
          }}
          isLabel={true}
        />
      </div>
      <div className='box'>
        <DataTable/>
      </div>
    </>
  )
}

export default App
