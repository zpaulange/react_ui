/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import './App.css'
import Select from './ui/Select/Select'
import DataTable from './ui/DataTable/DataTable'

function App() {
  
  return (
    <>
      <div className='box'>
        <DataTable
          filters={{
            defaultFilter:true,
            data:[
              {
                options:[
                  { label: 'tout', value: 'Tout', count: 5 },
                  { label: 'Option 1', value: 'option1', statusColor: 'red', count: 5 },
                  { label: 'Option 2', value: 'option2', statusColor: 'green', count: 10},
                  { label: 'Option 3', value: 'option3', statusColor: 'yellow', count: 18 },
                ]
              },
              {
                options:[
                  { label: 'tout', value: 'Tout', count: 5 },
                  { label: 'Option 1', value: 'option1', statusColor: 'red', count: 5 },
                  { label: 'Option 2', value: 'option2', statusColor: 'green', count: 10},
                  { label: 'Option 3', value: 'option3', statusColor: 'yellow', count: 18 },
                ]
              }
            ]
          }}
          data={[]}
        />
      </div>
    </>
  )
}

export default App
