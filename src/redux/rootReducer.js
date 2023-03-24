import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { ADD_OPERATION, CHANGE_CATEGORY, CHANGE_DATE, CHANGE_DESCRIPTION, CHANGE_VALUE, CHANGE_VISIBILITY, CHECK_DATE, CHECK_VALUE, CLEAR_FORM, CREATE_EXPENCE, CREATE_INCOME } from "./types";

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
  categoryforExpence: ['Продукты', 'Дом', 'Кафе и рестораны', 'Одежда', 'Медицина', 'Транспорт','Разное'],
  categoriesForIncome: ['Зарплата', 'Вклад', 'Пособие'],
  type: '',
  isErrorOfValue: false,
  isErrorOfDate: false,
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
    .addCase(CHECK_VALUE, (state) => {
      state.isErrorOfValue = /^(0|[1-9]\d*)(\.[0-9]{1,2})?$/.test(state.value)||state.value==null ? false : true
    })
    .addCase(CHECK_DATE, (state, action) => {
      state.isErrorOfDate = action.payload
    })
})

export const rootReducer = combineReducers({
  operations: operationsReducer,
  form: formReducer
})