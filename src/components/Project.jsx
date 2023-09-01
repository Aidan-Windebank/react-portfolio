// bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';


export default function Project({project}) {
  return (
    <Card style={{ width: "25rem", border: "4px solid rgb(250, 239, 141)" }} className="m-3 p-0" id="card-image">
      <Card.Img src={project.img} alt="portfolio project" style={{ width: "100%", height: "100%"}}/>
      <Card.ImgOverlay className="image-overlay">
        <Card.Title id="card-title">{project.title}</Card.Title>
        <Card.Text id="card-text">{project.description}</Card.Text>
        <Nav.Link href={project.url} target="_blank" className="m-3" id="project-link-button"><i className="fa-solid fa-link"></i></Nav.Link>
        <Nav.Link href={project.github} target="_blank" className="m-3" id="project-git-button"><i className="fa-brands fa-github"></i></Nav.Link>
      </Card.ImgOverlay>
    </Card>
  );
}