// bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//image imports for individual projects
import recipeFinder from '../assets/images/recipeFinder.png';
import hometownClassifieds from '../assets/images/hometownClassifieds.png';
import eBackEnd from '../assets/images/eBackEnd.png';
import socialAPI from '../assets/images/socialAPI.png';
import gardenApp from '../assets/images/gardenApp.png';
import employeeTracker from '../assets/images/employeeTracker.png';

//import project component
import Project from "./Project";


export default function Portfolio (){

  // array of objects to insert any project into portfolio page cards
const portfolioData = [
  {
    title: "Garden Planner",
    img: gardenApp,
    description: "Minnesota Garden Planning App",
    url: "https://minnegrowta-66ed74e127f3.herokuapp.com/",
    github: "https://github.com/laurbaur024/minnegrowta"
  },
  {
    title: "Recipe Finder",
    img: recipeFinder,
    description: "Web API Application",
    url: "https://ascolardi.github.io/group-project1/",
    github: "https://github.com/Aidan-Windebank/recipe-finder"
  },
  {
    title: "Hometown Classifieds",
    img: hometownClassifieds,
    description: "Free and easy to use classifieds page",
    url: "https://project2-hometown-classifieds-ab97edeca766.herokuapp.com/",
    github: "https://github.com/Aidan-Windebank/group-project-2"
  },
  {
    title: "E-Commerce Back End",
    img: eBackEnd,
    description: "Back-End routing for e-commerce store",
    url: "https://drive.google.com/file/d/1nTLFRpEk5yVn0jZlL3WN3fIlDcFJ4DEX/view",
    github: "https://github.com/Aidan-Windebank/e-commerce-back-end"
  },
  {
    title: "Social Network API",
    img: socialAPI,
    description: "Back-End API for a social network app",
    url: "https://drive.google.com/file/d/1V6q0ZZEj76pE4A_Gg8k011PENBdCm3Z_/view",
    github: "https://github.com/Aidan-Windebank/social-network-api"
  },
  {
    title: "Employee Tracker",
    img: employeeTracker,
    description: "Content management system utilizing MySQL and Node JS",
    url: "https://drive.google.com/file/d/1NP1BDkCGm5SsnyyjduInSxksP2AAp2ZV/view",
    github: "https://github.com/Aidan-Windebank/employee-tracker"
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