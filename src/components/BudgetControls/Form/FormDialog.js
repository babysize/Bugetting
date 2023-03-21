import Dialog from '@mui/material/Dialog';
import { DialogContent, DialogTitle, TextField, DialogActions,Button } from '@mui/material';
import { connect } from 'react-redux';
import { addOperation, changeVisibilityForm, changeDate, changeValue, changeDescrption, clearForm } from '../../../redux/actions';

function createData(date, value, description) {
  const id = Date.now().toString()
  return { id, date, value, description }
}

const FormDialog = (props) => {
  return (
    <Dialog open={props.open} onClose={() =>{
      props.changeVisibilityForm()
      props.clearForm()
    }}>
      <DialogTitle>Add operation</DialogTitle>
      <DialogContent>
        <TextField sx={{mr:2}}
          id="field-date"
          label=" "
          variant="standard"
          type="date"
          value={props.date}
          onChange={(e) => props.changeDate(e.target.value).toString()}
        />
        <TextField 
          id="field-value"
          autoFocus
          label="value"
          variant="standard"
          type="number"
          value={props.value}
          onChange={(e) => props.changeValue(e.target.value)}
        />
        <TextField
          id="field-description"
          label="description"
          variant="standard"
          fullWidth
          value={props.description}
          onChange={(e) => props.changeDescrption(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() =>{
          props.changeVisibilityForm()
          props.clearForm()
        }} color="primary">
          cancel
        </Button>
        <Button onClick={() => {
          props.changeVisibilityForm()
          props.addOperation(createData(props.date, props.value, props.description))
          props.clearForm()
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
    open: state.form.isOpen,
    date: state.form.date,
    value: state.form.value,
    description: state.form.description
  }
}

const mapDispatchToProps = {
  addOperation,
  changeVisibilityForm,
  changeDate,
  changeValue,
  changeDescrption,
  clearForm
}

export default connect(mapStateToProps, mapDispatchToProps)(FormDialog)