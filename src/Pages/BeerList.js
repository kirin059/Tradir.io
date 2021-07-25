import React, { useEffect, useRef, useState } from 'react';
import { Steps } from 'antd';
import styled from "styled-components";
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

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';


const BeerList = (props) => {
    const [beer, setBeer] = useState(props.state);
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
    const useStyles = makeStyles({
        table: {
          minWidth: 700,
        },
        tablecell: {
            position: 'relative',
            color: 'red',
            cursor: 'pointer'
        },
        menu: {
            position: 'absolute',
            top: '242px',
            left: '410px',
            maxHeight: '300px',
        },
    });
    const [modal, setModal] = useState(false);
    const classes = useStyles();
    const columns = [
        { no: 'No.', img: 'Image', name: 'Name', first_brewed: 'First Brewed', abv: 'ABV', description: 'Description' }
    ];
    const options = props.state.map(a => {
        return a.abv
    })
    //console.log(options) // arr
    const [abvOption, setAbvOption] = useState(options);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = (e) => {
        setAnchorEl(null);

        const copyBeer = [...beer];
        const values = e.currentTarget.value;  // 정수로 출력
        const options = copyBeer.filter((a) => {

            return a.abv == values
        })
        console.log(options)
        setBeer(options)
    };
//console.log(beer)
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
                        {
                            columns.map((a, i) => {
                                return (
                                    <TableRow key={i}>
                                        <StyledTableCell>{a.no}</StyledTableCell>
                                        <StyledTableCell>{a.img}</StyledTableCell>
                                        <StyledTableCell>{a.name}</StyledTableCell>
                                        <StyledTableCell>{a.first_brewed}</StyledTableCell>
                                        <StyledTableCell className={classes.tablecell} aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                                            {a.abv}
                                        </StyledTableCell>
                                        <Menu
                                            id="fade-menu"
                                            className={classes.menu}
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={open}
                                            onClose={handleClose}
                                            TransitionComponent={Fade}>
                                            {
                                                abvOption.map((a, i) => {
                                                    return (
                                                        <div key={i}>
                                                            <MenuItem onClick={
                                                                handleClose
                                                                //props.dispatch({ type: 'OPTION', payload: {a} })
                                                            } value={a}>{a}</MenuItem>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </Menu>
                                        <StyledTableCell>{a.description}</StyledTableCell>
                                    </TableRow>
                                );
                            })
                        }   
                    </TableHead>
                    <TableBody>
                    {beer.map((a, i) => (
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
                            <StyledTableCell>{a.abv}</StyledTableCell>
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