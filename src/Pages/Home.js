import React from 'react'
import { Steps } from 'antd';
import styled from "styled-components";
import { useHistory } from 'react-router-dom';

const Home = () => {
  const { Step } = Steps;
  const history = useHistory();
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
  const Button = styled.button`
        position: absolute;
        top: 50%;
        left: calc(50% - 50px);
        color: #218380;
        background-color: #FFBC42;
        width: 100px;
        height: 100px;
        border: none;
        border-radius: 50%;
        font-size: 35px;
        font-weight: 700;
        cursor: pointer;
        transition: transform 300ms ease;
        &:hover { transform: scale(1.05); }
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
      <Button onClick={() => {history.push('/beerList')}}>🍺</Button>

    </HomeContainer>
  )
}

export default Home
