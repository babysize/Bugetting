import React from 'react';
import ReactDOM from 'react-dom/client';
import Grid from '@mui/material/Grid';
import ControlsButton from './BugetControls/BudgetControls';
import Operations from './Operations/Operations';

class Bodgeting extends React.Component {
  render(){
    return(
      <Grid container>
        <Grid item xs={1}>
          <ControlsButton></ControlsButton>
        </Grid>
        <Grid item xs={12}>
          <Operations></Operations>
        </Grid>
      </Grid>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Bodgeting/>)