// pacakages and library imports
import { useState } from 'react';


// Bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const contact = {
  name: "",
  email: "",
  message: ""
}

export default function contactForm(props) {

  const [contactData, setContactData] = useState(contact)
  // const [ stateState, setStateState ] = useState("")
  // const [ formState, setFormState ] = useState("")
  const [alertState, setAlertState] = useState({ type: "", message: "" })


  function handleInputChange(e) {
    e.preventDefault()
    setAlertState({ type: "", message: "" })
    setContactData({ ...contactData, [e.target.name]: e.target.value })
    console.log(contactData)
  }

  function submitForm(e) {
    e.preventDefault();

    let errorFound = false;
    let emailInvalid = false;

    Object.keys(contactData).forEach(key => {
      if (key == "email") {
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(contactData[key])) {
          errorFound = true
          emailInvalid = true
        } 
      }
      if (contactData[key].length === 0) errorFound = true
    })


    if (errorFound === false) {
      setAlertState({ type: "success", message: "Your infromation has been submitted!" })

      // setFormState(userData)  // ok to submit
    } else {
      if (emailInvalid == true){
        setAlertState({ type: "danger", message: "Please fill in a valid email" }) // not ok to submit
      } else {
        setAlertState({ type: "danger", message: "You did not fill out all form fields" }) // not ok to submit
      }

    }
    console.log(contactData)
  }



  return (
    <>

      <Container fluid>
        <Row className="m-5">
          <Col xxl={3} >
            <h3>Contact Me</h3>
          </Col>
          <Col xxl={9}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" placeholder="John Smith" value={contactData.name} onChange={handleInputChange} onBlur={submitForm} name="name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" value={contactData.email} onChange={handleInputChange} onBlur={submitForm} name="email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label>Message:</Form.Label>
                <Form.Control type="text" placeholder='Enter message here' value={contactData.message} onChange={handleInputChange} onBlur={submitForm} name='message' />
                <Form.Text>

                </Form.Text>
              </Form.Group>
              <Button variant="primary" type="submit" onClick={submitForm}>Submit</Button>

              {alertState.type.length > 0 && (
                <Alert variant={alertState.type} className="mt-2">
                  {alertState.message}
                </Alert>
              )}
            </Form>
          </Col>
        </Row>
      </Container>






    </>
  )
}
