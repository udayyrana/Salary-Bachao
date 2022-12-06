import React from "react";
import styled from "styled-components";

function WelcomeIntro() {
  return (
    <>
      <Welcome>
        <div>
          <img src="/images/moneyplant(2).jpg" alt="" />
        </div>
        <div className="welcomeContent">
          <p className="whoWe">Who we are?</p>
          <h2>
            Welcome To <span>salary</span>bachao.com
          </h2>
        <p>
          Are you looking for an asset manager or an ultimate financial wizard?
        </p>
        </div>
        {/* power of investing */}
      </Welcome>
    </>
  );
}

export default WelcomeIntro;

const Welcome = styled.div`
  background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
  padding: 12rem 0;
  display: flex;
  justify-content: center;
  gap: 6rem;
  img {
    width: 50rem;
    border-radius: 0.5rem;
  }
  .welcomeContent {
    padding: 2rem;
    width: 50rem;
    display: flex;
    flex-direction: column;
    h2 {
      font-size: 4rem;
      line-height: 1.2;
      & > span {
        color: rgba(0, 0, 0, 0.6);
      }
      margin-bottom: 3rem;
    }
    position: relative;
    .whoWe {
      font-size: 1.4rem;
      margin-bottom: 1rem;
      text-transform: uppercase;
      font-weight: 500;
      font-style: italic;
    }
  }
  p {
    font-size: 1.4rem;
  }
`;
