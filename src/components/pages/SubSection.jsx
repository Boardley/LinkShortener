import React from "react";
import Footer from "./Footer";
import styled from "styled-components";
import boostMobile from "../../images/boostMobile.svg";

const Container = styled.div`
  font-family: "Poppins", sans-serif;
  color: white;
  text-align: center;
  margin-left: -1rem;
  padding-top: 35%;
  width: 100vw;
  height: 20vh;
  background-color: hsl(257, 27%, 26%);
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */

  @media (max-width: 2000px) {
    height: 2rem;
  }

  @media (max-width: 1500px) {
    width: 101.5vw;
  }

  @media (max-width: 1000px) {
    width: 101.5vw;
  }

  @media (max-width: 900px) {
    width: 101.5vw;
  }

  @media (max-width: 800px) {
    width: 101.5vw;
  }

  @media (max-width: 700px) {
    width: 101.5vw;
  }

  @media (max-width: 600px) {
    width: 101.5vw;
  }

  @media (max-width: 500px) {
    height: 14rem;
    width: 101.5vw;
  }
`;

const Title = styled.h1`
    font-size: 1rem;
    margin: auto;

    @media (max-width: 2000px) {
    font-size: 3.5rem;
    margin-top: -25rem;
    margin-bottom: 1.7rem;
  }

    @media (max-width: 1500px) {
    font-size: 3.5rem;
    margin-top: -20rem;
    margin-bottom: 1.7rem;
  }

    @media (max-width: 1000px) {
    font-size: 2.5rem;
    margin-top: -11rem;
    margin-bottom: 1.7rem;
  }

    @media (max-width: 800px) {
    font-size: 2.5rem;
    margin-top: -12rem;
    margin-bottom: 1.7rem;
  }

    @media (max-width: 700px) {
      font-size: 2.2rem;
      margin-top: -11rem;
      margin-bottom: 1.7rem;
  }

    @media (max-width: 600px) {
    font-size: 2rem;
    margin-top: -10rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 500px) {
    font-size: 1.6rem;   
    margin-top: -48.567px;
  }

  @media (max-width: 300px) {
    font-size: 1.6rem;   
    margin-top: 16.433px;
  }

  @media (max-width: 200px) {
    font-size: 1.3rem;
    margin: auto;
  }
}
  
`;

const Button = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 3rem;
  background-color: hsl(180, 66%, 49%);
  color: white;
  font-weight: bold;

  font-size: 1rem;
  height: 2.5rem;
  width: 7rem;
  margin-top: 0.5rem;

  @media (max-width: 2000px) {
    font-size: 1.7rem;
    height: 3.7rem;
    width: 12rem;
  }

  @media (max-width: 1500px) {
    font-size: 1.7rem;
    height: 3.7rem;
    width: 12rem;
  }

  @media (max-width: 1000px) {
    font-size: 1.7rem;
    height: 3.7rem;
    width: 12rem;
  }

  @media (max-width: 800px) {
    font-size: 1.7rem;
    height: 3.7rem;
    width: 12rem;
  }

  @media (max-width: 700px) {
    font-size: 1.6rem;
    height: 3.7rem;
    width: 12rem;
  }

  @media (max-width: 600px) {
    font-size: 1.4rem;
    height: 3.5rem;
    width: 10rem;
  }

  @media (max-width: 500px) {
    font-size: 1.2rem;
    height: 3.5rem;
    width: 10rem;
  }

  @media (max-width: 200px) {
    font-size: 1rem;
    height: 2.5rem;
    width: 7rem;
    margin-top: 1.5rem;
  }
`;

const SubSection = () => {
  return (
    <>
      <Container style={{ backgroundImage: `url(${boostMobile})` }}>
        <Title>Boost your links today</Title>
        <Button> Get Started </Button>
      </Container>
      <Footer />
    </>
  );
};

export default SubSection;
