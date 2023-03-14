import Stack from '@mui/material/Stack';
import ControlButton from './ControlsButton/ControlsButton';

export default function BudgetControls(props) {
  return (
    <Stack alignItems="center">
       <ControlButton props={props} AddOperation={(operation) => props.AddOperation(operation)} type={"income"}></ControlButton>
       <ControlButton props={props} AddOperation={(operation) => props.AddOperation(operation)} type={"expend"}></ControlButton>
    </Stack> 
  )
}