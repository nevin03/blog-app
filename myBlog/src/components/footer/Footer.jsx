import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Form } from "informed";
import CustomInput from "../../custom-Fields/CustomInput";
// import { emailValidation } from "../../validation/validation";

// import Subscribe from "../subscribe/Subscribe";

// import useSubscribe from "../../hooks/useSubscribe";

const Footer = () => {
  // const { showModal, modalMessage, handleSubmit, handleCloseModal } =
  //   useSubscribe();

  return (
    <footer className="bg-dark text-white pt-4 mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <h5>The Cryptic Bats</h5>
            <p className=" text-white">
              Cryptic Bats is a blog focusing on sharing the latest tech updates
              and happenings in the Web3 world. Whether you're a developer,
              investor, or just Web3 curious, we've got something insightful for
              you.
            </p>
          </Col>

          <Col md={6}>
            {/* <h6 className="mb-2">Subscribe to our Newsletter</h6> */}
            {/* <Form onSubmit={handleSubmit}>
              <CustomInput
                field="newsletter"
                placeholder="Enter your email for updates"
                validate={emailValidation}
              />
              <Button type="submit" variant="primary">
                Subscribe
              </Button>
            </Form> */}
          </Col>
        </Row>

        <hr className="my-4 border-secondary" />

        <Row>
          <Col md={6}>
            <div className="text-muted">
              © {new Date().getFullYear()} The Cryptic Bats. All rights
              reserved.
            </div>
          </Col>

          <Col md={6} className="text-md-end mt-3 mt-md-0">
            <ul className="list-unstyled d-flex gap-3 justify-content-md-end mb-0">
              <li>
                <a href="#home" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#blogs" className="text-white text-decoration-none">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#about" className="text-white text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* Modal Component */}
      {/* <Subscribe
        showModal={showModal}
        handleClose={handleCloseModal}
        message={modalMessage}
      /> */}
    </footer>
  );
};

export default Footer;
