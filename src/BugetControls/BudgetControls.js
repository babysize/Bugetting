import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';

function ControlsButton(props) {
  return (
    <Stack>
      <IconButton>
        <AddBoxIcon color='success'></AddBoxIcon>
      </IconButton>   
      <IconButton>
        <IndeterminateCheckBoxIcon color='error'></IndeterminateCheckBoxIcon>
      </IconButton>  
    </Stack> 
  )
}

export default ControlsButton