import DialogContainer from '../DialogContainer/index.jsx';
import { Box, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import React from 'react';


export default function ({ category, show, onClose, width, reload }) {
    // console.log(category);

    const [curCategory, setCurCategory] = useState({
        id: null,
        name: '',
        orderNum: '',
    })

    useEffect(() => {
        setCurCategory(category)
    }, [category])
    const onInput = (e) => {
        //     console.log(e.target.value);
        const newCategory = { ...curCategory }
        newCategory[e.target.name] = e.target.value
        setCurCategory({ ...newCategory })
    }

    const onSave = async () => {

        const method = curCategory.id ? 'PUT' : 'POST'
        const apiUrl = curCategory.id ? `https://px7ltm-8080.csb.app/categories/${curCategory.id}` : 'https://px7ltm-8080.csb.app/categories'

        const response = await fetch(`${apiUrl}`, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(curCategory),
        })
        if (response.ok) {
            await reload()
            onClose()
        }
    }
    return (
        <>
            <DialogContainer
                show={show}
                onSave={onSave}
                onClose={onClose}
                width={width}
            >
                <Box
                    component="form"
                    sx={{ '& .MuiTextField-root': { m: 1, width: '97%' } }}
                    noValidate
                    autoComplete="off">
                    <div>
                        <TextField
                            required
                            id="outlined-Name-input"
                            label="Name"
                            type="text"
                            placeholder="Name"
                            name='name'
                            autoComplete="current-name"
                            onInput={onInput}
                            value={curCategory.name || ''}
                        />
                        <TextField
                            required
                            id="outlined-orderNum-input"
                            label="OrderNum"
                            type="number"
                            placeholder="OrderID"
                            name='orderNum'
                            onInput={onInput}
                            value={curCategory.orderNum || ''}
                        />
                    </div>
                </Box>
            </DialogContainer>
        </>
    )
}