import IconButton from '@mui/material/IconButton';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { connect } from 'react-redux';
import { changeVisibilityForm, createIncome } from '../../../redux/actions';

const IncomeButton = (props) => {
  return (
    <>
      <IconButton onClick={() => {
        props.changeVisibilityForm()
        props.createIncome()
        }}>
        <AddBoxIcon color='success'></AddBoxIcon>
      </IconButton>
    </>
  )
}

const mapDispatchToProps = {
  changeVisibilityForm,
  createIncome
}

export default connect(null, mapDispatchToProps)(IncomeButton)