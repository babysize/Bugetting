import Stack from '@mui/material/Stack';
import IncomeButton from './ControlsButton/IncomeButton';
import ExpenceButton from './ControlsButton/ExpenceButton';
import FormDialog from './Form/FormDialog';

export default function BudgetControls(props) {
  return (
    <Stack alignItems="center">
       <IncomeButton></IncomeButton>
       <ExpenceButton></ExpenceButton>
       <FormDialog></FormDialog>
    </Stack> 
  )
}