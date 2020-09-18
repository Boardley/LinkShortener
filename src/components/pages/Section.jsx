import React from "react";
import styled from "styled-components";
import SubSection from "./SubSection";

import detailedRecords from "../../images/detailedRecords.svg";
import brandRecognition from "../../images/brandRecognition.svg";
import fullyCustomizable from "../../images/fullyCustomizable.svg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  background-color: #eff1f7;
  text-align: center;
  margin-top: -2rem;
  padding-bottom: 3rem;
  padding-top: 3rem;
  width: 100vw;
  margin-left: -0.5rem;

  @media (max-width: 2000px) {
    padding-bottom: 6rem;
  }

  @media (max-width: 1024px) {
    width: 106vw;
  }

  @media (max-width: 768px) {
    display: flex;
    width: 108vw;
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: row;
    width: 101vw;
  }

  @media (max-width: 540px) {
    width: 103vw;
  }

  @media (max-width: 414px) {
    width: 117.5vw;
  }

  @media (max-width: 411px) {
    width: 118.3vw;
  }

  @media (max-width: 360px) {
    width: 113vw;
  }

  @media (max-width: 320px) {
    width: 126.5vw;
  }
`;

const Header = styled.h1`
  font-size: 1.4rem;

  @media (max-width: 2000px) {
    font-size: 3.3rem;
  }

  @media (max-width: 1500px) {
    font-size: 3.3rem;
  }

  @media (max-width: 1024px) {
    font-size: 4rem;
  }

  @media (max-width: 1000px) {
    font-size: 3.3rem;
  }

  @media (max-width: 800px) {
    font-size: 3.3rem;
  }

  @media (max-width: 700px) {
    font-size: 3rem;
  }

  @media (max-width: 600px) {
    font-size: 2.7rem;
  }

  @media (max-width: 500px) {
    font-size: 2.4rem;
  }

  @media (max-width: 200px) {
    font-size: 2rem;
  }
`;

const P = styled.p`
  font-size: 0.9rem;

  @media (max-width: 2000px) {
    font-size: 1.5rem;
  }

  @media (max-width: 1500px) {
    font-size: 1.5rem;
  }

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 1000px) {
    font-size: 1.5rem;
  }

  @media (max-width: 800px) {
    font-size: 1.5rem;
  }

  @media (max-width: 700px) {
    font-size: 1.7rem;
    width: 80%;
    margin: auto;
  }

  @media (max-width: 600px) {
    font-size: 1.6rem;
    width: 80%;
    margin: auto;
  }

  @media (max-width: 500px) {
    font-size: 1.5rem;
    width: 80%;
    margin: auto;
  }

  @media (max-width: 200px) {
    font-size: 1.2rem;
  }
`;

const Wrapper = styled.div`
  margin-top: 6rem;

  @media (max-width: 2000px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  @media (max-width: 1500px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: row;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 200px) {
    margin-bottom: -5rem;
  }
`;

const SubContainer = styled.div`
  background-color: white;
  max-width: 80%;
  margin: 5rem auto;
  padding: 0.5rem;

  @media (max-width: 2000px) {
    max-width: 20%;
    font-size: 1.1rem;
    margin: 0.5rem;
    padding: 0.5rem;
  }

  @media (max-width: 1500px) {
    max-width: 20%;
    font-size: 1.1rem;
    margin: 0.5rem;
    padding: 0.5rem;
  }

  @media (max-width: 1024px) {
    font-size: 2rem;
    margin: 5rem auto 5rem auto;
    min-width: 60%;
    min-height: 100%;
  }

  @media (max-width: 1000px) {
    max-width: 40%;
    font-size: 1.1rem;
    margin: 0.5rem;
    padding: 0.5rem;
  }

  @media (max-width: 800px) {
    max-width: 40%;
    font-size: 1.1rem;
    margin: 0.5rem;
    padding: 0.5rem;
  }

  @media (max-width: 768px) {
    margin: 5rem auto 5rem auto;
  }

  @media (max-width: 700px) {
    font-size: 1.4rem;
    margin: auto auto 5rem auto;
    max-width: 60%;
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
    max-width: 70%;
  }

  @media (max-width: 500px) {
    font-size: 1.1rem;
    max-width: 70%;
  }

  @media (max-width: 300px) {
    max-width: 80%;
  }
`;

const Img = styled.img`
  background-color: hsl(260, 8%, 14%);
  border-radius: 50%;
  padding: 0.5rem;
  margin-top: -2rem;

  @media (max-width: 2000px) {
    width: 3.8rem;
  }

  @media (max-width: 1000px) {
    width: 3.8rem;
  }

  @media (max-width: 800px) {
    width: 3.8rem;
  }

  @media (max-width: 700px) {
    width: 3.6rem;
  }

  @media (max-width: 600px) {
    width: 3.4rem;
  }
`;

const Section = () => {
  return (
    <>
      <Container>
        <div>
          <div>
            <Header>Advanced Statistics</Header>
            <P>
              Track how your links are performing across the web with
              <br /> our advanced statistics dashboard.
            </P>
          </div>

          <Wrapper>
            <SubContainer>
              <div>
                <div>
                  <Img src={brandRecognition} />
                </div>
                <p>
                  <strong> Brand Recognition</strong>
                </p>
                <p>
                  Boost your brand recognition with each click. Generick links
                  don't mean a thing. Branded links help instill confidence in
                  your content.
                </p>
              </div>
            </SubContainer>

            <SubContainer>
              <div>
                <Img src={detailedRecords} />
              </div>
              <p>
                <strong> Detailed Records</strong>
              </p>
              <p>
                Gain Insights into who is clicking your links. Knowing when and
                where people engage with uour content helps inform better
                decisions.
              </p>
            </SubContainer>

            <SubContainer>
              <div>
                <Img src={fullyCustomizable} />
              </div>
              <p>
                <strong> Fully customizable</strong>
              </p>
              <p>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </SubContainer>
          </Wrapper>
        </div>
      </Container>
      <SubSection />
    </>
  );
};

export default Section;
