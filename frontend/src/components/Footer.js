import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className='background_nav'>
      <Container>
        <Row>
          <Col className='text-lg-center py-5'>
            <span style={{ color: "#fff" }}>Copyright &copy; Butterfuly</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
