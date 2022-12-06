import React from "react";
import styled from "styled-components";
import "./UI/NavComponent.css";
function NavComponent() {
  return (
    <div className="navList">
      {/* Logo */}
      <Logo>
        <a href="/">
          <span>salary</span>bachao.com
        </a>
      </Logo>

      {/* MenuList */}
      <div className="navUlandBtn">
        <NavUl>
          <li>
            <a>Who We Are</a>
          </li>
          <li>
            <a>What We Offer</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </NavUl>

        <a className="btn">Book a Consultation</a>
        <a className="btn signUp">Sign Up</a>
      </div>
    </div>
  );
}

export default NavComponent;

const Logo = styled.span`
  & > a {
    text-decoration: none;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -1px;
    color: rgba(0, 0, 0, 0.8);
    &:hover {
      color: rgba(0, 0, 0, 0.6);
      transition: 0.3s all;
    }
  }
  & > a > span {
    color: rgba(0, 0, 0, 0.6);
  }
`;

const NavUl = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;

  & > li {
    font-size: 1.4rem;
    margin: 0 0.8rem;
    & > a {
      padding: 0.8rem 1.8rem;
      background-color: transparent;
      color: rgba(0, 0, 0, 0.6);
      font-weight: 500;
      letter-spacing: -0.6px;
      border-radius: 0.4rem;
      &:hover {
        background-color: rgba(0, 0, 0, 0.06);
        cursor: pointer;
        transition: 0.3s all;
      }
    }
  }
`;

