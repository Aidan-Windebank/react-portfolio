//bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import portfolio photo
import aidan3 from "../assets/images/aidan3.jpg"


export default function AboutMe (){

  return (
    <>
      <Container fluid>
        <Row className="m-5" >
          <Col lg={4}>
            <img id="aboutMe-image" src={aidan3} alt="portfolio image of aidan" style={{ width: "100%" }}/>
          </Col>
          <Col lg={8}>
            <h3>About Me</h3>
            <p>Greetings, I'm Aidan Windebank, a Minnesota native who embarked on a unique journey through life. Following my college years in sunny Arizona, I ventured into the outdoors, spending four exhilarating years as a ski patroller. My path meandered through roles as a Park Ranger and a US Forest Service salmon biologist, allowing me to immerse myself in the natural wonders of this world.
            Recently, I celebrated a joyous milestone by marrying my wonderful wife, whom I met at a summer camp where we now reside in Northern Minnesota. With our family about to grow, I've been inspired to embark on an exciting career change.</p>
            <p>I decided to attend a Full Stack Web Development coding bootcamp through the University of Minnesota's College of Continuing Education and Professional Studies. Tech had always intrigued me, and I had contemplated joining a bootcamp for some time. When I came across this program, it stood out as the perfect fit. Over the past 12 weeks, I've delved deep into the world of web development, tackling JavaScript and its associated libraries and packages, such as Mongoose, React, and Node.js. I've discovered that coding aligns perfectly with my love for problem-solving and puzzles. The logical nature of coding resonates with me, and I've been thrilled to see this reflected in my grades. I'm very excited about coding and the tech industry's constant challenges and opportunities for learning align perfectly with my personality. I relish the chance to explore new ideas and concepts and dive into the mechanics of how they work. My stubborn streak, which may not always be an advantage elsewhere, has proven invaluable when tackling coding challenges.</p>
            <p>When I'm not immersed in the world of coding, my wife and I share a deep love for the great outdoors, often joined by our three loyal canine companions. In the summer, you'll find us on the water, making the most of our free time, and in the winter, we're avid cross-country skiers. These shared outdoor adventures not only strengthen our bond but also serve as a vital balance to my tech-focused pursuits, grounding me in the beauty of nature and the serenity it offers.</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}