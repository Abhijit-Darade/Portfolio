import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa'

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
  return (
    <Container fluid className='footer'>
        <Row>
            <Col md='4' className='footer-copyright'>
                <h3>Designed and Developed by Abhjit </h3>
            </Col>
            <Col md='4' className='footer-copyright'>
                <h3>Copyright @ {year} AD</h3>
            </Col>
            <Col md='4' className='footer-body'>
                <ul className='footer-icons'>
                    <li className='social-icons'>
                          <a href="https://github.com/abhijit20-vd" style={{ color : 'white'}} target='_blank' rel='noopener noreferrer'>
                            <AiFillGithub/>
                            </a>
                    </li>
                    <li className='social-icons'>
                          <a href="https://www.linkedin.com/in/abhijit-darade-32a293208/" style={{ color : 'white'}} target='_blank' rel='noopener noreferrer'>
                            <FaLinkedin/>
                            </a>
                    </li>
                    <li className='social-icons'>
                          <a href="https://www.instagram.com/its_abhijit_2002/" style={{ color : 'white'}} target='_blank' rel='noopener noreferrer'>
                            <AiFillInstagram/>
                            </a>
                    </li>
                </ul>
            </Col>
        </Row>
    </Container>
  )
}

export default Footer