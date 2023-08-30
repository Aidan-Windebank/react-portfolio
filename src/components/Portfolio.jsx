


// bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';

export default function Portfolio (){


  return (
    <>
      <h3>My Portfolio</h3>
      <Card>
        <Card.Img src="./assets/images/placeholder.png"  alt="portfolio project" />
        <Card.ImgOverlay>
          <Card.Title>My Project</Card.Title>
          <Card.Text>Text if i want</Card.Text>
        
        </Card.ImgOverlay>
      </Card>


    </>
  )
}