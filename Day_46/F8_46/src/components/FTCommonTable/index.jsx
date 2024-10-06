import React from 'react';
import { TableContainer, Table, Paper, TableHead, TableRow, TableCell, TableBody, Typography, Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import '../../index.css'
import style from './style.module.css'

const FCommonTable = ({ columns, rows, title, maxWidth, onUpdate, onDelete, onCreate }) => {
    return (
        <>
            <Typography
                sx={{ flex: '1 1 100%', textAlign: 'center', color: 'blueViolet' }}
                variant="h6"
                id="tableTitle"
                component="div"
            >
                {title}
            </Typography>
            <Button
                variant="contained"
                color="success"
                onClick={onCreate}
                sx={{ margin: '0 auto', display: 'block' }}
            >Add</Button>
            <TableContainer sx={{ maxWidth: maxWidth, margin: '0 auto' }} component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {
                                columns.map(column => <TableCell className={style['text--red']} width={column?.width} key={column.name}>{column.text}</TableCell>)
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            rows.map((row, ridx) => {
                                return (
                                    <TableRow key={`${ridx}`}>
                                        {
                                            columns.map(column => {
                                                if (column.name === 'action') {
                                                    return <TableCell key={`${ridx}${column.name}`}>
                                                        <EditIcon
                                                            onClick={() => onUpdate(row)}
                                                            sx={{ color: 'green' }}
                                                            className={'ma-2'}
                                                        />
                                                        <DeleteOutlineIcon
                                                            onClick={() => onDelete(row.id)}
                                                            sx={{ color: 'red' }}
                                                            className={'ma-2'}
                                                        />
                                                    </TableCell>
                                                }
                                                return <TableCell key={`${ridx}${column.name}`}>{row[column.name]}</TableCell>
                                            })
                                        }
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default FCommonTable