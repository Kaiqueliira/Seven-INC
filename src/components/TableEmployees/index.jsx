import { makeStyles } from '@material-ui/core';
import EditIcon from '@mui/icons-material/Edit';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import { IconButton } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import Data from "../../Data";
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    background: 'red',
  }
}));

export default function TableEmployees() {
  const classes = useStyles()

  return (

    <TableContainer component={Paper} sx={{ maxWidth: 1200 }} >
      <Table size="large" aria-label="simple table">
        <TableHead>
          <TableRow sx={{ background: "primary" }}>
            <TableCell>Funcionários</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Telefone</TableCell>
            <TableCell align="right">Salário</TableCell>
            <TableCell align="right">Admissão</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{
                new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(row.salary)
              }</TableCell>
              <TableCell align="right">{
                new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' }).format(new Date(row.created_at))

              }</TableCell>
              <TableCell align="right"><IconButton aria-label="delete" size="small">
                <EditIcon fontSize="inherit" />
              </IconButton>
                <IconButton aria-label="delete" size="small">
                  <RemoveCircleOutlineRoundedIcon fontSize="inherit" color="error" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  );
}
