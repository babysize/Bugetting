import Stack from '@mui/material/Stack';
import ControlButton from './ControlsButton/ControlsButton';

export default function ControlsButton(props) {
  return (
    <Stack>
       <ControlButton type={"income"}></ControlButton>
       <ControlButton type={"expend"}></ControlButton>
    </Stack> 
  )
}