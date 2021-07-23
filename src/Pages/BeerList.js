import React, { useState } from 'react';
import { Steps } from 'antd';
import styled from "styled-components";
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { connect } from 'react-redux';
import InfoModal from './infoModal';

const BeerList = (props) => {
    const { Step } = Steps;
    const ListContainer = styled.div`
        margin: 0;
        padding: 50px;
        box-sizing: border-box;
        width: 100%;
        height: 100vh;
    `;
    const Tables = styled(Table)`
        margin-top: 100px;
    `;
    const Img = styled.img`
        width: 50px;
        height: 50px;
    `;
    const [modal, setModal] = useState(false);

     return (
        <ListContainer>
            <Steps current={1}>
                <Step title="welcome" />
                <Step title="Beer List" />
                <Step title="Shopping Basket" />
            </Steps>
            {
                modal === true
                ? <InfoModal setModal={ setModal } />
                : null
            }
            <Tables>
                <TableHead>
                    <TableRow>
                        <TableCell>No.</TableCell>
                        <TableCell>Image</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>First Brewed</TableCell>
                        <TableCell>Info</TableCell>
                    </TableRow>
                </TableHead>            
                <TableBody>
                    {
                         props.state.map((a, i) => {
                            return (
                                <TableRow key={i}>
                                    <TableCell align="left"> {a.id} </TableCell>
                                    <TableCell align="left"> <Img src={a.image_url} /> </TableCell>
                                    <TableCell align="left">
                                        <span style={{ "cursor": "pointer" }}
                                            onClick={() => {
                                                setModal(true)
                                                props.dispatch({ type: 'OPEN', payload: a.id })
                                            }}
                                        >{a.name}</span>
                                    </TableCell>
                                    <TableCell align="left"> {a.first_brewed} </TableCell>
                                    <TableCell align="left">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="center">ABV</TableCell>
                                                <TableCell align="center">IBU</TableCell>
                                                <TableCell align="center">EBC</TableCell>
                                                <TableCell align="center">PH</TableCell>
                                                <TableCell align="center">Attenuation Level</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell align="center">{a.abv}</TableCell>
                                                <TableCell align="center">{a.ibu}</TableCell>
                                                <TableCell align="center">{a.ebc}</TableCell>
                                                <TableCell align="center">{a.ph}</TableCell>
                                                <TableCell align="center">{a.attenuation_level}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </TableCell>
                                </TableRow>
                            )
                         })
                     }
                 </TableBody>
            </Tables>
        </ListContainer>
    );
};


function beerProps(state) {
    return {
        state: state.reducer,
        beer: state.reducer2
    }
}
export default connect(beerProps)(BeerList);

// Create a table for the list of Beers
// When a beer name is clicked on, a modal should appear

// when a column header is drag and dropped, the new column order should be stored in redux -
// - so that the order is maintained even when a user moves between / home and / beerlist
// Create a filter so that users can filter the beers by abv range ex)"5-6", "6-7"