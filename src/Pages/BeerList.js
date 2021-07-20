import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const BeerList = () => {
    return (
        <div>
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell>No.</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Tag Line</TableCell>
                    <TableCell>First Brewed</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Image</TableCell>
                    <TableCell>abv</TableCell>
                    <TableCell>ibu</TableCell>
                    <TableCell>target_fg</TableCell>
                    <TableCell>target_og</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {/* {customers.map(c => {
                return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
                })} */}
                </TableBody>
            </Table>
        </div>
    );
};

export default BeerList;

// Create a table for the list of Beers
// When a beer name is clicked on, a modal should appear

// when a column header is drag and dropped, the new column order should be stored in redux -
// - so that the order is maintained even when a user moves between / home and / beerlist
// Create a filter so that users can filter the beers by abv range ex)"5-6", "6-7"