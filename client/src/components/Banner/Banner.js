import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';

import images from '../../constant/images';
import './Banner.css';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ 'UI/UX Developer', 'Front-End Developer', 'Back-End Developer'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 4700 ;

    useEffect (() => {
        let ticker = setInterval(() => {
          tick();
        },delta)
    
        return () => { clearInterval(ticker)};
      }, [text])

      const scrollToContact = () => {
        window.scrollTo({
            top: 2550,
            behavior: 'smooth',
        });
      };

      const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta /2)
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setDelta(500);
        }
      }

    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items=center'>
                    <Col xs={12} ms={6} xl={7}>
                        <span className='tagline'>Welcome to my Portfolio</span>
                        <h1>{`Hi I'm David Ozisiaka - A`} <br /> <span className='wrap'>{text}</span></h1>
                        <p>I'm a versatile developer with over 2 years of experience in both front-end and 
                          back-end web development. As a front-end enthusiast, I bring designs to life and ensuring 
                          seamless user experiences. On the back-end, I dive into the intricate world 
                          of server-side development, turning data into dynamic content.
                          Beyond coding, I have a creative side. My skills extend to the world of design, where I wield Photoshop 
                          to craft eye-catching visuals, and I harness the power of video editing to tell compelling stories through 
                          multimedia. If you're looking for a developer who can bridge the gap between design and functionality, I'd love 
                          to connect and explore how we can collaborate on your next project. Let's bring your ideas to life!</p>
                        <button onClick={scrollToContact}>Let's Connect <ArrowRightCircle size={25} /></button>
                    </Col>
    
                    <Col xs={12} md={6} xl={5}>
                        <img src={images.headerImg4} alt='header img' />
                    </Col>
                </Row>
            </Container>
        </section>
    )  
}