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

    const { id } = useParams();
    const beer = props.state.find(function(a) {
        return a.id == id;
    });
    console.log(pickBeer)
    return (
        <BackGround onClick={() => {
             props.setModal(false)
        }}>
            <Content>
                <Left>
                    <div><Img src={props.state[0].image_url} /></div>
                    <div>{props.state[0].id}. {props.state[0].name}</div>
                    <div>tagline: {props.state[0].tagline}</div>
                    <div>description: {props.state[0].description}</div>
                    <div>ibu: {props.state[0].ibu}</div>
                    <div>ph: {props.state[0].ph}</div>
                    <div>attenuation level: {props.state[0].attenuation_level}</div>
                </Left>
                <Right>
                    <div><strong>ABV</strong>({props.state[0].abv}) :
                        fg({props.state[0].target_fg}) / og({props.state[0].target_og})
                    </div>
                    <div><strong>EBC</strong>({props.state[0].ebc}) :
                        srm({props.state[0].srm})
                    </div>
                    <div><strong>VOLUME</strong> :
                        value({props.state[0].volume.value}) / unit({props.state[0].volume.unit})
                    </div>
                    <div><strong>BOIL VOLUME</strong> :
                        boil value({props.state[0].boil_volume.value}) / unit({props.state[0].boil_volume.unit})
                    </div>
                    <div><strong>FOOD PAIRING</strong>: {props.state[0].food_pairing}</div>
                    <div><strong>BREWERS TIPS</strong>: {props.state[0].brewers_tips}</div>
                    <div>contributed by <strong>{props.state[0].contributed_by}</strong></div>
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
                                                <div>name : {a[i].name} </div>
                                                <div>amount(value) : {a[i].amount.value}</div>
                                                <div>amount(unit) : {a[i].amount.unit}</div>
                                            </div>
                                        )
                                    })
                                };
                            </TableCell>
                            <TableCell align="left">
                                <div><strong>HOPS</strong></div>
                                {
                                    props.state[0].ingredients.hops.map((a, i) => {
                                        return (
                                            <div key={i}>
                                                <div>name : {a[i].name}</div>
                                                <div>amount(value) : {a[i].amount.value}</div>
                                                <div>amount(unit) : {a[i].amount.unit}</div>
                                                <div>add : {a[i].add}</div>
                                                <div>attribute : {a[i].attribute}</div>
                                            </div>
                                        )
                                    })
                                };     
                            </TableCell>
                            <TableCell align="center">
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
    }
}
export default connect(beerProps)(infoModal);

// modal should appear containing all the info of the selected beer