import '../styles/App.css'

function Form({userInput, setUserInput}){
  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  }
  console.log(userInput);

    return(
        <div className='user-input'>
        <form>
          <div className='input-group'>
            <h2>General Information</h2>
            <label>
            Full Name: 
            <input type='text'
              name='fullName'
              placeholder='Full Name'
              value={userInput.fullName}
              onChange={handleChange}>
            </input>
            </label>
            <label>
              Email: 
              <input type='email'
              name='email'
              placeholder='abc@defmail.com'
              value={userInput.email}
              onChange={handleChange}>
              </input>
            </label>
            <label>
              Phone number: 
              <input type='tel'
              name='phoneNumber'
              placeholder='+123456789'
              value={userInput.phoneNumber}
              onChange={handleChange}>
              </input>
            </label>
          </div>
          <div className='input-group'>
            <h2>Educational experience</h2>
            <label>
              School name:
              <input type='text'
              name='schoolName'
              value={userInput.schoolName}
              onChange={handleChange}>
              </input>
            </label>
            <label>
              Title of study:
              <input type='text'
              name='titleOfStudy'
              value={userInput.titleOfStudy}
              onChange={handleChange}>
              </input>
            </label>
            <label>
              Date of study:
              <input type='text'
              name='dateOfStudy'
              placeholder='MM/YYYY - MM/YYYY'
              value={userInput.dateOfStudy}
              onChange={handleChange}>
              </input>
            </label>
          </div>
          <div className='input-group'>
            value={userInput.mainResponsibilities}
            <h2>Practical experience</h2>
            <label>
              Company name:
              <input type='text'
              name='companyName'
              value={userInput.companyName}
              onChange={handleChange}>
              </input>
            </label>
            <label>
              Position title:
              <input type='text'
              name='positionTitle'
              value={userInput.positionTitle}
              onChange={handleChange}>
              </input>
            </label>
            <label>
              Main responsibilities:
              <input type='text'
              name='mainResponsibilities'
              value={userInput.mainResponsibilities}
              onChange={handleChange}>
              </input>
            </label>
            <label>
              Date of employment:
              <input type='text'
              name='dateOfEmployment'
              placeholder='MM/YYYY - MM/YYYY'
              value={userInput.dateOfEmployment}
              onChange={handleChange}>
              </input>
            </label>

          </div>
        </form>

      </div>
    )
}

export default Form;