import React from "react";
import "../UI/HeroComponent.css";
import styled from "styled-components";

function HeroComponent() {
  return (
    <>
      <div className="heroTextContainer">
        <h1 className="heroHeadline">Let's plant your money tree.</h1>
        <p className="emTag"> Your ultimate financial wizard is here!</p>
        <p className="heroText">
          <strong>
            salary<span>bachao</span>
          </strong>{" "}
          can help you to save more, invest more, and earn more passively. Now
          you don't need to worry about your investments, taxes, and future
          plans! Give us a chance, and we will provide you{" "}
          <strong style={{ color: "black" }}>your future money tree.</strong>
        </p>
        <Form>
          <label>Enter you mobile number</label>
          <input placeholder="123456789" />
          <button className="btn">Book a Consultation</button>
        </Form>
      </div>
      <img className="heroImage" src="/images/moneyplant(1).jpg" alt="" />
    </>
  );
}

export default HeroComponent;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;

  & > label {
    font-size: 1.2rem;
    text-transform: uppercase;
    margin: 1rem 0;
  }

  & > input {
    padding: 2rem;
    background-color: transparent;
    border-radius: 0.6rem;
    border: 1px solid rgba(0, 0, 0, 0.6);
  }
  & > button {
    position: absolute;
    right: 0;
    bottom: 0;
    margin-bottom: 0.8rem;
    margin-right: 1rem;
  }
`;
