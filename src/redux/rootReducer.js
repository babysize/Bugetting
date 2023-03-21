import { combineReducers } from "redux";
import { ADD_OPERATION, CHANGE_CATEGORY, CHANGE_DATE, CHANGE_DESCRIPTION, CHANGE_VALUE, CHANGE_VISIBILITY, CLEAR_FORM, CREATE_EXPENCE, CREATE_INCOME } from "./types";

const initialOperationState = {
    operationsList: []
}

function operationsReducer(state = initialOperationState, action) {
  switch (action.type) {
    case ADD_OPERATION:
      return {...state, operationsList: state.operationsList.concat([action.payload])}
      //{...state, operationsList: [...state.operationsList,action.payload]}
    default: return state
  }
}

const initialForm = {
  isOpen: false,
  date:'',
  value:'',
  description:'',
  category: '',
  categoryList: ['Продукты', 'Дом', 'Кафе и рестораны', 'Одежда', 'Медицина'],
  type: ''
}

function formReducer(state = initialForm, action) {
  switch (action.type) {
    case CHANGE_VISIBILITY:
      return {...state, isOpen: !state.isOpen}
    case CHANGE_DATE:
      return {...state, date: action.payload}
    case CHANGE_VALUE:
      return {...state, value: action.payload}
    case CHANGE_CATEGORY:
      return {...state, category: action.payload}
    case CHANGE_DESCRIPTION:
      return {...state, description: action.payload}
    case CLEAR_FORM:
      return {...state, date: '', value: '', description: '', category: '', type: ''}
    case CREATE_INCOME:
      return {...state, type: 'income'}
    case CREATE_EXPENCE:
      return {...state, type: 'expence'}
    default: return state
  }
}

export const rootReducer = combineReducers({
  operations: operationsReducer,
  form: formReducer
})