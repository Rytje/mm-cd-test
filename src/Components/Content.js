import React from 'react';
import { Row, Col } from 'react-bootstrap';
import image from '../Assets/Images/tommy-denim__header-men.jpg';
import video from '../Assets/test-video.mp4';

export default function Content() {
    return (
        <Row className='content'>
            <Col sm={1} className='d-none d-sm-block order-1'></Col>
            <Col xs={12} sm={2} className='order-2 d-flex flex-column justify-content-between'>
                <Row className=''>
                    <Col>
                        <span className='d-block'>24/7 LIVE.</span>
                    </Col>
                </Row>

                <Row className=''>
                    <Col>
                        <h2 className=''>SPRING</h2>
                        <h2 className=''>2017</h2>
                        <h3>WITH ANWAR HADID &amp; SOPHIA RICHIE</h3>
                        <p>Engineered for perfect form and exceptional fit - whatever you do in them.</p>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} sm={8} className='order-3 promotion-image position-relative'>
                <img src={image} alt='Promotional image' className='img-fluid' ></img>
            {/* <Col className='love-text'> */}
                <h1 className='love-text position-absolute top-50 start-50 translate-middle'>
                    <span className='d-block'>LOVE.</span>
                    <span className='d-block'>L.A.</span>
                </h1>
            {/* </Col> */}
            </Col>
            <Col sm={1} className='d-none d-sm-block order-5'></Col>

            <Col xs={12} className='order-5'>
                <Row className='video-row'>
                    <Col xs={2} className='d-none d-sm-block'></Col>
                    <Col>
                        <video src={video} muted controls width={"100%"}></video>
                    </Col>
                    <Col xs={4} className='d-none d-sm-block'></Col>
                </Row>
            </Col>
        </Row>
    )
}
