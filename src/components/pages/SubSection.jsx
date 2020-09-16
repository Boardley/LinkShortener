import React from "react";
import Footer from "./Footer";
import styled from "styled-components";
import formImage from "../../images/formImage.svg";

const Container = styled.div`
  font-family: "Poppins", sans-serif;
  color: white;
  text-align: center;
  margin-left: -1rem;
  padding-top: 35%;
  width: 105vw;
  height: 20vh;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  background-color: #4b3f6b;
`;

const Title = styled.h1`
  font-size: 1rem;
`;

const Button = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 3rem;
  background-color: #59d1d0;
  height: 2.5rem;
  width: 7rem;
  color: white;
  font-weight: bold;
  margin-top: 0.5rem;
`;

const SubSection = () => {
  return (
    <>
      <Container style={{ backgroundImage: `url(${formImage})` }}>
        <Title>Boost your links today</Title>
        <Button> Get Started </Button>
      </Container>
      <Footer />
    </>
  );
};

export default SubSection;
