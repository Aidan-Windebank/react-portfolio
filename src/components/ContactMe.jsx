// pacakages and library imports
import { useState } from 'react';


// Bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';


const contact = {
  name: "",
  email: "",
  message: "" 
}

export default function contactForm(props) {

  const [ contactData, setContactData ] = useState(contact)
  // const [ stateState, setStateState ] = useState("")
  // const [ formState, setFormState ] = useState("")
  const [ alertState, setAlertState ] = useState({type: "", message: ""})


  function handleInputChange(e) {
    e.preventDefault()
    setAlertState({type: "", message: ""})
    setContactData({...contactData, [e.target.name]: e.target.value})
    console.log(contactData)
  }

  function submitForm(e){
    e.preventDefault();

    let errorFound = false;

    Object.keys(contactData).forEach(key => {
      if (contactData[key].length === 0) errorFound = true
    })


    if (errorFound === false){
      setAlertState({type: "success", message: "Your infromation has been submitted!"})

      // setFormState(userData)  // ok to submit
    } else {
      setAlertState({type: "danger", message: "You did not fill out all form fields"}) // not ok to submit

    }
    console.log(contactData)
  }



  return (
    <>

      <h3>Contact Me</h3>

      <Form>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" placeholder="John Smith" value={contactData.name} onChange={handleInputChange} name="name"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" placeholder="Enter your email"value={contactData.email} onChange={handleInputChange} name="email"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label>Message:</Form.Label>
          <Form.Control type="text" placeholder='Enter message here' value={contactData.message} onChange={handleInputChange} name='message'/>
          <Form.Text>
           
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={submitForm}>Submit</Button>

        {alertState.type.length > 0 && ( 
        <Alert variant={alertState.type} className= "mt-2">
          {alertState.message}
        </Alert>
        )}

      </Form>
    </>
  )
}
