import React, { useState } from 'react';
import { Steps } from 'antd';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import styled from "styled-components";
import { connect } from 'react-redux';

import Data from '../Data.json';

const BeerList = (props) => {
    const { Step } = Steps;
    const ListContainer = styled.div`
        margin: 0;
        padding: 50px;
        box-sizing: border-box;
        width: 100vw;
        height: 100vh;
    `;
    const Tables = styled(Table)`
        margin-top: 100px;
    `;

    const Img = styled.img`
        width: 50px;
        height: 50px;
    `;

    const [beer, setBeer] = useState(Data);
    console.log(beer)

    console.log(props.state)
     return (
        <ListContainer>
            <Steps current={1}>
                <Step title="welcome" />
                <Step title="Beer List" />
                <Step title="Shopping Basket" />
            </Steps>
            <Tables>
                <TableHead>
                <TableRow>
                    <TableCell>No.</TableCell>
                    <TableCell>Image</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Tag Line</TableCell>
                    <TableCell>Info</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {beer.map((a,i) => {
                    return (
                        <TableRow key={i}>
                            <TableCell align="left"> {i+1} </TableCell>
                            <TableCell align="left"> <Img src={a.image_url} /> </TableCell>
                            <TableCell align="left"> {a.name} </TableCell>
                            <TableCell align="left"> {a.tagline} </TableCell>
                            <TableCell align="left"> {a.info} </TableCell>
                        </TableRow>
                    )})}
                </TableBody>
            </Tables>
        </ListContainer>
    );
};


function beerProps(state) {
    return {
        state: state.reducer,
    }
}
export default connect(beerProps)(BeerList);

// Create a table for the list of Beers
// When a beer name is clicked on, a modal should appear

// when a column header is drag and dropped, the new column order should be stored in redux -
// - so that the order is maintained even when a user moves between / home and / beerlist
// Create a filter so that users can filter the beers by abv range ex)"5-6", "6-7"