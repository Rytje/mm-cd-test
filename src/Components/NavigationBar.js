import React from 'react';
import { Navbar, Button, Row, Col, Form } from 'react-bootstrap';
import logo from '../Assets/Images/logo-crop.png';

export default function NavigationBar() {
  return (
    <Row className='navigation-bar mb-5'>
      <Row className='navigation-top text-center pt-2 pb-2'>
        <Col xs={1} className='d-none d-sm-block order-1'></Col>
        <Col xs={6} sm={true} className='order-1 text-start'>
          <a href='#'>Uk/gbp ({'\u00A3'})</a>
          <a href='#'>Stores</a>
          <a href='#'>Customer Service</a>
        </Col>
        <Col className='order-3'>
          <span>Enjoy free delivery on all orders over {'\u00A3'}50</span>
        </Col>
        <Col xs={6} sm={true} className='order-1 order-sm-4 text-end'>
          <a href='#'>Newsletter signup</a>
          <a href='#'>sign in / register</a>
          <a href='#'><i className='bi-bag-fill'></i></a>
        </Col>
        <Col xs={1} className='d-none d-sm-block order-5'></Col>
      </Row>

      <Row className='categories'>
        <Col xs={1} className='d-none d-sm-block order-1'></Col>
        <Col xs={6} sm={true} className='order-1 text-start px-0 align-self-center'>
          <img src={logo} alt="Tommy Hilfiger logo" className='img-fluid' />
        </Col>
        <Col className='order-3 d-flex align-items-center'>
          <Button variant="white" href="#" className='py-5'>WOMEN</Button>
          <Button variant="white" href="#" className='py-5'>MEN</Button>
          <Button variant="white" href="#" className='py-5'>KIDS</Button>
          <Button variant="white" href="#" className='py-5'>LABELS</Button>
          <Button variant="white" href="#" className='py-5'>SALE</Button>
        </Col>
        <Col xs={6} sm={true} className='order-1 order-sm-4 align-self-center'>
          <Form>
            <Form.Group>
              <Row className='d-flex justify-content-end'>
                <Col xs={6} className='px-0'>
                  <Form.Label className='visually-hidden'>Search</Form.Label>
                  <Form.Control type='text' placeholder='Search' className='d-inline-block px-0'></Form.Control>
                </Col>
                <Col xs={3} className='px-0'>
                  <button className='btn'><i class="bi bi-search"></i></button>
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Col>
        <Col xs={1} className='d-none d-sm-block order-5'></Col>
      </Row>
    </Row>
  )
}
