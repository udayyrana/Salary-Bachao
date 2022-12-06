import "./App.css";
import NavComponent from "./components/NavComponent";
import $ from "jquery";
import HeroComponent from "./components/BodyComponents/HeroComponent";
import WelcomeIntro from "./components/BodyComponents/WelcomeIntro";
import WhyUs from "./components/BodyComponents/WhyUs";
import Testimonials from "./components/BodyComponents/Testimonials";
import Plans from "./components/BodyComponents/Plans";
import styled from "styled-components";
import Faq from "./components/BodyComponents/Faq";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="heroBackground">
        {/* Nav */}
        <div id="navBar" className="nav">
          <NavComponent />
        </div>
        {/* Hero */}
        <div className="container hero">
          <HeroComponent />
        </div>
      </div>
      <div className="App">
        {/* What we do? / How it works */}
        <Quotes>
          <h4>
            "Someone’s sitting in the shade today because someone planted a tree
            a long time ago."
          </h4>
          <span>~Warren Buffett</span>
        </Quotes>
        <WelcomeIntro />
        <Quotes>
          <h4>
            "Investing puts money to work. The only reason to save money is to
            invest it."
          </h4>
          <span>~Grant Cardone</span>
        </Quotes>
        <WhyUs />
        <Quotes>
          <h4>
            "When it comes to investing, we want our money to grow with the
            highest rates of return, and the lowest risk possible."
          </h4>
          <span>~Phil Town</span>
        </Quotes>
        {/* Testimonials & stats */}
        <Testimonials />
        {/* plans */}
        <div className="plans">
          <h2>Pricing and Policies</h2>
          <div className="plansInner">
            <Plans />
          </div>
          {/* Contact Us */}
          <FormSection>
            <h2>Plant your money tree, now.</h2>
            <p>Enter your mobile numer</p>
            <input type="number" placeholder="123456789" required />
            <Button className="">Contact Us</Button>
            <span>+91</span>
          </FormSection>
        </div>
        {/* Faq */}
        <div className="faq">
        <Faq />
        </div>

        {/* Footer */}
        <Footer/>
      </div>
    </>
  );
}

export default App;

$(document).ready(function () {
  var scroll_pos = 0;
  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 10) {
      $(".nav").css("background-color", "white");
      $(".nav").css("box-shadow", "0 0 2rem 0.5rem rgba(0,0,0,0.1)");
    } else {
      $(".nav").css("background-color", "transparent");
      $(".nav").css("box-shadow", "none");
    }
  });
});

const Quotes = styled.div`
  text-align: center;
  background-color: #fff;
  padding: 6rem;
  h4 {
    font-style: italic;
    font-size: 2.4rem;
    color: rgba(0, 0, 0, 0.7);
    margin-bottom: 1rem;
  }
  span {
    font-size: 1.4rem;
  }
`;

const FormSection = styled.div`
  background-color: black;
  width: 110rem;
  margin: 1rem auto;
  padding: 5rem 0;
  border-radius: 2rem;
  color: white;
  position: relative;
  h2 {
    font-size: 3rem;
    font-weight: 600;
    text-transform: capitalize;
    margin-bottom: 3rem;
  }
  p {
    font-size: 1.2rem;
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 0.08rem;
    margin-bottom: 1.5rem;
  }

  input {
    padding: 2rem;
    padding-left: 5rem;
    width: 35rem;
    background-color: transparent;
    border: 0.05rem solid #fff;
    border-radius: 0.5rem;
    color: #fff;
    &:focus {
      outline: none;
    }
  }
  span {
    font-weight: 600;
    position: absolute;
    left: 36rem;
    bottom: 7.06rem;
    font-size: 1.2rem;
  }
`;
const Button = styled.button`
  background-color: #fff;
  color: black;
  padding: 1rem 2rem;
  border-radius: 10rem;
  font-weight: 600;
  position: absolute;
  right: 35rem;
  bottom: 6rem;

  &:hover {
    color: #fff;
    background-color: black !important;
    cursor: pointer;
  }
`;
