import React from "react";
import styled from "styled-components";
import StarIcon from "@mui/icons-material/Star";
function Testimonials() {
  return (
    <>
      <Testimonial>
        <span>
          <div>
            <img src="/images/Opfam4.jpg" alt="" />
          </div>
          <div className="testimonialsHead">
            <em>our work says about US</em>
            <h2>What our people say about us</h2>
            <p>
              We have a family of more than 1500 happy customers and it is
              growing day by day!
            </p>
            <h3>OVerall Ratings</h3>
            <div className="ratings">
              <button>
                <StarIcon fontSize="large" />
              </button>
              <button>
                <StarIcon fontSize="large" />
              </button>
              <button>
                <StarIcon fontSize="large" />
              </button>
              <button>
                <StarIcon fontSize="large" />
              </button>
              <button className="last">
                <StarIcon fontSize="large" />
              </button>
              <p>4.7</p>
            </div>
            <span>Excellent</span>
          </div>
          <img className="fam4" src="/images/Opfamily3.jpg" alt="" />
          <Card className="fam3">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <p>
              Lorem Ipsum sdvbhiubviab dvuabvuavbsiv bdfuiavbdafvbad fvbiauvIPHU
              ivuabvjfiusbvjk
            </p>
            <h4>Customer1</h4>
            <h5>Valued Customer</h5>
          </Card>
          <img className="fam2" src="/images/Opfamily2.jpg" alt="" />
          {/* <img className="fam4" src="/images/fam5.jpg" alt="" /> */}
        </span>
        <div>
          <Card>
            <p>Lorem Ipsum</p>
            <h4>Customer1</h4>
          </Card>
          <Card>
            <p>Lorem Ipsum</p>
            <h4>Customer1</h4>
          </Card>
          <Card>
            <p>Lorem Ipsum</p>
            <h4>Customer1</h4>
          </Card>
        </div>
      </Testimonial>
      <Stats>
        <StatsCard>
          <h3 id="num1">1500+ Happy Clients</h3>
        </StatsCard>
        <StatsCard>
          <h3>Nation Wide Services</h3>
        </StatsCard>
        <StatsCard>
          <h3>15+ Years of Expertise</h3>
        </StatsCard>
      </Stats>
    </>
  );
}

export default Testimonials;

const Testimonial = styled.div`
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
  z-index: -20;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 10rem;
  padding-bottom: 6rem;
  span {
    z-index: 1;
    margin-bottom: 10rem;
    display: flex;
    gap: 6rem;
    position: relative;
  }
  .fam2 {
    position: absolute;
    margin-top: 10rem;
    margin-left: 25rem;
    width: 20rem;
  }
  .fam3 {
    position: absolute;
    margin-top: 17rem;
    margin-left: 10rem;
    width: 20rem;
    height: fit-content;
    left: 0;
    z-index: 10;
    text-align: center;
    & > p {
      margin: 1rem 0;
    }
  }

  .fam4 {
    font-weight: 500;
    position: absolute;
    margin-top: 30rem;
    font-style: italic;
    width: 30rem;
    margin-left: 20rem;
    left: 0;
  }

  img {
    width: 20rem;
    border-radius: 2rem;
    box-shadow: 0 0 2rem 1rem rgba(0, 0, 0, 0.1);
  }

  h2 {
    line-height: 1.2;
    font-size: 4rem;
    margin-bottom: 2rem;
    margin-top: 1rem;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: -0.08rem;
  }
  h3 {
    line-height: 1.2;
    font-size: 2.4rem;
    margin-bottom: 2rem;
    margin-top: 6rem;
    text-transform: uppercase;
  }
  em {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  p {
    line-height: 1.3;
    font-size: 1.4rem;
  }
  & > div {
    display: flex;
    gap: 3rem;
  }
  .testimonialsHead {
    width: 38rem;
    margin-top: 5rem;
    margin-left: 30rem;
    p {
      font-weight: 500;
      letter-spacing: -0.06rem;
    }
    & > .ratings {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      p {
        font-size: 1.2rem;
      }
    }
    button {
      background-color: black;
      color: white;
      text-align: center;
      padding: 0.5rem;
      font-size: 1rem;
      margin-right: 1rem;
      border-radius: 0.5rem;
      pointer-events: none;
      border: none;
    }
    span {
      font-weight: 800;
    }
    .last {
      background: linear-gradient(90deg, black 70%, rgba(0, 0, 0, 0.2) 50%);
    }
  }
`;

const Card = styled.div`
  padding: 2rem 3rem;
  width: 20rem;
  height: 20rem;
  background-color: #fff;
  border-radius: 2rem;
  z-index: 1;
  margin-bottom: 6rem;
  box-shadow: 0 0 2rem 1rem rgba(0, 0, 0, 0.1);
  p {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
  h4 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  h5 {
    font-size: 1rem;
  }
`;
const Stats = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
  gap: 5rem;
`;

const StatsCard = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-size: 2rem;
  padding: 5rem;
`;


  /* #num1 {
    animation: counter 5s ease-in-out;
    counter-set: num var(--num);
  }

  #num1 {
    --num: 1500;
  }
  #num1::before {
    content: counter(num);
  }

  @property --num {
    syntax: "<integer>";
    initial-value: 0;
    inherits: false;
  }

  @keyframes counter {
    from {
      --num: 0;
    }
    to {
      --num: 1500;
    }
  } */
  /* .number:hover {
      --num: 100;
  } */
