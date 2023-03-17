import Stack from '@mui/material/Stack';
import ControlButton from './ControlsButton/ControlsButton';

export default function BudgetControls(props) {
  return (
    <Stack alignItems="center">
       <ControlButton type={"+"}></ControlButton>
       <ControlButton type={"-"}></ControlButton>
    </Stack> 
  )
}