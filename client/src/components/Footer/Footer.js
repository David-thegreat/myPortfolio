import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import images from '../../constant/images';
import '../Footer/Footer.css';

export const Footer = () => {
  return (
    <footer className='footer'>
        <Container>
            <Row className='align-item-center'>
                <Col className='footer-logo'>
                    <img src={images.logo} alt='logo' />
                </Col>
                <Col>
                    <div className='social-icon'>
                        <a href='https://www.linkedin.com/in/david-ozisiaka-705901236'><img src={images.icon1} alt='Linkedin' /></a>
                        <a href='https://www.facebook.com/yung.kizdave?mibextid=LQQJ4d'><img src={images.icon2} alt='Facebook' /></a>
                        <a href='https://instagram.com/__davidxxr?igshid=NTc4MTIwNjQ2YQ=='><img src={images.icon3}alt='Instagram' /></a>
                    </div>
                    <p>CopyRight 2023. All Right Reserved</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}
