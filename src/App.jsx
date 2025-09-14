import { useState } from 'react'
import Form from './components/form'
import './App.css'

function App() {

  return (
    <>
     <h1>CV Builder</h1>
     <div className='container'>
      <Form />
      
      <div className='output'>

      </div>
     </div>
    </>
  )
}

export default App
