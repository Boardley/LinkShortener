import React from "react";
import styled from "styled-components";

import whiteLogo from "../../images/whiteLogo.svg";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import pinterest from "../../images/pinterest.svg";
import twitter from "../../images/twitter.svg";

const Container = styled.div`
  font-family: "Poppins", sans-serif;
  color: white;
  text-align: center;
  background-color: black;
  margin-left: -1rem;
  width: 105vw;
  height: 120vh;
`;

const Img = styled.img`
  margin-top: 3rem;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 3rem;
`;

const Footer = () => {
  return (
    <Container>
      <Img src={whiteLogo} alt="logo" />

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

      <Icons>
        <img src={facebook} />

        <img src={twitter} />

        <img src={pinterest} />

        <img src={instagram} />
      </Icons>
    </Container>
  );
};

export default Footer;
