import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import images from '../../constant/images';
// import emailjs from '@emailjs/browser';

import '../Contact/Contact.css';

export const Contact = () => {

    // const form = useState();


  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [buttonText] = useState('Send');

  const onFormUpdate = (e) => {
    const { name, value } = e.target;
    console.log(`Name: ${name}, Value: ${value}`);
    setFormData({
        ...formData,
        [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('http://localhost:3001/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            console.log('Message sent successfully');
        } else {
            console.error('Error ending message');
        }
    } catch (error) {
        console.error('Error:', error);
    }
  };


  return (
    <section className='contact' id='connect'>
        <Container>
            <Row className='align-items-center'>
                <Col md={6}>
                    <img src={images.contactImg} alt='Contact Img' />
                </Col>

                <Col md={6}>
                    <h2>Get In Touch</h2>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} className='px-1'>
                                <input 
                                type='text' 
                                id='firstName' 
                                name='firstName' 
                                value={formData.firstName} 
                                placeholder='First Name' 
                                onChange={onFormUpdate} required 
                                ></input>
                            </Col>

                            <Col sm={6} className='px-1'>
                                <input 
                                type='text' 
                                id='lastName' 
                                name='lastName' 
                                value={formData.lastName} 
                                placeholder='Last Name' 
                                onChange={onFormUpdate} required 
                                ></input>
                            </Col>

                            <Col sm={6} className='px-1'>
                                <input 
                                type='email' 
                                id='email' 
                                name='email' 
                                value={formData.email} 
                                placeholder='Email' 
                                onChange={onFormUpdate} required 
                                ></input>
                            </Col>

                            <Col sm={6} className='px-1'>
                                <input 
                                type='tel' 
                                id='phone' 
                                name='phone' 
                                value={formData.phone} 
                                placeholder='Phone Number' onChange={onFormUpdate} required 
                                ></input>
                            </Col>

                            <Col sm={6} className='px-1'>
                                <textarea 
                                row={6} 
                                id='message' 
                                name='message' 
                                value={formData.message} placeholder='Message' 
                                onChange={onFormUpdate} 
                                required 
                                ></textarea>
                                <button 
                                type='submit'><span>{buttonText}</span></button>
                                <div id='error-message' className='error-message'></div>
                            </Col>

                            {/* {
                                status.message && 
                                <Col>
                                    <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
                                </Col>
                            } */}
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
  )



}
