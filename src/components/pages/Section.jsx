import React from "react";
import styled from "styled-components";
import SubSection from "./SubSection";

import detailedRecords from "../../images/detailedRecords.svg";
import brandRecognition from "../../images/brandRecognition.svg";
import fullyCustomizable from "../../images/fullyCustomizable.svg";

const Container = styled.div`
  font-family: "Poppins", sans-serif;
`;

const Header = styled.div`
  text-align: center;
  margin: 3rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5rem;

  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

/* const Line = styled.div`
  font-size: 5rem;
  color: #5ad2cf;
  align-self: center;
`; */

const Cont1 = styled.div`
  background-color: white;
  width: 20rem;
  height: 12rem;
  padding: 1rem;
`;

const Cont2 = styled.div`
  background-color: white;
  width: 20rem;
  height: 12rem;
  padding: 1rem;
  margin: 2.5rem;
  margin-top: 4rem;

  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;
    margin: 6rem;
  }
`;

const Cont3 = styled.div`
  background-color: white;
  width: 20rem;
  height: 12rem;
  padding: 1rem;
  margin-top: 8rem;

  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;
    margin: 2rem;
  }
`;

const ImgCont = styled.div`
  background-color: #3b3153;
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
  display: flex;
  justify-content: center;
  margin-top: -3rem;
`;

const Img = styled.img`
  align-self: center;
  height: 1.7rem;
  width: 1.7rem;
`;

const Text = styled.p`
  color: #8d93ab;
`;

const Section = () => {
  return (
    <>
      <Container>
        <Header>
          <h1>Advanced Statistics</h1>
          <p>
            Track how your links are performing across the web with
            <br /> our advanced statistics dashboard.
          </p>
        </Header>

        <Wrapper>
          <Cont1>
            <ImgCont>
              <Img src={brandRecognition} />
            </ImgCont>
            <p>
              <strong> Brand Recognition</strong>
            </p>
            <Text>
              Boost your brand recognition with each click. Generick links don't
              mean a thing. Branded links help instill confidence in your
              content.
            </Text>
          </Cont1>

          <Cont2>
            <ImgCont>
              <Img src={detailedRecords} />
            </ImgCont>
            <p>
              <strong> Detailed Records</strong>
            </p>
            <Text>
              Gain Insights into who is clicking your links. Knowing when and
              where people engage with uour content helps inform better
              decisions.
            </Text>
          </Cont2>

          <Cont3>
            <ImgCont>
              <Img src={fullyCustomizable} />
            </ImgCont>
            <p>
              <strong> Fully customizable</strong>
            </p>
            <Text>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </Text>
          </Cont3>
        </Wrapper>
      </Container>
      <SubSection />
    </>
  );
};

export default Section;
