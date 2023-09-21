import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import images from '../../constant/images';

import '../Contact/Contact.css';

export const Contact = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [buttonText, setButtonText] = useState('Send');

  const onFormUpdate = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending...');


    try {
        const response = await fetch('/api/sendEmail', {
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
    setButtonText('Send');
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
                                name='firstName' 
                                value={formData.firstName} 
                                placeholder='First Name' 
                                onChange={onFormUpdate} 
                                required 
                                />
                            </Col>

                            <Col sm={6} className='px-1'>
                                <input 
                                type='text' 
                                name='lastName' 
                                value={formData.lastName} 
                                placeholder='Last Name' 
                                onChange={onFormUpdate} 
                                required 
                                />
                            </Col>

                            <Col sm={6} className='px-1'>
                                <input 
                                type='email' 
                                name='email' 
                                value={formData.email} 
                                placeholder='Email' 
                                onChange={onFormUpdate} 
                                required 
                                />
                            </Col>

                            <Col sm={6} className='px-1'>
                                <input 
                                type='tel' 
                                name='phone' 
                                value={formData.phone} 
                                placeholder='Phone Number' 
                                onChange={onFormUpdate} 
                                required 
                                />
                            </Col>

                            <Col sm={6} className='px-1'>
                                <textarea 
                                row={6} 
                                name='message' 
                                value={formData.message} 
                                placeholder='Message' 
                                onChange={onFormUpdate} 
                                required 
                                />
                                <button 
                                type='submit'
                                >
                                    <span>{buttonText}</span>
                                </button>

                                <div id='error-message' className='error-message'></div>
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
