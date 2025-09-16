import {useState} from 'react';
import '../styles/App.css'

function Form({setUserInput}){
  const [formData, setFormData] = useState({
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

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleSubmit = (fields) => {
    setUserInput(prev => ({
      ...prev,
      ...fields,
    }))
  }

  console.log(formData);

    return(
        <div className='user-input'>
        <form onSubmit={(e) => {
          e.preventDefault();
        }}>
          <div className='input-group'>
            <h2>General Information</h2>
            <label>
            Full Name: 
            <input type='text'
              name='fullName'
              placeholder='Full Name'
              value={formData.fullName}
              onChange={handleChange}>
            </input>
            </label>
            <label>
              Email: 
              <input type='email'
              name='email'
              placeholder='abc@defmail.com'
              value={formData.email}
              onChange={handleChange}>
              </input>
            </label>
            <label>
              Phone number: 
              <input type='tel'
              name='phoneNumber'
              placeholder='+123456789'
              value={formData.phoneNumber}
              onChange={handleChange}>
              </input>
            </label>
            <button type="button" onClick={() => handleSubmit({
            fullName: formData.fullName,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
          })}>
            Save Info
          </button>
          </div>
          <div className='input-group'>
            <h2>Educational experience</h2>
            <label>
              School name:
              <input type='text'
              name='schoolName'
              value={formData.schoolName}
              onChange={handleChange}>
              </input>
            </label>
            <label>
              Title of study:
              <input type='text'
              name='titleOfStudy'
              value={formData.titleOfStudy}
              onChange={handleChange}>
              </input>
            </label>
            <label>
              Date of study:
              <input type='text'
              name='dateOfStudy'
              placeholder='MM/YYYY - MM/YYYY'
              value={formData.dateOfStudy}
              onChange={handleChange}>
              </input>
            </label>
            <button type='button' onClick={() => handleSubmit({
              schoolName: formData.schoolName,
              titleOfStudy: formData.titleOfStudy,
              dateOfStudy: formData.dateOfStudy,
            })}>
              Save Info
            </button>
          </div>
          <div className='input-group'>
            <h2>Practical experience</h2>
            <label>
              Company name:
              <input type='text'
              name='companyName'
              value={formData.companyName}
              onChange={handleChange}>
              </input>
            </label>
            <label>
              Position title:
              <input type='text'
              name='positionTitle'
              value={formData.positionTitle}
              onChange={handleChange}>
              </input>
            </label>
            <label>
              Main responsibilities:
              <input type='text'
              name='mainResponsibilities'
              value={formData.mainResponsibilities}
              onChange={handleChange}>
              </input>
            </label>
            <label>
              Date of employment:
              <input type='text'
              name='dateOfEmployment'
              placeholder='MM/YYYY - MM/YYYY'
              value={formData.dateOfEmployment}
              onChange={handleChange}>
              </input>
            </label>
            <button type='button' onClick={() => handleSubmit({
              companyName: formData.companyName,
              positionTitle: formData.positionTitle,
              mainResponsibilities: formData.mainResponsibilities,
              dateOfEmployment: formData.dateOfEmployment,
            })}>
              Save Info
            </button>

          </div>
        </form>

      </div>
    )
}

export default Form;