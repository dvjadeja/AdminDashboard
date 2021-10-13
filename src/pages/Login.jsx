import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import loginBackground from "../assests/loginBackgroung.jpg";
import styled from "styled-components";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: black;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  margin-bottom: 0.5rem;

  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
    h3 {
      font-size: small;
    }
  }

  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }
  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

const Login = () => {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center flex-column p-0"
      style={{
        background: `url(${loginBackground})`,
        backgroundColor: "#707070",
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <MainContainer>
        <Row className="mt-5 me-3 ms-3 d-flex justify-content-center align-items-center">
          <h3 className="fw-bold p-0 m-0" style={{ fontSize: "23px" }}>
            SADGURU SOLUTIONS
          </h3>
          <Form className="mb-4">
            <Form.Group className="mt-3 mb-3">
              <Form.Control
                type="text"
                placeholder="Email"
                style={{
                  borderRadius: "2rem",
                  background: "rgba(255, 255, 255, 0.5)",
                  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                  padding: "1rem",
                  border: "none",
                  outline: "none",
                  color: "#3c354e",
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="Password"
                style={{
                  borderRadius: "2rem",
                  background: "rgba(255, 255, 255, 0.5)",
                  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                  padding: "1rem",
                  border: "none",
                  outline: "none",
                  color: "#3c354e",
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              />
            </Form.Group>
            <Button
              style={{
                background:
                  "linear-gradient(to right, #14163c 0%, #03217b 79%)",
                textTransform: "uppercase",
                letterSpacing: "0.2rem",
                width: "65%",
                maxHeight: "3rem",
                border: "none",
                color: "white",
                borderRadius: "2rem",
                cursor: "pointer",
              }}
            >
              Sign Up
            </Button>
          </Form>
          <h4 className="fs-5 fw-bold">OR LOGIN WITH</h4>
          <hr
            style={{
              width: "100%",
              height: "0.3rem",
              borderRadius: "0.8rem",
              border: "none",
              margin: "1.5rem 0 2rem 0",
              backgroundColor:
                "linear-gradient(to right, #14163c 0%, #03217b 79%)",
              backdropFilter: "blur(25px)",
            }}
          />
          <Col
            className="d-flex justify-content-center align-items-center"
            xs={4}
          >
            <div
              style={{
                height: "3.5rem",
                width: "3.5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "4rem",
                color: "white",
                cursor: "pointer",
                background:
                  "linear-gradient(to right, #0546A0 0%, #663FB6 100%)",
              }}
            >
              <FaFacebookF />
            </div>
          </Col>
          <Col
            className="d-flex justify-content-center align-items-center"
            xs={4}
          >
            <div
              style={{
                height: "3.5rem",
                width: "3.5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "4rem",
                color: "white",
                cursor: "pointer",
                background:
                  "linear-gradient(to right, #A12AC4 0%, #EB586C 40%, #F0A853 100%)",
              }}
            >
              <FaInstagram />
            </div>
          </Col>
          <Col
            className="d-flex justify-content-center align-items-center"
            xs={4}
          >
            <div
              style={{
                height: "3.5rem",
                width: "3.5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "4rem",
                color: "white",
                cursor: "pointer",
                background:
                  "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)",
              }}
            >
              <FaTwitter />
            </div>
          </Col>
        </Row>
      </MainContainer>
      <p class="text-muted mb-0 py-2" style={{ fontSize: "15px" }}>
        © 2021 Sadguru Solutions All rights reserved.
      </p>
    </Container>
  );
};

export default Login;
