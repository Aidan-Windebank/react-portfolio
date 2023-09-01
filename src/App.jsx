// packages and library imports
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';

// imported bootstrap components
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// imported page components
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';


export default function App() {
  const [currentPage, setCurrentPage] = useState("")

  // function to keep page on highlighted
  useEffect(() => {
    const currentUrl = window.location.href;
    const splitURL = currentUrl.split("/");
    setCurrentPage(splitURL[splitURL.length-1])
  
  })

  return (
    <>
      <div >
        <header id="header">
          <Container fluid>
            <Row>
              <Col>
                <h2>Aidan Windebank</h2>
                <h6>Junior Software Developer</h6>
              </Col>
              <Col>
                <Nav className="justify-content-end" activeKey="/home">
                  <Nav.Item className={currentPage == "" ? "selected": ""}>
                    <Nav.Link href="/">About Me</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className={currentPage == "portfolio" ? "selected": ""}>
                    <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className={currentPage == "resume" ? "selected": ""}>
                    <Nav.Link href="/resume">Resume</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className={currentPage == "contact-me" ? "selected": ""}>
                    <Nav.Link href="/contact-me">Contact Me</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
          </Container>  
        </header>
        <div id="body">
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<AboutMe/>} />
              <Route path='/portfolio' element={<Portfolio/>} />
              <Route path='/resume' element={<Resume/>} />
              <Route path='/contact-me' element={<ContactMe/>} />
            </Routes>
          </BrowserRouter>
        </div>
        <footer id="footer">
        <Container fluid="md" className='text-center'>
          <Row >
            <Col >
              <Button href="https://github.com/Aidan-Windebank"  target="_blank" className="m-3"><i id="git-button" className="fa-brands fa-github"></i></Button> 
              <Button href="https://www.linkedin.com/in/aidan-windebank-a71740288/"  target="_blank" className="m-3"><i id="linked-button" className="fa-brands fa-linkedin"></i></Button> 
            </Col>
          </Row>
        </Container>
        </footer>
      </div>
    </>
  )
}

