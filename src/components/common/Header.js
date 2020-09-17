import React, { useState } from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  font-family: "Poppins", sans-serif;
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
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
    left: initial;
    top: initial;
    margin: auto 0 auto auto;
    position: relative;
    width: initial;
    border-bottom: none;

    border: pink dotted 0.2rem;
    color: black;
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

const StyledLink = styled.a`
  padding: 4px 8px 1rem 0;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
`;

const SignUp = styled.a`
  background-color: hsl(180, 66%, 49%);
  border-radius: 0.3rem;
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
`;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderWrapper>
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
