// pacakages and library imports
import { useState } from 'react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
  const [alertState, setAlertState] = useState({ type: "", message: "" })

  function handleInputChange(e) {
    e.preventDefault()
    setAlertState({ type: "", message: "" })
    setContactData({ ...contactData, [e.target.name]: e.target.value })
  }

  function checkForm(e) {
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
      setAlertState({ type: "warning", message: "Your infromation has been submitted!" })
      setContactData(contact) 
      setAlertState({ type: "", message: "" })
      errorFound = false
    } else {
      if (emailInvalid == true){
        setAlertState({ type: "warning", message: "Please fill in a valid email" }) 
      } else {
        setAlertState({ type: "warning", message: "You did not fill out all form fields" }) 
      }
    }
  }

  // code to send emails from my form without backend service
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9figy4u', 'template_m1ykx8q', form.current, 'x1DQXkt5XjYTlSh9d')
      .then((result) => {
          console.log(result.text);
          setAlertState({ type: "success", message: "Email sent successfully!" });
          setContactData(contact)

      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <>
      <Container fluid>
        <Row className="m-5">
          <Col lg={2} >
            <h3>Contact Me</h3>
          </Col>
          <Col lg={10}>
            <Form ref={form} onSubmit={sendEmail}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" value={form.name} onChange={handleInputChange} onBlur={checkForm} name="name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" value={form.email} onChange={handleInputChange} onBlur={checkForm} name="email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label>Message:</Form.Label>
                <Form.Control type="text" as="textarea" rows={5} placeholder='Enter Message' value={form.message} onChange={handleInputChange} onBlur={checkForm} name='message' />
              </Form.Group>
              <Button variant="secondary" type="submit" >Submit</Button>

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