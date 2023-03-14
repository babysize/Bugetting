import React from 'react';
import ReactDOM from 'react-dom/client';
import Grid from '@mui/material/Grid';
import BudgetControls from './components/BudgetControls/BudgetControls';
import Operations from './components/Operations/Operations';

class Bodgeting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      operations: [],
    }
  }

  AddOperation(operation) {
    this.setState ({
      operations: [...this.state.operations,{...operation}]
    })
  }

  render(){
    return(
      <Grid container>
        <Grid item xs={1}>
          <BudgetControls
            operations={this.props.operations}
            AddOperation={(operation) => this.AddOperation(operation)}
          ></BudgetControls>
        </Grid>
        <Grid item xs={3}>
          <Operations
            rows={this.state.operations}
          ></Operations>
        </Grid>
      </Grid>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Bodgeting/>)