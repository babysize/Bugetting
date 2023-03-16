import React from 'react';
import ReactDOM from 'react-dom/client';
import Grid from '@mui/material/Grid';
import BudgetControls from './components/BudgetControls/BudgetControls';
import Operations from './components/Operations/Operations';
import { createStore } from 'redux';
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

class Bodgeting extends React.Component {
  render(){
    return(
      <Provider store={store}>
      <Grid container>
        <Grid item xs={1}>
          <BudgetControls></BudgetControls>
        </Grid>
        <Grid item xs={3}>
          <Operations></Operations>
        </Grid>
      </Grid>
      </Provider>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Bodgeting/>)