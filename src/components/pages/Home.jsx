import React from "react";
import { Header } from "../common/Header";
import styled from "styled-components";

import illustrationWorking from "../../images/illustrationWorking.svg";

const Title = styled.h1`
  padding-top: 15rem;
`;

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <Title>More than just shorter links</Title>
        <pattern>
          Build your brand's recognitnion and get detailed insights on how your
          links are performing.
        </pattern>
        <div>Get Started</div>
      </div>
      <img src={illustrationWorking} />
    </div>
  );
};

export default Home;
