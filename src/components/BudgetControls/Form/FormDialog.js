import Dialog from '@mui/material/Dialog';
import { DialogContent, DialogTitle, TextField, DialogActions,Button } from '@mui/material';
import dateFormat from 'dateformat';

const date = new Date()

function formatDate(date) {
  return dateFormat(date, "dd.mm.yyyy");
}

function createData(callback) {
  const id = new Date()
  const date = document.querySelector("#field-date").value
  const value = document.querySelector("#field-value").value
  const description = document.querySelector("#field-description").value

  callback()
  return { id, date, value, description };
}

function virificationValue(value) {
  return Number(value) ? true : false
}

export default function FormDialog(props) {
  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle>{props.type}</DialogTitle>
      <DialogContent>
        <TextField sx={{mr:2}}
          id="field-date"
          label=" "
          variant="standard"
          defaultValue={formatDate(date)}
          type="date"
          error="true"
        />
        <TextField 
          id="field-value"
          autoFocus
          label="value"
          variant="standard"
          type="number"
        />
        <TextField
          id="field-description"
          label="description"
          variant="standard"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          cancel
        </Button>
        <Button onClick={() => {props.AddOperation(createData(props.handleClose))}} color="primary">
          add
        </Button>
      </DialogActions>
    </Dialog>  
  )
}