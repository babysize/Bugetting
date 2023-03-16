import { combineReducers } from "redux";
import { ADD_OPERATION } from "./types";

const initialOperationState = {
    operationsList: []
}

function operationsReducer(state = initialOperationState, action) {
  switch (action.type) {
    case ADD_OPERATION:
      return {...state, operationsList: state.operationsList.concat([action.payload])}
      //{...state, operationsList: [...state.operationsList,[...action.payload]]}
    default: return state
  }
}

export const rootReducer = combineReducers({
  operations: operationsReducer
})