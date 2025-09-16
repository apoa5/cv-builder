import { useState } from 'react'    
import Form from './components/form'
import Template from './components/template'
import './styles/App.css'

function App() {
  const [userInput, setUserInput] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    schoolName: '',
    titleOfStudy: '',
    dateOfStudy: '',
    companyName: '',
    positionTitle: '',
    mainResponsibilities: '',
    dateOfEmployment: '',
  })

  return (
    <>
     <h1>CV Builder</h1>
     <div className='container'>
      <div className='input'>
        <Form userInput={userInput} setUserInput={setUserInput}/>
      </div>
      <div className='output'>
        <Template userInput={userInput}/>
      </div>
     </div>
    </>
  )
}

export default App
