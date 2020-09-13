import React from "react";
import styled from "styled-components";

import illustrationWorking from "../../images/illustrationWorking.svg";

const HomeWrapper = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "Poppins", sans-serif;
`;

const TextBlock = styled.div`
  margin-top: 9rem;
  width: 30rem;
  margin-bottom: 4rem;

  @media (min-width: 800px) {
    margin-left: 0.5rem;
  }
`;

const Header = styled.div`
  font-size: 4rem;
  font-weight: 700;
  color: #323232;

  @media (min-width: 800px) {
    font-size: 3rem;
    margin-left: 0.5rem;
  }
`;

const Paragraph = styled.p`
  color: #8d93ab;
`;

const ImageBlock = styled.img`
  margin-top: 9rem;
  width: 30rem;

  @media (min-width: 800px) {
    margin-right: -4rem;
  }
`;

const StyledLink = styled.button`
  font-family: "Poppins", sans-serif;
  color: white;
  font-weight: 700;
  background-color: #5ad2cf;

  border-radius: 5rem;
  width: 9rem;
  height: 2rem;
  text-align: center;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  cursor: pointer;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <TextBlock>
        <Header>More than just shorter links</Header>
        <Paragraph>
          Build your brand's recognitnion and get detailed insights on how your
          links are performing.
        </Paragraph>
        <StyledLink>Get Started</StyledLink>
      </TextBlock>

      <div>
        <ImageBlock src={illustrationWorking} />
      </div>
    </HomeWrapper>
  );
};

export default Home;
