// packages and library imports
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
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

  return (
    <>
      <div >
        <header>
          <Container fluid>
            <Row>
              <Col>
                <h2>Aidan Windebank</h2>
                <h5>Junior Software Developer</h5>
              </Col>
              <Col>
                <Nav className="justify-content-end" activeKey="/home">
                  <Nav.Item>
                    <Nav.Link href="/">About Me</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/resume">Resume</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/contact-me">Contact Me</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
          </Container>  
        </header>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<AboutMe/>} />
            <Route path='/portfolio' element={<Portfolio/>} />
            <Route path='/resume' element={<Resume/>} />
            <Route path='/contact-me' element={<ContactMe/>} />
          </Routes>
        </BrowserRouter>
        <footer>
        <Container fluid="md" className='text-center'>
          <Row >
            <Col >
              <Button href="#" className="m-3">GitHub</Button> 
              <Button href="#" className="m-3">LinkedIn</Button> 
            </Col>
          </Row>
        </Container>
        </footer>
      </div>
    </>
  )
}

