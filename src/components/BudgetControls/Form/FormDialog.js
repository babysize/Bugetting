import Dialog from '@mui/material/Dialog';
import { DialogContent, DialogTitle, TextField, DialogActions,Button } from '@mui/material';
import { connect } from 'react-redux';
import { addOperation, changeVisibilityForm } from '../../../redux/actions';


function createData() {
  const id = Date.now().toString()
  const date = document.querySelector("#field-date").value.toString()
  const value = document.querySelector("#field-value").value
  const description = document.querySelector("#field-description").value
  const newOperation = { id, date, value, description }
    
  return newOperation
}

const FormDialog = ({open, addOperation,changeVisibilityForm}) => {
  return (
    <Dialog open={open} onClose={changeVisibilityForm}>
      <DialogTitle>Add operation</DialogTitle>
      <DialogContent>
        <TextField sx={{mr:2}}
          id="field-date"
          label=" "
          variant="standard"
          type="date"
          onChange={e => console.log(e.target.value)}
        />
        <TextField 
          id="field-value"
          autoFocus
          label="value"
          variant="standard"
          type="number"
          onChange={e => console.log(e.target.value)}
        />
        <TextField
          id="field-description"
          label="description"
          variant="standard"
          fullWidth
          onChange={e => console.log(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={changeVisibilityForm} color="primary">
          cancel
        </Button>
        <Button onClick={() => {
          changeVisibilityForm()
          addOperation(createData())
        }}
                color="primary">
          add
        </Button>
      </DialogActions>
    </Dialog>  
  )
}

const mapStateToProps = state => {
  return {
    open: state.form.isOpen
  }
}

const mapDispatchToProps = {
  addOperation: () => addOperation(createData()),
  changeVisibilityForm
}

export default connect(mapStateToProps, mapDispatchToProps)(FormDialog)