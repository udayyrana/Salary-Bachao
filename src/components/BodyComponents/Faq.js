import React from "react";
import styled from "styled-components";

import AccordianComp from "./AccordianComp";

function Faq() {
  const contentArray = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`,
  ];
  return (
    <Section className="container">
      <FaqHeading>Frequently Asked Questions</FaqHeading>

      <AccordianComp
        heading={"What is salarybachao"}
        content={contentArray[0]} 
      />
      <AccordianComp
        heading={"What is salarybachao"}
        content={contentArray[0]}
      />
      <AccordianComp
        heading={"What is salarybachao"}
        content={contentArray[0]}
      />
      <AccordianComp
        heading={"What is salarybachao"}
        content={contentArray[0]}
      />
    </Section>
  );
}

export default Faq;

const Section = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  letter-spacing: -0.06rem;
`;

const FaqHeading = styled.h2`
  width: 50rem;
  line-height: 1.2;
  font-weight: 600;
  font-size: 4rem;
  margin-bottom: 6rem;
  text-align: center;
`;
