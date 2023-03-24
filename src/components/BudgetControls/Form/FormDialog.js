import Dialog from '@mui/material/Dialog';
import { DialogContent, DialogTitle, TextField, DialogActions, Button, Select, MenuItem } from '@mui/material';
import { connect } from 'react-redux';
import { addOperation, changeVisibilityForm, changeDate, changeValue, changeDescrption, clearForm, changeCategory, checkValue, checkDate } from '../../../redux/actions';

function createData(date, value, category, description, type) {
  const id = Date.now().toString()
  category = category === '' ? 'Разное' : category
  return { id, date, value, category, description, type }
}

const FormDialog = (props) => {
  const categoryList = props.type === 'income' ? props.categoriesForIncome : props.categoryforExpence

  return (
    <Dialog open={props.open} onClose={() => {
      props.changeVisibilityForm()
      props.clearForm()
    }}>
      <DialogTitle>Add operation</DialogTitle>
      <DialogContent>
        <TextField sx={{ mr: 2 }}
          id="field-date"
          autoFocus
          label=" "
          variant="standard"
          type="date"
          error={props.isErrorOfDate}
          value={props.date}
          onChange={(e) => props.changeDate(e.target.value).toString()}
          onBlur={() => {
            const newDate = new Date(props.date)
            if (isNaN(Date.parse(newDate)) || Date.parse(newDate) > Date.now())
              props.checkDate(true)
            else
              props.checkDate(false)
          }}
        />
        <TextField sx={{ mr: 2 }}
          id="field-value"
          label="value"
          variant="standard"
          error={props.isErrorOfValue}
          value={props.value}
          onChange={(e) => props.changeValue(e.target.value)}
          onBlur={() => props.checkValue()}
        />
        <Select sx={{ minWidth: 120 }}
          id="field-category"
          label="category"
          value={props.category}
          onChange={(e) => props.changeCategory(e.target.value)}
        >
          {categoryList.map((category) => (
            <MenuItem value={category}>{category}</MenuItem>
          ))}
        </Select>
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
        <Button onClick={() => {
          props.changeVisibilityForm()
          props.clearForm()
        }} color="primary">
          cancel
        </Button>
        <Button onClick={() => {
          if (!props.isErrorOfValue && !props.isErrorOfDate) {
            props.changeVisibilityForm()
            props.addOperation(createData(props.date, props.value, props.category, props.description, props.type))
            props.clearForm()
          }
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
    category: state.form.category,
    description: state.form.description,
    categoryforExpence: state.form.categoryforExpence,
    categoriesForIncome: state.form.categoriesForIncome,
    type: state.form.type,
    isErrorOfValue: state.form.isErrorOfValue,
    isErrorOfDate: state.form.isErrorOfDate
  }
}

const mapDispatchToProps = {
  addOperation,
  changeVisibilityForm,
  changeDate,
  changeValue,
  changeCategory,
  changeDescrption,
  clearForm,
  checkValue,
  checkDate,
}

export default connect(mapStateToProps, mapDispatchToProps)(FormDialog)