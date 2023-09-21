import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import images from '../../constant/images';

import '../Skills/Skills.css';


export const Skills = () => {

    const responsive = {

        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0},
            items: 1
        },
        
    }




  return (
    <section className='skill' id='skills'>
        <Container>
            <Row>
                <Col>
                    <div className='skill-box'>
                        <h2>Skills</h2>
                    </div>
                    <p>Here's a glimpse of my skills. I'm a versatile developer in both front-end and back-end technologies. 
                    Let my expertise bring your projects to life. </p>
                    <Carousel responsive={responsive} infinite={false} className='skill-slider'>
                        <div className='item'>
                            <img src={images.meter1} alt='meter' />
                            <h4>HTML 5</h4>
                        </div>

                        <div className='item'>
                            <img src={images.meter3} alt='meter' />
                            <h4>CSS 3</h4>
                        </div>

                        <div className='item'>
                            <img src={images.meter2} alt='meter' />
                            <h4>Bootstrap</h4>
                        </div>

                        <div className='item'>
                            <img src={images.meter4} alt='meter' />
                            <h4>JavaScript</h4>
                        </div>

                        <div className='item'>
                            <img src={images.meter4} alt='meter' />
                            <h4>PHP</h4>
                        </div>

                        <div className='item'>
                            <img src={images.meter3} alt='meter' />
                            <h4>Photo Editing</h4>
                        </div>

                        <div className='item'>
                            <img src={images.meter2} alt='meter' />
                            <h4>Video Editing</h4>
                        </div>
                    </Carousel>
                </Col>          
            </Row>
        </Container>
    </section>
  )
}
