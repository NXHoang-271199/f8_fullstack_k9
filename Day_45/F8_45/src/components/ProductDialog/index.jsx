import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Box, MenuItem } from '@mui/material';

const categories = [
  {
    id: 1,
    value: 'Laptop',
  },
  {
    id: 2,
    value: 'Mobile',
  },
  {
    id: 3,
    value: 'PS5',
  },
  {
    id: 4,
    value: 'Air pod',
  },
];
export default function ({ show, onClose, width }) {

  return (
    <div>
      <Dialog
        open={show}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" width={width}>
          {"Create new product"}
        </DialogTitle>
        <DialogContent>
          <Box component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '97%' } }}
            noValidate
            autoComplete="off">
            <div>
              <TextField
                id="outlined-Name-input"
                label="Name"
                type="text"
                placeholder="Name"
                autoComplete="current-name"
              />
            </div>
            {/* <TextField
              id="outlined-select-category"
              select
              label="Category"
              // defaultValue="Laptop"
              helperText="Please select your category"
            >
              {categories.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField> */}
            <div>
              <TextField
                id="outlined-select-oderNum"
                label="Order Number"
                type="number"
                placeholder="OrderID"
              />
              <TextField
                id="outlined-Price-oderNum"
                label="Price"
                type="number"
                placeholder="Price"
              />
            </div>
          </Box>
          {/* <DialogContentText id="alert-dialog-description" >
            
          </DialogContentText> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Disagree</Button>
          <Button onClick={onClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}