import React from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Report ({summary}) {
    let rows = []

    for (let index in summary.projects) {
        let project = summary.projects[index]
        if (project.employees.length > 1) {
            rows.push(
                <TableRow key={'reportItem' + index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align="center" component="th" scope="row">{project.getEmployeeNumber(1)}</TableCell>
                    <TableCell align="center" component="th" scope="row">{project.getEmployeeNumber(2)}</TableCell>
                    <TableCell align="center" component="th" scope="row">{index}</TableCell>
                    <TableCell align="center" component="th" scope="row">{project.workingDays}</TableCell>
                </TableRow>
            )
        }
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Employee ID #1</TableCell>
                        <TableCell align="center">Employee ID #2</TableCell>
                        <TableCell align="center">Project ID</TableCell>
                        <TableCell align="center">Days Worked</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows}
                </TableBody>
            </Table>
        </TableContainer>
    )
}