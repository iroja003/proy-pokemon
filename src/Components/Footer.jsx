import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className='text-center py-3 w-auto bg-dark'>
      <Container>
          <Row bg="primary" variant="dark">
              <Col className='text-center py-3 w-auto'>
                  CopyRight &copy; IbarReact SPA.
              </Col>
          </Row>
      </Container>
    </footer>
  )
}

export default Footer