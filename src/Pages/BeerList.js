import React, { useState } from 'react';
import { Steps } from 'antd';
import styled from "styled-components";
//import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { connect } from 'react-redux';
import InfoModal from './infoModal';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';




const BeerList = (props) => {
    const { Step } = Steps;
    const ListContainer = styled.div`
        margin: 0;
        padding: 50px;
        box-sizing: border-box;
        width: 100%;
        height: 100vh;
    `;
    const Img = styled.img`
        width: 50px;
        height: 50px;
    `;
    const StyledTableCell = withStyles((theme) => ({
        head: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        body: {
          fontSize: 14,
        },
      }))(TableCell);
      
      const StyledTableRow = withStyles((theme) => ({
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      }))(TableRow);
      
      function createData(id, img_url, name, first_brewed, description) {
        return { id, img_url, name, first_brewed, description };
      }
      
      const useStyles = makeStyles({
        table: {
          minWidth: 700,
        },
      });
    const [modal, setModal] = useState(false);
    const classes = useStyles();
    return (
        <ListContainer>
            <Steps current={1} style={{marginBottom: '80px'}}>
                <Step title="welcome" />
                <Step title="Beer List" />
                <Step title="Shopping Basket" />
            </Steps>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>No.</StyledTableCell>
                            <StyledTableCell>Image</StyledTableCell>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell>First Brewed</StyledTableCell>
                            <StyledTableCell>Description</StyledTableCell>     
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {props.state.map((a, i) => (
                        <StyledTableRow key={i}>
                            <StyledTableCell component="th" scope="row">
                                {a.id}
                            </StyledTableCell>
                            <StyledTableCell><Img src={a.image_url} /></StyledTableCell>
                            <StyledTableCell>
                                <span style={{ "cursor": "pointer" }}
                                    onClick={() => {
                                        setModal(true)
                                        props.dispatch({ type: 'OPEN', payload: a.id })
                                    }}
                                >{a.name}</span>
                            </StyledTableCell>
                            <StyledTableCell>{a.first_brewed}</StyledTableCell>
                            <StyledTableCell>{a.description}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {
                modal === true
                ? <InfoModal setModal={ setModal } />
                : null
            }          
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


// when a column header is drag and dropped, the new column order should be stored in redux -
// - so that the order is maintained even when a user moves between / home and / beerlist
// Create a filter so that users can filter the beers by abv range ex)"5-6", "6-7"