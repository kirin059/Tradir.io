import React, { useState } from 'react';
import styled from "styled-components";
import Data from '../Data.json';

const infoModal = (props) => {
    const BackGround = styled.div`
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
        z-index: 998;
    `;
    const Content = styled.div`
        position: fixed;
        left: 50%;
        top: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 70%;
        height: 90%;
        padding: 2% 3%;
        transform: translate(-50%, -50%);
        background-color:#fff;
        border-radius: 10px;
        text-align: center;
        box-sizing: border-box;
        z-index: 999;
    `;
    const Left = styled.div`
        text-align: left;

    `;
    const Right = styled.div`
        text-align: left;
    `;

    const [beer, setBeer] = useState(Data);

    return (
        <BackGround onClick={() => {
             props.setModal(false)
        }}>
            <Content>
                {beer[0].name}
                <Left>
                    <div>{beer.image_url}</div>
                    <div>{beer.id}. {beer.name}</div>
                    <div>{beer.tagline}</div>
                    <div>{beer.description}</div>
                    <div>{beer.ibu}</div>
                    <div>{beer.ph}</div>
                    <div>{beer.attenuation_level}</div>
                    
                </Left>
                <Right>
                    <div></div>
                </Right>
            </Content>
                
        </BackGround>

    );
};

export default infoModal;

// modal should appear containing all the info of the selected beer