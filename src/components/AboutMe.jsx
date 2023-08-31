

//bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aidan from "../assets/images/aidan.jpg"


export default function AboutMe (){


  return (
    <>

      
      <Container fluid>
        <Row className="m-5" >
          <Col xxl={4}>
            <img src={aidan} alt="placeholder image" style={{ width: "25rem" }}/>
          </Col>
          <Col xxl={8}>
            <h3>About Me</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, facilis quae ab sequi atque sunt aliquam cum repellendus voluptatibus quod ipsum animi enim provident. Quae unde repudiandae molestias magni optio!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, facilis quae ab sequi atque sunt aliquam cum repellendus voluptatibus quod ipsum animi enim provident. Quae unde repudiandae molestias magni optio!</p>
          </Col>
        </Row>
      </Container>

    </>
  )
}