import {useState} from 'react';
import '../App.css'

function Form(){
    return(
        <div className='user-input'>
        <form>
          <div className='input-group'>
            <h2>General Information</h2>
            <label>
            Full Name: 
            <input type='text'
              name='fullName'
              placeholder='Full Name'>
            </input>
            </label>
            <label>
              Email: 
              <input type='email'
              name='email'
              placeholder='abc@defmail.com'>
              </input>
            </label>
            <label>
              Phone number: 
              <input type='tel'
              name='phoneNumber'
              placeholder='+123456789'>
              </input>
            </label>
          </div>
          <div className='input-group'>
            <h2>Educational experience</h2>
            <label>
              School name:
              <input type='text'
              name='schoolName'>
              </input>
            </label>
            <label>
              Title of study:
              <input type='text'
              name='titleOfStudy'>
              </input>
            </label>
            <label>
              Date of study:
              <input type='text'
              name='dateOfStudy'
              placeholder='MM/YYYY - MM/YYYY'>
              </input>
            </label>
          </div>
          <div className='input-group'>
            <h2>Practical experience</h2>
            <label>
              Company name:
              <input type='text'
              name='companyName'>
              </input>
            </label>
            <label>
              Position title:
              <input type='text'
              name='positionTitle'>
              </input>
            </label>
            <label>
              Main responsibilities:
              <input type='text'
              name='mainResponsibilities'>
              </input>
            </label>
            <label>
              Date of employment:
              <input type='text'
              name='dateOfEmployment'
              placeholder='MM/YYYY - MM/YYYY'>
              </input>
            </label>

          </div>
        </form>

      </div>
    )
}

export default Form;