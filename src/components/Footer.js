import React from "react";
import styled from "styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <>
      <FooterSection>
        <Logo><span>salary</span>bachao.com</Logo>
        <div>
          <Company>
            <h3>Company</h3>
            <a href="#">About Us</a>
            <a href="#">Blog</a>
            <a href="#">Contact Us</a>
          </Company>
          <Legal>
            <h3>Legal</h3>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </Legal>
          <GetInTouch>
            <h3>Get in touch</h3>
            <a href="#"><TwitterIcon sx={{"fontSize":"2rem"}}/></a>
            <a href="#"><LinkedInIcon sx={{"fontSize":"2rem"}}/></a>
            <a href="#"><FacebookIcon sx={{"fontSize":"2rem"}}/></a>
            <a href="#"><InstagramIcon sx={{"fontSize":"2rem"}}/></a>
          </GetInTouch>
        </div>
      </FooterSection>
      <CopyRightSection>© 2022 salarybachao.com</CopyRightSection>
    </>
  );
}

export default Footer;

const FooterSection = styled.div`
  background-color: black;
  color: #fff;
  padding: 10rem 14rem 6rem 14rem;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  a {
    color: #fff;
  }
  &>div{
    display: flex;
    gap: 6rem;
    h3{
        font-size: 1.4rem;
        color:gray;
        text-transform: uppercase;
        margin-bottom: 1rem;
    }
    a{
        font-size: 1.6rem;
        padding-bottom: 1rem;
        padding-right: 2rem;
        margin: 0.5rem 0;
        text-decoration: none;
        text-transform: capitalize;
        border-bottom: 1px solid black;
        &:hover{
            border-bottom: 1px solid #fff;
        }
    }
  }
`;

const Logo = styled.h2`
  font-size: 4rem;
  color: #bebebe;
  span{
    color: gray;
  }
`;

const Legal = styled.div`
    display: flex;
    flex-direction: column;
`;

const GetInTouch = styled.div`
    a{
        margin-right:1rem !important;
        &:hover{
            border-bottom: none !important;
            color: gray;
        }
    }
`;

const Company = styled.div`
  display: flex;
  flex-direction: column;
`;

const CopyRightSection = styled.div`
    text-align: center;
    background-color: black;
    color: gray;
    padding: 2rem;
    border-top: 0.5px solid #363636;
    font-size: 1.2rem;
    font-weight: 600;
`;