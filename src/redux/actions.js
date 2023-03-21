import { ADD_OPERATION, CHANGE_DATE, CHANGE_DESCRIPTION, CHANGE_VALUE, CHANGE_VISIBILITY, CLEAR_FORM } from "./types";

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

export const clearAndCloseForm = () => {
  return (dispatch) => {
    dispatch(changeVisibilityForm)
    dispatch(clearForm)
  }
}