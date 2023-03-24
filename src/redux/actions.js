import { createAction } from "@reduxjs/toolkit";
import { ADD_OPERATION, CHANGE_CATEGORY, CHANGE_DATE, CHANGE_DESCRIPTION, CHANGE_VALUE, CHANGE_VISIBILITY, CHECK_DATE, CHECK_VALUE, CLEAR_FORM, CREATE_EXPENCE, CREATE_INCOME, DELETE_OPERATION } from "./types";

export const addOperation = createAction(ADD_OPERATION)
export const changeVisibilityForm = createAction(CHANGE_VISIBILITY)
export const changeDate = createAction(CHANGE_DATE)
export const changeValue = createAction(CHANGE_VALUE)
export const changeCategory = createAction(CHANGE_CATEGORY)
export const changeDescrption = createAction(CHANGE_DESCRIPTION)
export const clearForm = createAction(CLEAR_FORM)
export const createIncome = createAction(CREATE_INCOME)
export const createExpence = createAction(CREATE_EXPENCE)
export const checkValue = createAction(CHECK_VALUE)
export const checkDate = createAction(CHECK_DATE)
export const deleteOperation = createAction(DELETE_OPERATION)