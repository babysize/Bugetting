import Dialog from '@mui/material/Dialog';
import { DialogContent, DialogTitle, TextField, DialogActions,Button } from '@mui/material';
import { connect } from 'react-redux';
import { addOperation } from '../../../redux/actions';


function createData(callback) {
  const id = Date.now().toString()
  const date = document.querySelector("#field-date").value.toString()
  const value = document.querySelector("#field-value").value
  const description = document.querySelector("#field-description").value
  const newOperation = { id, date, value, description }
  
  callback()
  return newOperation
}

const FormDialog = (props) => {
  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle>Add operation</DialogTitle>
      <DialogContent>
        <TextField sx={{mr:2}}
          id="field-date"
          label=" "
          variant="standard"
          type="date"
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
        <Button onClick={() => props.addOperation(createData(props.handleClose))}
                color="primary">
          add
        </Button>
      </DialogActions>
    </Dialog>  
  )
}

const mapDispatchToProps = {
  addOperation
}

export default connect(null, mapDispatchToProps)(FormDialog)