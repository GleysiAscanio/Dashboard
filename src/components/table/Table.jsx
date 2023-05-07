import React from "react";
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import { tableData } from "../../Data/data";
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import "./Table.css"

export const BasicTable = () => {

    const makeStyles = (status) => {
        if(status === "Approved"){
            return{
                background: 'rgb(145 254 159 / 47%)',
                color: 'green',
            }
        } else if(status === "Pending"){
            return{
                background: '#ffadad8f',
                color: 'red',
              }
        }else{
            return{
                background: '#59bfff',
                color: 'white',
              }
        }
    }
    return(
        <div className="table">
            <h3>Recent Orders</h3>
            <TableContainer component={Paper} style={{boxShadow:"0px 13px 20px 0px #80808029"}}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Products</TableCell>
                        <TableCell align="left">Tracking ID</TableCell>
                        <TableCell align="left">Date</TableCell>
                        <TableCell align="left">Status</TableCell>
                        <TableCell align="left"></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {tableData.map((row) => (
                        <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="left">{row.id}</TableCell>
                        <TableCell align="left">{row.date}</TableCell>
                        <TableCell align="left">
                            <span className="status" style={makeStyles(row.status)}>{row.status}</span></TableCell>
                        <TableCell align="left" className="details">details</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}