import React from 'react';
import IconButton from '@mui/material/IconButton';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import FormDialog from '../Form/FormDialog';

export default function ControlButton(props) {
  let icon
  switch (props.type) {
    case "income":
      icon = <AddBoxIcon color='success'></AddBoxIcon>
      break;

    case "expend":
      icon = <IndeterminateCheckBoxIcon color='error'></IndeterminateCheckBoxIcon>
      break;
  }

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton onClick={handleClickOpen}>
        {icon}
      </IconButton>
      <FormDialog
        type={props.type}
        open={open}
        handleClose={handleClose}
        AddOperation={(operation) => props.AddOperation(operation)}>
      </FormDialog>
    </>
  )
}