import React from 'react';
import { connect } from 'react-redux';
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
        width: 30%;
        text-align: left;
        margin-right: 2%;
    `;
    const Right = styled.div`
        width: 60%;
        text-align: left;
    `;
    const Img = styled.img`
        width: 50px;
        height: 150px;
        margin-bottom: 20px;
    `;
    const beer = props.beer;

    const useStyles = makeStyles({
        root: {
          width: '100%',
        },
        container: {
          maxHeight: 440,
        },
    });
    const useStyle = makeStyles({
        root: {
            width: '100%',
        },
        container: {
            marginTop: '2%',
            maxHeight: 300,
        },
    });
    const classes = useStyles();
    const class1 = useStyle();
    
    return (
        <BackGround onClick={() => {
             props.setModal(false)
        }}>
            <Content>
                <Left>
                    <div><Img src={beer.image_url} /></div>
                    <strong>{beer.id}. {beer.name}</strong>
                    <div><strong>Tagline</strong>: {beer.tagline}</div>
                    <div><strong>Description</strong>: {beer.description}</div>
                    <div><strong>IBU</strong>: {beer.ibu}</div>
                    <div><strong>PH</strong>: {beer.ph}</div>
                    <div><strong>Attenuation Level</strong>: {beer.attenuation_level}</div>
                    <div><strong>ABV</strong>({beer.abv}) :
                        fg({beer.target_fg}) / og({beer.target_og})
                    </div>
                    <div><strong>EBC</strong>({beer.ebc}) :
                        srm({beer.srm})
                    </div>
                    <div><strong>VOLUME</strong> : value({beer.volume.value}) / unit({beer.volume.unit}) </div>
                    {/* <div><strong>BOIL VOLUME</strong> :
                        boil value({beer.boil_volume.value}) / unit({beer.boil_volume.unit})
                    </div> */}
                    <div><strong>FOOD PAIRING</strong>: {beer.food_pairing}</div>
                    <div><strong>BREWERS TIPS</strong>: {beer.brewers_tips}</div><br/>
                    <em>contributed by {beer.contributed_by}</em>
                </Left>
                <Right>
                    <Paper className={classes.root}>
                        <TableContainer className={classes.container}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell colSpan={3} align="center">Ingredients</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">MALT</TableCell>
                                        <TableCell align="center">HOPS</TableCell>
                                        <TableCell align="center">YEAST</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableCell align="left"  width="40%">
                                        {
                                            props.state[0].ingredients.malt.map((a, i) => {
                                                return (
                                                    <div key={i}>
                                                        <div>name : {props.state[0].ingredients.malt[i].name} </div>
                                                        <div>amount(value) : {props.state[0].ingredients.malt[i].amount.value}</div>
                                                        <div>amount(unit) : {props.state[0].ingredients.malt[i].amount.unit}</div><br/>
                                                    </div>
                                                )
                                            })
                                        };
                                    </TableCell>
                                    <TableCell align="left" width="40%">
                                        {
                                            props.state[0].ingredients.hops.map((a, i) => {
                                                return (
                                                    <div key={i}>
                                                        <div>name : {props.state[0].ingredients.hops[i].name}</div>
                                                        <div>amount(value) : {props.state[0].ingredients.hops[i].amount.value}</div>
                                                        <div>amount(unit) : {props.state[0].ingredients.hops[i].amount.unit}</div>
                                                        <div>add : {props.state[0].ingredients.hops[i].add}</div>
                                                        <div>attribute : {props.state[0].ingredients.hops[i].attribute}</div><br/>
                                                    </div>
                                                )
                                            })
                                        }     
                                    </TableCell>
                                    <TableCell align="center" width="20%">
                                        {props.state[0].ingredients.yeast}
                                    </TableCell>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                    <Paper className={class1.root}>
                        <TableContainer className={class1.container}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell colSpan={3} align="center">Method</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">MASH TAMP</TableCell>
                                        <TableCell align="center">FERMENTATION</TableCell>
                                        <TableCell align="center">TWIST</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableCell align="left">

                                        <div>temp(value) : {props.state[0].method.mash_temp[0].temp.value}</div>
                                        <div>temp(unit) : {props.state[0].method.mash_temp[0].temp.unit}</div>
                                        <div>duration : {props.state[0].method.mash_temp[0].duration}</div>
                                    </TableCell>
                                    <TableCell align="left">
                                        <div>temp(value) {props.state[0].method.fermentation.temp.value}</div> 
                                        <div>temp(unit) {props.state[0].method.fermentation.temp.unit}</div>
                                    </TableCell>
                                    <TableCell align="center">
                                        <div>{props.state[0].method.twist}</div>
                                    </TableCell>
                                </TableBody>
                            </Table>
                        </TableContainer>  
                    </Paper>
                </Right>
            </Content>   
        </BackGround>
    );
};

function beerProps(state) {
    return {
        state: state.reducer,
        beer: state.reducer2
    }
}
export default connect(beerProps)(infoModal);

// modal should appear containing all the info of the selected beer