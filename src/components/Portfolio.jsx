


// bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";
// import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//image imports for individual projects
import placeholder from '../assets/images/placeholder.png';
import recipeFinder from '../assets/images/recipeFinder.png';

//import project component
import Project from "./Project";


export default function Portfolio (){

const portfolioData = [
  {
    title: "Recipe Finder",
    img: recipeFinder,
    description: "Recipe Finder using Web API",
    url: "https://ascolardi.github.io/group-project1/",
    github: "https://github.com/Aidan-Windebank/recipe-finder"
  },
  {
    title: "project-2",
    img: placeholder,
    description: "short description",
    url: "site URL",
    github: "https://github.com/Aidan-Windebank"
  },
  {
    title: "project-3",
    img: placeholder,
    description: "short description",
    url: "site URL",
    github: "https://github.com/Aidan-Windebank"
  },
  {
    title: "project-4",
    img: placeholder,
    description: "short description",
    url: "site URL",
    github: "https://github.com/Aidan-Windebank"
  },
  {
    title: "project-5",
    img: placeholder,
    description: "short description",
    url: "site URL",
    github: "https://github.com/Aidan-Windebank"
  },
  {
    title: "project-6",
    img: placeholder,
    description: "short description",
    url: "site URL",
    github: "https://github.com/Aidan-Windebank"
  },
]

  return (
    <>
      <Container fluid>
        <Row className="m-5">
          <Col xxl={2} id="portfolio-aside">
            <h3>My Portfolio</h3>
          </Col>
          <Col xxl={10}>
            <Container fluid>
              <Row>
                {
                  portfolioData.map(project => {
                    return <Project project={project}/>
                  })
                }
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  )
}