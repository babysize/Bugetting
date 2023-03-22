import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { ADD_OPERATION, CHANGE_CATEGORY, CHANGE_DATE, CHANGE_DESCRIPTION, CHANGE_VALUE, CHANGE_VISIBILITY, CLEAR_FORM, CREATE_EXPENCE, CREATE_INCOME } from "./types";

const initialOperationState = {
    operationsList: []
}

const operationsReducer = createReducer(initialOperationState, (builder) => {
  builder
    .addCase(ADD_OPERATION, (state, action) => {
      state.operationsList.push(action.payload)
    })
})

const initialForm = {
  isOpen: false,
  date:'',
  value:'',
  description:'',
  category: '',
  categoryforExpence: ['Продукты', 'Дом', 'Кафе и рестораны', 'Одежда', 'Медицина', 'Транспорт'],
  categoriesForIncome: ['Зарплата', 'Вклад', 'Пособие'],
  type: ''
}

const formReducer = createReducer(initialForm, (builder) => {
  builder
    .addCase(CHANGE_VISIBILITY, (state) => {
      state.isOpen = !state.isOpen
    })
    .addCase(CHANGE_DATE, (state, action) => {
      state.date = action.payload
    })
    .addCase(CHANGE_VALUE, (state, action) => {
      state.value = action.payload
    })
    .addCase(CHANGE_CATEGORY, (state, action) => {
      state.category = action.payload
    })
    .addCase(CHANGE_DESCRIPTION, (state, action) => {
      state.description = action.payload
    })
    .addCase(CLEAR_FORM, (state) => {
      state.date = ''
      state.value = ''
      state.description = ''
      state.category = ''
      state.type = ''
    })
    .addCase(CREATE_INCOME, (state) => {
      state.type = 'income'
    })
    .addCase(CREATE_EXPENCE, (state) => {
      state.type = 'expence'
    })
})

export const rootReducer = combineReducers({
  operations: operationsReducer,
  form: formReducer
})