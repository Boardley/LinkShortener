import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../images/logo.svg";

const HeaderWrapper = styled.header`
  font-family: "Poppins", sans-serif;
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  /* position: fixed; */
  top: 0;

  @media (min-width: 768px) {
    height: 10vh;
    margin: auto auto auto -0.5rem;
    position: absolute;
  }
`;

const MobileMenuIcon = styled.div`
  margin: auto 0 auto auto;
  width: 25px;
  min-width: 25px;
  padding: 5px;

  > div {
    height: 3px;
    margin: 5px 0;
    width: 100%;
    background-color: grey;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const Menu = styled.nav`
  display: ${(props) => (props.open ? "block" : "none")};
  background-color: hsl(257, 27%, 26%);
  color: white;
  font-weight: 550;
  border-radius: 0.3rem;
  position: absolute;
  width: 90%;
  top: 60px;
  left: 0;
  padding: 8px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    display: flex;
    background: none;
    color: black;
    left: initial;
    top: initial;
    margin: 1rem 0 auto auto;
    position: relative;
    width: initial;
    border-bottom: none;
    width: 100%;
  }

  @media (max-width: 700px) {
    font-size: 1.6rem;
    margin-left: 3%;
  }

  @media (max-width: 600px) {
    font-size: 1.4rem;
    margin-left: 3%;
  }

  @media (max-width: 500px) {
    font-size: 1.3rem;
    margin-left: 3%;
  }
`;

const Img = styled.img`
  width: 7rem;
  height: 2.5rem;
  margin: auto auto auto 1rem;

  @media (max-width: 800px) {
    width: 8rem;
  }

  @media (max-width: 700px) {
    width: 7.5rem;
    height: 2.3rem;
    margin: auto auto auto 2rem;
  }

  @media (max-width: 600px) {
    width: 7.5rem;
    height: 2.3rem;
    margin: auto auto auto 0.5rem;
  }

  @media (max-width: 500px) {
    width: 7.5rem;
    height: 2.3rem;
    margin: auto auto auto 0.5rem;
  }

  @media (max-width: 400px) {
    width: 7.5rem;
    height: 2.3rem;
    margin: auto auto auto -0.5rem;
  }

  @media (max-width: 300px) {
    width: 7rem;
    height: 2rem;
    margin: auto auto auto -0.5rem;
  }

  @media (max-width: 200px) {
    width: 6rem;
    height: 2rem;
    margin: auto auto auto -1rem;
  }
`;

const StyledLink = styled.a`
  color: hsl(0, 0%, 75%);
  padding: 4px 8px 1rem 0;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto;
`;

const SignUp = styled.a`
  background-color: hsl(180, 66%, 49%);
  color: white;
  border-radius: 3rem;
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto;
`;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderWrapper>
      <Img src={logo} alt="logo" />

      <MobileMenuIcon onClick={() => setMenuOpen((s) => !s)}>
        <div />
        <div />
        <div />
      </MobileMenuIcon>

      <Menu open={menuOpen}>
        <StyledLink>Features</StyledLink>
        <StyledLink>Pricing</StyledLink>
        <StyledLink>Resources</StyledLink>
        <StyledLink>Login</StyledLink>
        <SignUp>Sign Up</SignUp>
      </Menu>
    </HeaderWrapper>
  );
}
