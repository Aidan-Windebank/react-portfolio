



//bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';


export default function Resume (){


  return (
    <>
      <Container fluid>
        <Row className="m-5">
          <Col xxl={3} >
            <h3>Resume</h3>
            <Nav.Link href="">Download Resume PDF</Nav.Link>
          </Col>
          <Col xxl={9}>
            <h4>Foundational Principles</h4>
              <ul>
                <li>HTML/CSS/Git</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
                <li>The Dom</li>
                <li>APIs</li>
                <li>JQuery</li>
                <li>JSON</li>
                <li>AJAX</li>
              </ul>
              <h4>Technical Principles</h4>
              <ul>
                <li>Node</li>
                <li>ES6</li>
                <li>Object-Oriented-Programming</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>MVC Paradigm</li>
                <li>Sequelize</li>
                <li>Testing</li>
                <li>Agile Development</li>
              </ul>
              <h4>Current Performance Principles</h4>
              <ul>
                <li>Progressive Web Apps</li>
                <li>React</li>
                <li>NoSQL</li>
                <li>MERN Stack</li>
              </ul>
          </Col>
        </Row>
      </Container>
    </>
  )
}