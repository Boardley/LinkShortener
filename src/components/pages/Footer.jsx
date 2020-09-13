import React from "react";
import styled from "styled-components";

import logo from "../../images/logo.svg";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import pinterest from "../../images/pinterest.svg";
import twitter from "../../images/twitter.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  width: 100.6vw;
  height: 40vh;
  padding-top: 3rem;
  color: #ffffff;
  background-color: black;
`;

const LogoSub = styled.img`
  color: white;
`;

const ImgCont = styled.div`
  display: flex;
`;

const Img = styled.img`
  padding: 1.2rem;
`;

const Footer = () => {
  return (
    <Wrapper>
      <div>
        <LogoSub src={logo} alt="logo" />
      </div>

      <div>
        <p>
          {" "}
          <strong> Features </strong> <p>Link Shortening</p>
          <p>Branded Links</p>
          <p>Analytics</p>
        </p>
      </div>

      <div>
        <p>
          {" "}
          <strong> Resources </strong> <p>Blog</p>
          <p>Developers</p>
          <p>Support</p>
        </p>
      </div>

      <div>
        <p>
          {" "}
          <strong> Company </strong> <p>About</p>
          <p>Our Team</p>
          <p>Careers</p>
          <p>Contact</p>
        </p>
      </div>

      <ImgCont>
        <Img src={facebook} />

        <Img src={twitter} />

        <Img src={pinterest} />

        <Img src={instagram} />
      </ImgCont>
    </Wrapper>
  );
};

export default Footer;
