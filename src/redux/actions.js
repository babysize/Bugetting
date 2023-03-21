import { ADD_OPERATION, CHANGE_CATEGORY, CHANGE_DATE, CHANGE_DESCRIPTION, CHANGE_VALUE, CHANGE_VISIBILITY, CLEAR_FORM, CREATE_EXPENCE, CREATE_INCOME } from "./types";

export function addOperation(operation) {
  return {
    type: ADD_OPERATION,
    payload: operation
  }
}

export function changeVisibilityForm() {
  return {
    type: CHANGE_VISIBILITY
  }
}

export function changeDate(date) {
  return {
    type: CHANGE_DATE,
    payload: date
  }
}

export function changeValue(value) {
  return {
    type: CHANGE_VALUE,
    payload: value
  }
}

export function changeCategory(category) {
  return {
    type: CHANGE_CATEGORY,
    payload: category
  }
}

export function changeDescrption(description) {
  return {
    type: CHANGE_DESCRIPTION,
    payload: description
  }
}

export function clearForm() {
  return {
    type: CLEAR_FORM
  }
}

export function createIncome() {
  return {
    type: CREATE_INCOME
  }
}

export function createExpence() {
  return {
    type: CREATE_EXPENCE
  }
}