



//bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import resumesample from '../assets/images/resumesample.png'


export default function Resume (){


  return (
    <>
      
      <Container fluid>
        <Row className="m-5">
          <Col xxl={3} >
            <h3>Resume</h3>
          </Col>
          <Col xxl={9}>
            <img src={resumesample} alt="placeholder image" style={{ width: "75%" }}/>
          </Col>
        </Row>
      </Container>





    </>
  )
}