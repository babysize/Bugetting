import { ADD_OPERATION } from "./types";

export function addOperation(operation) {
  return {
    type: ADD_OPERATION,
    payload: operation
  }
}