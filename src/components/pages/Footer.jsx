import React from "react";
import styled from "styled-components";

import whiteLogo from "../../images/whiteLogo.svg";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import pinterest from "../../images/pinterest.svg";
import twitter from "../../images/twitter.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  color: white;
  text-align: center;
  background-color: black;
  margin-left: -1rem;
  width: 105vw;
  height: 120vh;
  padding-bottom: 1rem;

  @media (max-width: 2000px) {
    font-size: 1.3rem;
    width: 105%;
    height: 80vh;
  }

  @media (max-width: 1500px) {
    font-size: 1.3rem;
    width: 105%;
    height: 80vh;
  }

  @media (max-width: 1000px) {
    font-size: 1.2rem;
  }

  @media (max-width: 800px) {
    font-size: 1.2rem;
    height: 70vh;
  }

  @media (max-width: 700px) {
    font-size: 1.2rem;
  }

  @media (max-width: 600px) {
    width: 102vw;
  }

  @media (max-width: 500px) {
    font-size: 1.1rem;
    height: 110vh;
  }

  @media (max-width: 300px) {
    height: 110vh;
    width: 103vw;
  }

  @media (max-width: 200px) {
    text-align: center;
    margin-left: -1rem;
    width: 105vw;
    height: 120vh;
    padding-bottom: 1rem;
  }
`;

const TextWrapper = styled.div`
  @media (max-width: 2000px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    text-align: left;
    padding-top: 3rem;
  }

  @media (max-width: 1500px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    text-align: left;
    padding-top: 3rem;
  }

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    text-align: left;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    text-align: left;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    margin: auto;
    text-align: center;
  }

  @media (max-width: 200px) {
    margin-top: auto;
    margin-top: -3rem;
  }
`;

const Img = styled.img`
  margin: 3rem auto auto auto;

  @media (max-width: 2000px) {
    width: 10rem;
    margin-top: 3rem;
    margin-left: 50%;
    margin-bottom: 3rem;
  }

  @media (max-width: 1500px) {
    width: 10rem;
    margin-top: 3rem;
    margin-left: 40%;
    margin-bottom: 3rem;
  }

  @media (max-width: 1000px) {
    width: 10rem;
    margin-top: 3rem;
    margin-left: 40%;
    margin-bottom: 3rem;
  }

  @media (max-width: 800px) {
    width: 10rem;
    margin-top: 3rem;
    margin-left: 40%;
    margin-bottom: 3rem;
  }

  @media (max-width: 700px) {
    width: 9rem;
  }

  @media (max-width: 500px) {
    margin: auto;
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 5rem;

  @media (max-width: 2000px) {
    margin-bottom: 2rem;
  }

  @media (max-width: 1500px) {
    margin-bottom: 2rem;
  }

  @media (max-width: 1000px) {
    margin-bottom: 2rem;
    margin-top: 6rem;
  }

  @media (max-width: 800px) {
    margin-bottom: 3rem;
  }

  @media (max-width: 700px) {
    margin-top: 7rem;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Img src={whiteLogo} alt="logo" />

      <TextWrapper>
        <div>
          <p>
            {" "}
            <strong> Features</strong>
          </p>
          <p>Link Shortening</p>
          <p>Branded Links</p>
        </div>

        <div>
          <p>
            <strong>Resources</strong>
          </p>
          <p>Blog</p>
          <p>Developers</p>
          <p>Support</p>
        </div>

        <div>
          <p>
            <strong>Company</strong>
          </p>
          <p>About</p>
          <p>Our Team</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>
      </TextWrapper>

      <Icons>
        <img src={facebook} alt="facebook-icon" />

        <img src={twitter} alt="twitter-icon" />

        <img src={pinterest} alt="pinterest-icon" />

        <img src={instagram} alt="insta-icon" />
      </Icons>
    </Container>
  );
};

export default Footer;
