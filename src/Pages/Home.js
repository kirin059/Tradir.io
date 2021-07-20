import React from 'react'
import { Steps } from 'antd';
import styled from "styled-components";

const Home = () => {
  const { Step } = Steps;
  const HomeContainer = styled.div`
    margin: 0;
    padding: 50px;
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
  `;
  const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 100px;
    margin: 10% auto 0;
    font-size: 40px;
    text-align: center;
  `;

  return (
    <HomeContainer>
      <Steps current={0}>
        <Step title="welcome" />
        <Step title="Beer List" />
        <Step title="Shopping Basket" />
      </Steps>
      <Main>
        Welcome to Beer World<br />
        You can look around various kinds of Beers
      </Main>

    </HomeContainer>
  )
}

export default Home
