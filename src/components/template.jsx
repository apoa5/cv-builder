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
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default Template;