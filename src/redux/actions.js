import { ADD_OPERATION, CHANGE_VISIBILITY } from "./types";

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