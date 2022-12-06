import React from "react";
import styled from "styled-components";

function WhyUs() {
  return (
    <WhyChooseUs>
      <div className="chooseHeading">
        <em>What we offer?</em>
        <h2>What We Do for you</h2>
      </div>
      <div className="imgSection">
        <div className="left">
          <Card>
            <h3>Wealth Management</h3>
            <p>We will help you to save more and invest more.</p>
          </Card>
          <Card>
            <h3>Tax Planning</h3>
            <p>We will help you in your taxes, so you can save more.</p>
          </Card>
        </div>
        <Image>
          <img src="/images/whyus.png" alt="" />
        </Image>
        <div className="right">
          <Card>
            <h3>Investment Planning</h3>
            <p>We will provide you a plan which consits of guaranteed as well as risky returns</p>
          </Card>
          <Card>
            <h3>Legal Advisory</h3>
            <p>If you have any legal proceedings, then we can also help you in that.</p>
          </Card>
        </div>
      </div>
    </WhyChooseUs>
  );
}

export default WhyUs;

const WhyChooseUs = styled.div`
background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);

  padding-top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > .chooseHeading {
    text-align: left;
    margin-bottom: -4rem;
    & > h2 {
      font-size: 4rem;
      letter-spacing: -0.06rem;
      font-weight: 600;
      text-transform: uppercase;
    }
    & > em {
      font-size: 1.4rem;
      text-transform: uppercase;
    }
  }
  & > .imgSection {
    /* margin-top: 4rem; */
    display: flex;
    align-items: center;
    justify-content: center;
    /* gap: 1rem; */
  }
`;

const Card = styled.div`
  padding: 2rem;
  height: fit-content;
  width: 25rem;
  background-color: white;
  box-shadow: 0 0 1rem 0.1rem rgba(0, 0, 0, 0.05);
  margin-top: 6rem;
  border-radius: .5rem;
  & > h3 {
    font-weight: 500;
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
  &>p{
    font-size: 1.2rem;
  }
`;
const Image = styled.span`
  img {
    width: 40rem;
    margin-top: 3rem;
    margin-bottom: -0.4rem;
  }
`;
