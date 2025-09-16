import '../styles/App.css';
import '../styles/template.css';

function Template({ userInput }) {
    return (
        <div className="template-container">
            <h2 className='preview-title'>CV preview</h2>
            <div className="template">
                <div className='template-general-info'>
                    <h3>{userInput.fullName}</h3>
                    <p>{userInput.email} | {userInput.phoneNumber}</p>
                </div>
                <hr />
                <div className='template-education'>
                    <h3>Educational Experience</h3>
                    <p>{userInput.schoolName}</p>
                    <p>{userInput.titleOfStudy}</p>
                    <p>{userInput.dateOfStudy}</p>
                </div>
                <hr />
                <div className='template-practical'>
                    <h3>Practical Experience</h3>
                    <p>{userInput.companyName}</p>
                    <p>{userInput.positionTitle}</p>
                    <p>{userInput.mainResponsibilities}</p>
                    <p>{userInput.dateOfEmployment}</p>

                </div>
            </div>
        </div>
    )
}

export default Template;