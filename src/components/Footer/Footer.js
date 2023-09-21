import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import images from '../../constant/images';
import '../Footer/Footer.css';

export const Footer = () => {
  return (
    <footer className='footer'>
        <Container>
            <Row className='align-item-center'>
                <Col>
                    <div className='social-icon'>
                        <a href='https://twitter.com/David_dgreat'><img src={images.x} alt='Twitter' /></a>
                        <a href='https://www.linkedin.com/in/david-ozisiaka-705901236'><img src={images.linkedin}alt='Linkedin' /></a>
                    </div>
                    <p>CopyRight 2023. All Right Reserved</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}
