




// bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



function Project({project}) {
  return (
    <Card style={{ width: "25rem" }} className="m-3">
      <Card.Img src={project.img} alt="portfolio project" />
      <Card.ImgOverlay>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>{project.description}</Card.Text>
        <Button href={project.url} className="m-3" id="project-link-button"><i className="fa-solid fa-link"></i></Button>
        <Button href={project.github} className="m-3" id="project-git-button"><i className="fa-brands fa-github"></i></Button>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Project;