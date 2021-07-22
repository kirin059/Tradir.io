import React from 'react';
import styled from "styled-components";

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

    return (
        <BackGround onClick={() => {
             props.setModal(false)
        }}>
            <Content>
                {/* beer info */}
            </Content>
                
        </BackGround>

    );
};

export default infoModal;

// modal should appear containing all the info of the selected beer