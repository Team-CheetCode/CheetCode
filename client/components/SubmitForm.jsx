import React, { useState } from 'react'
import axios from 'axios'

const SubmitForm = props => {
  // const [name, setName] = useState('')
  const handleNameChange = (e) => {
    props.setName(e.target.value);
  }
  return (
    <div id="SubmitFormContainer">

      <div id="SubmitForm">
        <div>
          <a className="closeForm" onClick={() => props.setToggleForm(false)}>X</a>
        </div>
        <div className="formHeader">
          <h1>Enter Your Name To Confirm Submission</h1>
          <p>NOTE: This will be publicly visible along with your submission.</p>
        </div>

        <div className="formInputs">
          <input type="text" placeholder="Enter Your Full Name" required onChange={handleNameChange}/>
          <button className="submitForm" onClick={props.handleSubmit}>Confirm Submit</button>
        </div>
      </div>
    </div>
  )
}

export default SubmitForm;