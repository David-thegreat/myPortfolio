import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import images from '../../constant/images';

import './Projects.css';

export const Projects = () => {

    const projects = [
        {
            title: 'Tenny Steps',
            description: 'Shoe shopping site',
            imgUrl: images.tennySteps,
        },

        {
            title: 'DAJ-T Aviation LTD',
            description: 'Aviation Website',
            imgUrl: images.dajT,
        },

        {
            title: 'Triple Munch',
            description: 'Restaurant website',
            imgUrl: images.triplemunch,
        },
    ];

  return (
    <section className='project' id='project'>
        <Container>
            <Row>
                <Col>
                    <h2>Projects</h2>
                    <p>Explore my portfolio of projects below. Each one represents a unique journey of creativity and problem-solving. 
                        Dive in and see how i bring ideas to life. </p>
                    <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                   
                    <Nav variant='pills' className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                        <Nav.Item>
                            <Nav.Link eventKey='first' className='project-tabText' >Tab One</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link eventKey='second'>Tab Two</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link eventKey='third'>Tab Three</Nav.Link>
                        </Nav.Item>
                    </Nav> 

                    <Tab.Content>
                        <Tab.Pane eventKey='first'>
                            <Row>
                                {
                                    projects.map((project, index) => {
                                        return (
                                            <ProjectCard
                                            key={index}
                                            {...project}
                                            />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>

                            <Tab.Pane className='tabText' eventKey='second'>This tab is currently empty...</Tab.Pane>
                            <Tab.Pane className='tabText' eventKey='third'>This tab is currently empty...</Tab.Pane>
                    </Tab.Content>

                    </Tab.Container>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
