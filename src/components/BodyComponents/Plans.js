import React from "react";
import styled from "styled-components";

function Plans() {
  return (
    <>
      <CardContent>
        <h3>Beginner</h3>
        <h2>₹99 <span> /Year</span></h2>
        <ul>
          <li>
            <p>Basic</p>
          </li>
        </ul>
      </CardContent>
      <CardContent>
        <h3>Standard</h3>
        <h2>₹199 <span> /Year</span></h2>
        <ul>
          <li>
            <p>Basic</p>
          </li>
          <li>
            <p>Standard</p>
          </li>
        </ul>
      </CardContent>
      <CardContent>
        <h3>Expert</h3>
        <h2>₹365 <span> /Year</span></h2>
        <ul>
          <li>
            <p>Basic</p>
          </li>
          <li>
            <p>Standard</p>
          </li>
          <li>
            <p>Premimum</p>
          </li>
        </ul>
      </CardContent>
    </>
  );
}

export default Plans;

const CardContent = styled.div`
  background-color: #fff;
  
  padding: 1rem 0;
  border-radius: 2rem;
  height: 40rem;
  width: 25rem;
  box-shadow: 0 0 2rem 1rem rgba(0, 0, 0, 0.1);
  
  h2 {
    font-size: 2.4rem;
    padding: 2rem;
    background-color: black;
    color: #fff;
    margin-bottom: 4rem;
  }
  h3{
    font-size: 2rem;
    padding: 2rem;
  }
  ul {
    list-style: none;
  }
  span{
    font-size: 1.4rem;
    font-weight: 600;
  }

  li:before{
    content: '✓';
    font-weight: 900;
    font-size: 1.2rem;
  }
  
  li{
    margin-bottom: 2rem;
  }
  p {
    font-size: 1.4rem;
  }
`;
