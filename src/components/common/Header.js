import React, { useState, useContext } from "react";
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
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const Menu1 = styled.div`
  text-align: center;
`;

const StyledLink1 = styled.div`
  text-align: center;
`;

const Menu = styled.nav`
  display: ${(props) => (props.open ? "block" : "none")};

  position: absolute;
  width: 100%;
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
  }
`;

const StyledLink = styled.a`
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

      <Menu1 open={menuOpen}>
        <StyledLink1>Features</StyledLink1>

        <StyledLink>Pricing</StyledLink>

        <StyledLink>Resources</StyledLink>
      </Menu1>

      <Menu open={menuOpen}>
        <StyledLink>Login</StyledLink>

        <StyledLink>Sign Up</StyledLink>
      </Menu>
    </HeaderWrapper>
  );
}
