import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from "styled-components";

const Main = () => {

    const Button = styled.button`
        position: absolute;
        top: 50%;
        left: calc(50% - 75px);
        color: #218380;
        background-color: #FFBC42;
        width: 150px;
        height: 150px;
        border: none;
        border-radius: 50%;
        font-size: 35px;
        font-weight: 700;
        cursor: pointer;
        transition: transform 300ms ease;
        &:hover { transform: scale(1.05); }
    `;
    const history = useHistory();

    return (
        <>
            <Button onClick={() => {history.push('/home')}}>Beer</Button>
        </>
    );
};

export default Main;

// Redirect users to /home when they first arrive