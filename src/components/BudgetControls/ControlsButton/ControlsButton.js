import React from 'react';
import IconButton from '@mui/material/IconButton';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import FormDialog from '../Form/FormDialog';
import { connect } from 'react-redux';
import { changeVisibilityForm } from '../../../redux/actions';

const ControlButton = (props) => {
  let icon
  switch (props.type) {
    case "+":
      icon = <AddBoxIcon color='success'></AddBoxIcon>
      break;

    case "-":
      icon = <IndeterminateCheckBoxIcon color='error'></IndeterminateCheckBoxIcon>
      break;
    default: break;
  }

  return (
    <>
      <IconButton onClick={() => props.changeVisibilityForm()}>
        {icon}
      </IconButton>
      <FormDialog></FormDialog>
    </>
  )
}

const mapDispatchToProps = {
  changeVisibilityForm 
}

export default connect(null, mapDispatchToProps)(ControlButton)