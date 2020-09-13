import React from "react";
import Footer from "./Footer";
import styled from "styled-components";
import formImage from "../../images/formImage.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #3b3153;
  width: 100.6vw;
  height: 40vh;
  margin-top: 5rem;
  color: white;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */

  /*  Media Queries  */
  @media (min-width: 500px) {
    width: 106.6vw;
  }

  @media (min-width: 200px) {
    width: 105vw;
    text-align: center;
  }
`;

const StyledLink = styled.button`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  background-color: #5ad2cf;
  color: white;
  border-radius: 5rem;
  width: 9rem;
  height: 2.5rem;
  text-align: center;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  cursor: pointer;
`;

const SubSection = () => {
  return (
    <>
      <Wrapper style={{ backgroundImage: `url(${formImage})` }}>
        <h1>Boost your links today</h1>
        <StyledLink> Get Started </StyledLink>
      </Wrapper>
      <Footer />
    </>
  );
};

export default SubSection;
