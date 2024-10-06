import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Box, MenuItem } from '@mui/material';
import { useState } from 'react';
import { v4 } from 'uuid';

export default function ({ show, onClose, width, reload }) {
    const [category, setCategory] = useState({
        id: v4(),
        name: '',
        orderNum: 1,
    })
    const onInput = (e) => {
        console.log(e.target.value);
        const newCategory = { ...category }
        newCategory[e.target.name] = e.target.value
        setCategory({...newCategory})
    }

    const onSave = async () => {
        const response = await fetch('https://qzztw5-8080.csb.app/categories', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(category),
        })
        if (response.ok) { 
            await reload()
            onClose()
        }
    }
    return (
        <div>
            <Dialog
                open={show}
                onClose={onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" width={width}>
                    {"Create new Category"}
                </DialogTitle>
                <DialogContent>
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
                            />
                            <TextField
                                required
                                id="outlined-orderNum-input"
                                label="OrderNum"
                                type="number"
                                placeholder="OrderID"
                                name='orderNum'
                                onInput={onInput}
                            />
                        </div>
                    </Box>
                    {/* <DialogContentText id="alert-dialog-description" >
                        
                    </DialogContentText> */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>Disagree</Button>
                    <Button onClick={onSave} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}