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

    > div {
      height: 3px;
      margin: 5px 0;
      width: 100%;
      background-color: grey;
    }
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

  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-around;
    width: 100vw;
    font-size: 1.3rem;
  }

  @media (min-width: 768px) {
    display: flex;
    background: none;
    color: black;
    left: initial;
    top: initial;
    margin: auto;
    position: relative;
    border-bottom: none;
    width: 100%;
  }

  @media (max-width: 760px) {
    flex-direction: column;
    display: ${(props) => (props.open ? "block" : "none")};
  }

  @media (max-width: 700px) {
    flex-direction: column;
    display: ${(props) => (props.open ? "block" : "none")};
    font-size: 1.6rem;
    margin-top: 2rem;
    margin-left: 3%;
  }

  @media (max-width: 600px) {
    display: ${(props) => (props.open ? "block" : "none")};
    font-size: 1.4rem;
    margin-left: 3%;
  }

  @media (max-width: 540px) {
    display: ${(props) => (props.open ? "block" : "none")};

    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 3rem auto auto 4rem;
  }

  @media (max-width: 500px) {
    display: ${(props) => (props.open ? "block" : "none")};

    font-size: 1.3rem;
    margin-left: 3%;
  }

  @media (max-width: 280px) {
    width: 100%;
    margin: 3rem auto auto 2rem;
  }
`;

const Img = styled.img`
  width: 7rem;
  height: 2.5rem;
  margin: auto auto auto 1rem;

  @media (max-width: 800px) {
    width: 8rem;
    margin: 1.5rem auto auto auto;
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

  @media (max-width: 1024px) {
    margin-top: 1.1rem;
  }

  @media (max-width: 760px) {
    color: white;
  }
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
