import React from 'react';
import { connect } from 'react-redux';
import styled from "styled-components";
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';

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
        width: 40%;
        text-align: left;

    `;
    const Right = styled.div`
        width: 50%;
        text-align: left;
    `;
    const Img = styled.img`
    width: 100px;
    height: 100px;
    `;
    const TableHeads = styled(TableHead)`
        color: white;
        background-color: #1890FF;
    `;

    // const { id } = useParams();
    // const beer = props.state.find(function(a) {
    //     return a.id == id;
    // });
    // console.log(beer)
    // console.log(props.state)
    // console.log(id)
    const beer = props.beer;
    console.log(beer)
    return (
        <BackGround onClick={() => {
             props.setModal(false)
        }}>
            <Content>
                <Left>
                    <div><Img src={beer.image_url} /></div>
                    <div>{beer.id}. {beer.name}</div>
                    <div>tagline: {beer.tagline}</div>
                    <div>description: {beer.description}</div>
                    <div>ibu: {beer.ibu}</div>
                    <div>ph: {beer.ph}</div>
                    <div>attenuation level: {beer.attenuation_level}</div>
                    <div><strong>ABV</strong>({beer.abv}) :
                        fg({beer.target_fg}) / og({beer.target_og})
                    </div>
                    <div><strong>EBC</strong>({beer.ebc}) :
                        srm({beer.srm})
                    </div>
                    {/* <div><strong>VOLUME</strong> :
                        value({beer.volume.value}) / unit({beer.volume.unit})
                    </div> */}
                    {/* <div><strong>BOIL VOLUME</strong> :
                        boil value({beer.boil_volume.value}) / unit({beer.boil_volume.unit})
                    </div> */}
                    <div><strong>FOOD PAIRING</strong>: {beer.food_pairing}</div>
                    <div><strong>BREWERS TIPS</strong>: {beer.brewers_tips}</div>
                    <div>contributed by <strong>{beer.contributed_by}</strong></div>
                </Left>
                <Right>
                    <Table>
                        <TableHeads>
                            <TableRow>
                                <TableCell colSpan={3} align="center">method</TableCell>
                            </TableRow>
                        </TableHeads>
                        <TableBody>
                            <TableCell align="left">
                                <strong>MASH TAMP</strong> <br />
                                temp(value) : {props.state[0].method.mash_temp[0].temp.value} <br />
                                temp(unit) : {props.state[0].method.mash_temp[0].temp.unit} <br />
                                duration : {props.state[0].method.mash_temp[0].duration}
                            </TableCell>
                            <TableCell align="left">
                                <strong>FERMENTATION</strong> <br />
                                temp(value) {props.state[0].method.fermentation.temp.value} <br />
                                temp(unit) {props.state[0].method.fermentation.temp.unit}</TableCell>
                            <TableCell align="center">
                                <strong>TWIST</strong> <br />
                                {props.state[0].method.twist}
                            </TableCell>
                        </TableBody>

                        <TableHeads>
                            <TableRow>
                                <TableCell colSpan={3} align="center">ingredients</TableCell>
                            </TableRow>
                        </TableHeads>
                        <TableBody>
                            <TableCell align="left">
                                <div><strong>MALT</strong></div>
                                {
                                    props.state[0].ingredients.malt.map((a, i) => {
                                        return (
                                            <div key={i}>
                                                <div>name : {props.state[0].ingredients.malt[i].name} </div>
                                                <div>amount(value) : {props.state[0].ingredients.malt[i].amount.value}</div>
                                                <div>amount(unit) : {props.state[0].ingredients.malt[i].amount.unit}</div>
                                            </div>
                                        )
                                    })
                                };
                            </TableCell>
                            <TableCell align="left" width="40%">
                                <div><strong>HOPS</strong></div>
                                {
                                    props.state[0].ingredients.hops.map((a, i) => {
                                        return (
                                            <div key={i}>
                                                <div>name : {props.state[0].ingredients.hops[i].name}</div>
                                                <div>amount(value) : {props.state[0].ingredients.hops[i].amount.value}</div>
                                                <div>amount(unit) : {props.state[0].ingredients.hops[i].amount.unit}</div>
                                                <div>add : {props.state[0].ingredients.hops[i].add}</div>
                                                <div>attribute : {props.state[0].ingredients.hops[i].attribute}</div>
                                            </div>
                                        )
                                    })
                                }     
                            </TableCell>
                            <TableCell align="center" width="20%">
                                <strong>YEAST</strong>  <br />
                                {props.state[0].ingredients.yeast}</TableCell>
                        </TableBody>
                    </Table>
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