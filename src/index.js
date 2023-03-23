import React from 'react';
import ReactDOM from 'react-dom/client';
import Grid from '@mui/material/Grid';
import BudgetControls from './components/BudgetControls/BudgetControls';
import Operations from './components/Operations/Operations';
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import PieChartByCategory from './components/Charts/PieChart'

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
})
//const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

class Bodgeting extends React.Component {
  render(){
    return(
      <Provider store={store}>
      <Grid container>
        <Grid item xs={1}>
          <BudgetControls></BudgetControls>
        </Grid>
        <Grid item xs={3}>
          <PieChartByCategory></PieChartByCategory>
        </Grid>
      </Grid>
      <Operations></Operations>
      </Provider>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Bodgeting/>)