import IconButton from '@mui/material/IconButton';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';

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
  return (
    <IconButton>
      {icon}
    </IconButton>
  )
}