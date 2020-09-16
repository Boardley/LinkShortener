import React from "react";
/* import styled from "styled-components";
 */ import SubSection from "./SubSection";

import detailedRecords from "../../images/detailedRecords.svg";
import brandRecognition from "../../images/brandRecognition.svg";
import fullyCustomizable from "../../images/fullyCustomizable.svg";

const Section = () => {
  return (
    <>
      <div>
        <div>
          <h1>Advanced Statistics</h1>
          <p>
            Track how your links are performing across the web with
            <br /> our advanced statistics dashboard.
          </p>
        </div>

        <div>
          <div>
            <div>
              <img src={brandRecognition} />
            </div>
            <p>
              <strong> Brand Recognition</strong>
            </p>
            <p>
              Boost your brand recognition with each click. Generick links don't
              mean a thing. Branded links help instill confidence in your
              content.
            </p>
          </div>

          <div>
            <div>
              <img src={detailedRecords} />
            </div>
            <p>
              <strong> Detailed Records</strong>
            </p>
            <p>
              Gain Insights into who is clicking your links. Knowing when and
              where people engage with uour content helps inform better
              decisions.
            </p>
          </div>

          <div>
            <div>
              <img src={fullyCustomizable} />
            </div>
            <p>
              <strong> Fully customizable</strong>
            </p>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
      <SubSection />
    </>
  );
};

export default Section;
