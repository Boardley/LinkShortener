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

const P = styled.p`
  font-weight: 200;
`;

const Footer = () => {
  return (
    <Wrapper>
      <div>
        <LogoSub src={logo} alt="logo" />
      </div>

      <div>
        <P>
          {" "}
          <strong> Features</strong>
        </P>
        <P>Link Shortening</P>
        <P>Branded Links</P>
        <P></P>
      </div>

      <div>
        <P>
          <strong>Resources</strong>
        </P>
        <P>Blog</P>
        <P>Developers</P>
        <P>Support</P>
      </div>

      <div>
        <P>
          <strong>Company</strong>
        </P>
        <P>About</P>
        <P>Our Team</P>
        <P>Careers</P>
        <P>Contact</P>
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
