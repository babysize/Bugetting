import IconButton from '@mui/material/IconButton';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { connect } from 'react-redux';
import { changeVisibilityForm, createExpence } from '../../../redux/actions';

const ExpenceButton = (props) => {
  return (
    <>
      <IconButton onClick={() => {
        props.changeVisibilityForm()
        props.createExpence()
        }}>
        <IndeterminateCheckBoxIcon color='error'></IndeterminateCheckBoxIcon>
      </IconButton>
    </>
  )
}

const mapDispatchToProps = {
  changeVisibilityForm,
  createExpence
}

export default connect(null, mapDispatchToProps)(ExpenceButton)