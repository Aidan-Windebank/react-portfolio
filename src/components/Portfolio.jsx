


// bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import placeholder from '../assets/images/placeholder.png'

export default function Portfolio (){


  return (
    <>
      <h3>My Portfolio</h3>

      <Container fluid>
        <Row>
          <Card style={{ width: "25rem" }} className="m-3">
            <Card.Img src={placeholder}  alt="portfolio project" />
            <Card.ImgOverlay>
              <Card.Title>My Project</Card.Title>
              <Card.Text>Short Description</Card.Text>
              <Card.Link href="#">Deployed URL</Card.Link>
              <Card.Link href="#">GitHub Repo</Card.Link>
            </Card.ImgOverlay>
          </Card>
          <Card style={{ width: "25rem" }} className="m-3">
            <Card.Img src={placeholder}  alt="portfolio project" />
            <Card.ImgOverlay>
              <Card.Title>My Project</Card.Title>
              <Card.Text>Short Description</Card.Text>
              <Card.Link href="#">Deployed URL</Card.Link>
              <Card.Link href="#">GitHub Repo</Card.Link>
            </Card.ImgOverlay>
          </Card>
          <Card style={{ width: "25rem" }} className="m-3">
            <Card.Img src={placeholder}  alt="portfolio project" />
            <Card.ImgOverlay>
              <Card.Title>My Project</Card.Title>
              <Card.Text>Short Description</Card.Text>
              <Card.Link href="#">Deployed URL</Card.Link>
              <Card.Link href="#">GitHub Repo</Card.Link>
            </Card.ImgOverlay>
          </Card>
          <Card style={{ width: "25rem" }} className="m-3">
            <Card.Img src={placeholder}  alt="portfolio project" />
            <Card.ImgOverlay>
              <Card.Title>My Project</Card.Title>
              <Card.Text>Short Description</Card.Text>
              <Card.Link href="#">Deployed URL</Card.Link>
              <Card.Link href="#">GitHub Repo</Card.Link>
            </Card.ImgOverlay>
          </Card>
          <Card style={{ width: "25rem" }} className="m-3">
            <Card.Img src={placeholder}  alt="portfolio project" />
            <Card.ImgOverlay>
              <Card.Title>My Project</Card.Title>
              <Card.Text>Short Description</Card.Text>
              <Card.Link href="#">Deployed URL</Card.Link>
              <Card.Link href="#">GitHub Repo</Card.Link>
            </Card.ImgOverlay>
          </Card>
          <Card style={{ width: "25rem" }} className="m-3">
            <Card.Img src={placeholder}  alt="portfolio project" />
            <Card.ImgOverlay>
              <Card.Title>My Project</Card.Title>
              <Card.Text>Short Description</Card.Text>
              <Card.Link href="#">Deployed URL</Card.Link>
              <Card.Link href="#">GitHub Repo</Card.Link>
            </Card.ImgOverlay>
          </Card>
        </Row>
      </Container>


    </>
  )
}